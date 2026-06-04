const fs = require('fs');
const { glob } = require('glob');

async function fix() {
  const files = await glob('app/**/*.tsx');

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');

    // ── Event handlers: lowercase html → camelCase React ──
    const eventMap = {
      oninput:      'onInput',
      onchange:     'onChange',
      onclick:      'onClick',
      onsubmit:     'onSubmit',
      onkeydown:    'onKeyDown',
      onkeyup:      'onKeyUp',
      onkeypress:   'onKeyPress',
      onmouseenter: 'onMouseEnter',
      onmouseleave: 'onMouseLeave',
      onmouseover:  'onMouseOver',
      onmouseout:   'onMouseOut',
      onfocus:      'onFocus',
      onblur:       'onBlur',
      onload:       'onLoad',
      onerror:      'onError',
      onscroll:     'onScroll',
      onresize:     'onResize',
    };

    for (const [html, react] of Object.entries(eventMap)) {
      // Match  oninput="..."  or  oninput={...}
      const re = new RegExp(` ${html}="[^"]*"`, 'gi');
      content = content.replace(re, ` ${react}={undefined}`);
      const re2 = new RegExp(` ${html}=\\{[^}]*\\}`, 'gi');
      content = content.replace(re2, ` ${react}={undefined}`);
    }

    // ── Boolean attributes that need no value in JSX ──
    const booleans = [
      ['autoplay', 'autoPlay'],
      ['autoPlay=""', 'autoPlay'],
      [' muted=""', ' muted'],
      [' loop=""', ' loop'],
      [' controls=""', ' controls'],
      [' disabled=""', ' disabled'],
      [' readOnly=""', ' readOnly'],
      [' multiple=""', ' multiple'],
      [' hidden=""', ' hidden'],
      [' allowFullScreen=""', ' allowFullScreen'],
    ];
    for (const [from, to] of booleans) {
      content = content.split(from).join(to);
    }

    // ── `value` on static inputs should be `defaultValue` ──
    // Only for non-controlled ones (where there is no onChange nearby handled yet)
    // We'll convert `value="..."` on input/select/textarea to `defaultValue="..."`
    // But only when it's a plain string literal, not JSX expression
    content = content.replace(/<(input|select|textarea)([^>]*?) value="([^"]*)"([^>]*)>/g,
      (match, tag, before, val, after) => {
        // Don't replace if there's already a defaultValue or onChange
        if (/defaultValue|onChange/.test(before + after)) return match;
        return `<${tag}${before} defaultValue="${val}"${after}>`;
      }
    );

    // ── Misc HTML attrs → JSX ──
    content = content.replace(/ tabindex=/g, ' tabIndex=');
    content = content.replace(/ crossorigin=/gi, ' crossOrigin=');
    content = content.replace(/ charset=/gi, ' charSet=');
    content = content.replace(/ colspan=/gi, ' colSpan=');
    content = content.replace(/ rowspan=/gi, ' rowSpan=');
    content = content.replace(/ cellpadding=/gi, ' cellPadding=');
    content = content.replace(/ cellspacing=/gi, ' cellSpacing=');
    content = content.replace(/ enctype=/gi, ' encType=');
    content = content.replace(/ accesskey=/gi, ' accessKey=');
    content = content.replace(/ contenteditable=/gi, ' contentEditable=');
    content = content.replace(/ frameborder=/gi, ' frameBorder=');
    content = content.replace(/ marginwidth=/gi, ' marginWidth=');
    content = content.replace(/ marginheight=/gi, ' marginHeight=');
    content = content.replace(/ hreflang=/gi, ' hrefLang=');
    content = content.replace(/ novalidate=/gi, ' noValidate=');
    content = content.replace(/ spellcheck=/gi, ' spellCheck=');
    content = content.replace(/ autocomplete=/gi, ' autoComplete=');
    content = content.replace(/ autofocus=/gi, ' autoFocus=');

    // ── Fix `required=""` → `required` ──
    content = content.replace(/ required="[^"]*"/g, ' required');
    // ── Fix `disabled=""` → `disabled` ──
    content = content.replace(/ disabled="[^"]*"/g, ' disabled');
    // ── Fix `checked="..."` → `defaultChecked` ──
    content = content.replace(/ checked="[^"]*"/g, ' defaultChecked');
    // ── Fix `selected="..."` → remove (use defaultValue on parent select) ──
    content = content.replace(/ selected="[^"]*"/g, '');

    // ── Fix `rows=` and `cols=` as numbers ──
    content = content.replace(/ rows="(\d+)"/g, ' rows={$1}');
    content = content.replace(/ cols="(\d+)"/g, ' cols={$1}');

    // ── Fix target="_blank" without rel ──
    content = content.replace(/target="_blank"(?![^>]*rel=)/g, 'target="_blank" rel="noopener noreferrer"');

    fs.writeFileSync(file, content);
  }

  console.log(`Fixed ${files.length} TSX files`);
}

fix().catch(console.error);
