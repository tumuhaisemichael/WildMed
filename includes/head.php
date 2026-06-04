  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $pageTitle ?? 'WildMed - WildMed Safaris and Field Projects'; ?></title>
  <meta name="description"
    content="<?php echo $pageDescription ?? 'WildMed Safaris and Field Projects, Experience unforgettable wildlife safaris, veterinary programs, and medical expeditions across Kenya, Tanzania, Uganda, and Rwanda with WildMed Safaris.'; ?>">
  <meta name="keywords"
    content="Uganda gorilla trekking, vet volunteer Africa, medical mission Tanzania, custom East Africa safari, wildlife immobilization course, Rwanda gorilla trekking, Kenya wildlife safari">
  <meta name="author" content="WildMed Safaris">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://wildmedug.com">

  <!-- Organization Schema -->
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WildMed Safaris",
  "alternateName": ["WildMed", "WildMedUG", "WildMed Safaris", "WildMed UG"],
  "url": "https://wildmedug.com",
  "logo": "https://wildmedug.com/img/android-chrome-192x192.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot 626, Seguku Katale",
    "postOfficeBoxNumber": "P.O.Box 10296",
    "addressLocality": "Kampala",
    "addressCountry": "Uganda"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+256-740-205146",
    "contactType": "Customer service",
    "email": "wildmeduganda@gmail.com",
    "areaServed": "UG",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/wildmedug",
    "https://www.instagram.com/wildmedug",
    "https://twitter.com/wildmedug",
    "https://www.youtube.com/channel/wildmedug"
  ]
}
</script>

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://wildmedug.com/">
  <meta property="og:title" content="<?php echo $pageTitle ?? 'WildMed - WildMed Safaris and Field Projects'; ?>">
  <meta property="og:description"
    content="<?php echo $pageDescription ?? 'WildMed - WildMed Safaris and Field Projects, WildMed Safaris offers unforgettable wildlife adventures, veterinary programs, and medical expeditions across Kenya, Tanzania, Uganda, and Rwanda.'; ?>">
  <meta property="og:image" content="https://wildmedug.com/img/logo.png">
  <meta property="og:site_name" content="WildMed Safaris">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://wildmedug.com/">
  <meta property="twitter:title" content="<?php echo $pageTitle ?? 'WildMed - WildMed Safaris and Field Projects'; ?>">
  <meta property="twitter:description"
    content="<?php echo $pageDescription ?? 'WildMed - WildMed Safaris and Field Projects, Experience unforgettable wildlife safaris, veterinary programs, and medical expeditions across Kenya, Tanzania, Uganda, and Rwanda.'; ?>">
  <meta property="twitter:image" content="https://wildmedug.com/img/social-preview.jpg">

  <script src="https://cdn.tailwindcss.com/3.4.16"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-9dG+f3MfOcdMkF7kB2uG3GcTTcZ5P1HlHw4gRHYKkphz1n6T2o1dS4gU+wN6kSAilArAJnTTw6AXYrDRN0nP1g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <link rel="icon" type="image/x-icon" href="/img/favicon.ico">
  <link rel="shortcut icon" href="/img/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#3B2A1B',
            secondary: '#2D5A3D'
          },
          borderRadius: {
            'none': '0px',
            'sm': '4px',
            DEFAULT: '8px',
            'md': '12px',
            'lg': '16px',
            'xl': '20px',
            '2xl': '24px',
            '3xl': '32px',
            'full': '9999px',
            'button': '8px'
          }
        }
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Inter:wght@300;400;500;600;700&display=swap"
    rel="stylesheet">
  <style>
    :where([class^="ri-"])::before {
      content: "\f3c2";
    }

    .parallax-bg {
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .image-carousel {
      animation: scroll 20s linear infinite;
    }

    .image-carousel:hover {
      animation-play-state: paused;
    }

    @keyframes scroll {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-50%);
      }
    }

    .dropdown {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .dropdown-trigger:hover .dropdown {
      opacity: 1;
      visibility: visible;
    }

    .counter {
      font-variant-numeric: tabular-nums;
    }
    
    body {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    input, textarea, select {
      -webkit-user-select: auto;
      -moz-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
  </style>