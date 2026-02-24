# Spookiz Daycare - Landing Page

A responsive, static HTML/CSS/JS website for the Spookiz Daycare Android educational game.

## 📁 Project Structure

```
/
├── index.html          # Main HTML file
├── styles.scss         # SCSS source file (requires compilation)
├── styles.css          # Compiled CSS (ready to use)
└── README.md          # This file
```

## 🎨 Features

- **Fully Responsive Design** - Mobile, tablet, and desktop optimized
- **Modern SCSS Architecture** - Variables, mixins, and nested selectors
- **Smooth Animations** - Hover effects and transitions
- **Interactive Carousel** - Mobile-friendly screenshot gallery
- **Gradient Designs** - Beautiful purple, pink, and yellow color scheme
- **Clean Code** - Well-organized and commented

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **SCSS/CSS3** - Advanced styling with variables and mixins
- **Vanilla JavaScript** - No dependencies
- **SVG Icons** - Inline vector graphics

## 📱 Sections

1. **Header** - Sticky navigation with download button
2. **Hero** - Eye-catching introduction with stats
3. **Features** - 6 feature cards with icons
4. **Screenshots** - Responsive gallery (grid on desktop, carousel on mobile)
5. **Download** - Call-to-action section with stats
6. **Footer** - Links and contact information

## 🎨 SCSS Features

### Variables
```scss
$primary-purple: #9333ea;
$primary-pink: #ec4899;
$primary-yellow: #eab308;
// And more...
```

### Mixins
```scss
@mixin respond-to($breakpoint)
@mixin gradient-text($from, $to, $via: null)
@mixin card-hover
```

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Usage

### Option 1: Use Compiled CSS (Quick Start)
Simply open `index.html` in your browser. The compiled CSS is already linked.

### Option 2: Compile SCSS (Development)

If you want to modify the SCSS:

1. Install a SCSS compiler (e.g., Sass):
   ```bash
   npm install -g sass
   ```

2. Compile SCSS to CSS:
   ```bash
   sass styles.scss styles.css
   ```

3. Watch for changes (auto-compile):
   ```bash
   sass --watch styles.scss:styles.css
   ```

## 📝 Customization

### Colors
Edit variables in `styles.scss`:
```scss
$primary-purple: #9333ea;  // Change to your brand color
$primary-pink: #ec4899;    // Change to your accent color
```

### Breakpoints
Adjust responsive breakpoints:
```scss
$breakpoint-md: 768px;   // Tablet
$breakpoint-lg: 1024px;  // Desktop
```

### Typography
Change fonts in the body selector:
```scss
body {
  font-family: 'Your Font', sans-serif;
}
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This is a demonstration project for Spookiz Daycare game landing page.

## 🤝 Credits

- Design: Modern gradient-based UI
- Icons: Inline SVG (Lucide-inspired)
- Images: Unsplash API placeholders
