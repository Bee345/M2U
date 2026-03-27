# M2U Mobile Clone — Design System
Version 1.0

## Brand Identity
**Maybank Tiger.** Bold, professional, and secure. The interface should feel like a high-end native banking application with smooth transitions and high-contrast elements.

## Color Palette
Defined as CSS custom properties in `src/index.css`:

  --color-primary:      #FFBC00; /* Maybank Yellow */
  --color-primary-dark: #E6A900;
  --color-accent:       #FF8C00; /* Orange for account cards */
  --color-background:   #FFFFFF;
  --color-surface:      #F4F4F4; /* Light gray for sections */
  --color-surface-alt:  #EBEBEB;
  --color-text-primary: #000000;
  --color-text-secondary:#666666;
  --color-text-inverse: #FFFFFF;
  --color-border:       #DDDDDD;
  --color-border-focus: #FFBC00;
  --color-success:      #28A745;
  --color-warning:      #FFC107;
  --color-error:        #DC3545;

## Typography
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;

Google Fonts: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap

Type scale:
  --text-xs:    0.75rem / 1rem;
  --text-sm:    0.875rem / 1.25rem;
  --text-base:  1rem / 1.5rem;
  --text-lg:    1.125rem / 1.75rem;
  --text-xl:    1.25rem / 1.75rem;
  --text-2xl:   1.5rem / 2rem;

## Spacing & Layout
  --space-base: 4px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 20px;
  --max-width-mobile: 430px;

## Component Patterns
- **Account Card:** Linear gradient from #FFBC00 to #FF8C00, white text, subtle shadow.
- **Action Icon:** Circular white background, yellow icon, text label below.
- **Input Field:** Underlined style for login, bordered for forms.
- **Primary Button:** Solid yellow with black text, rounded-full.

## Animation & Motion
  --transition-fast:   150ms ease;
  --transition-base:   250ms ease;
  --transition-slow:   400ms ease;

- **Page Transitions:** Slide in from right for navigation.
- **Modal Entry:** Fade in with scale up.

## Iconography
- **Source:** Lucide React for general icons.
- **Custom:** SVG paths for specific M2U grid icons (Transfer, Pay Bills, etc.).

## Responsive Breakpoints
- Mobile-first: Optimized for 375px - 430px.
- Desktop: Centered mobile view with background.
