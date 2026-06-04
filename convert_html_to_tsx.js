const fs = require('fs');
const { JSDOM } = require('jsdom');

function styleToObject(styleString) {
  if (!styleString) return {};
  const style = {};
  styleString.split(';').forEach(s => {
    const parts = s.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      const value = parts.slice(1).join(':').trim();
      if (key && value) {
        style[key] = value;
      }
    }
  });
  return style;
}

function domToJSX(node) {
  if (node.nodeType === 3) { // Text node
    let text = node.textContent;
    text = text.replace(/\{/g, '{"{"}').replace(/\}/g, '{"}"}');
    return text;
  }
  if (node.nodeType === 8) { // Comment node
    return `{/* ${node.textContent.replace(/\*\//g, '* /')} */}`;
  }
  if (node.nodeType !== 1) { // Not an element
    return '';
  }

  const tag = node.tagName.toLowerCase();
  
  if (tag === 'script' || tag === 'style') return '';

  let jsx = `<${tag}`;
  
  for (const attr of node.attributes) {
    let name = attr.name;
    let value = attr.value;
    
    // Skip problematic attributes
    if (name.toLowerCase() === 'onclick' || name.toLowerCase() === 'onsubmit') {
      continue;
    }

    if (name === 'class') name = 'className';
    if (name === 'for') name = 'htmlFor';
    if (name === 'tabindex') name = 'tabIndex';
    if (name === 'colspan') name = 'colSpan';
    if (name === 'rowspan') name = 'rowSpan';
    if (name === 'stroke-width') name = 'strokeWidth';
    if (name === 'stroke-linecap') name = 'strokeLinecap';
    if (name === 'stroke-linejoin') name = 'strokeLinejoin';
    if (name === 'fill-rule') name = 'fillRule';
    if (name === 'clip-rule') name = 'clipRule';
    if (name === 'viewbox') name = 'viewBox';
    if (name.startsWith('data-') || name.startsWith('aria-')) {
      // keep as is
    } else if (name.includes('-')) {
      name = name.replace(/-([a-z])/g, g => g[1].toUpperCase());
    }

    if (name === 'style') {
      const styleObj = styleToObject(value);
      jsx += ` style={${JSON.stringify(styleObj)}}`;
    } else {
      value = value.replace(/"/g, '&quot;');
      // Fix weird unicode replacements if any exist, but better to just output value safely
      jsx += ` ${name}="${value}"`;
    }
  }

  const selfClosingTags = ['img', 'input', 'br', 'hr', 'source', 'meta', 'link'];
  if (selfClosingTags.includes(tag)) {
    jsx += ' />';
  } else {
    jsx += '>';
    for (const child of node.childNodes) {
      jsx += domToJSX(child);
    }
    jsx += `</${tag}>`;
  }
  
  return jsx;
}

const htmlFiles = [
  'Biological-Field-Research-Expeditions',
  'Course',
  'Custom-Safaris',
  'Destinations',
  'gallery',
  'Kenya-Safaris',
  'Medical-Expedition-Programs',
  'Professional-Biological-Field-Expeditions',
  'recentgallery',
  'Review',
  'Rwanda-7-Days',
  'Rwanda-Safaris',
  'Study-Aboard',
  'Tanzania-Safari',
  'Uganda-Adventures',
  'Ugandan-11Days',
  'Ugandan-14-Days',
  'Ugandan-3Days',
  'Ugandan-4Days',
  'Ugandan-5-Days',
  'Ugandan-8days',
  'Veterinary-Conservation-'
];

for (const base of htmlFiles) {
  const htmlPath = `${base}.html`;
  const tsxPath = `app/${base}/page.tsx`;
  
  if (!fs.existsSync(htmlPath) || !fs.existsSync(tsxPath)) {
    continue;
  }
  
  const html = fs.readFileSync(htmlPath, 'utf-8');
  // Strip null bytes and weird unicode artifacts if any
  const cleanHtml = html.replace(/\x00/g, '');

  const dom = new JSDOM(cleanHtml);
  const document = dom.window.document;
  
  document.querySelectorAll('header, footer, nav').forEach(el => el.remove());
  
  const body = document.querySelector('body');
  if (!body) continue;
  
  let jsxContent = '';
  for (const child of body.childNodes) {
    jsxContent += domToJSX(child);
  }

  const componentName = base.replace(/[^a-zA-Z0-9]/g, '');
  const tsx = `"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ${componentName}Page() {
  return (
    <div className="bg-white">
      ${jsxContent}
    </div>
  );
}
`;

  fs.writeFileSync(tsxPath, tsx);
}
