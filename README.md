# Dr. Dhananjay V Kale - Law of Attraction Workshop Landing Page

A modern, responsive landing page for Dr. Dhananjay V Kale's Law of Attraction workshop, built with HTML, CSS, and JavaScript.

## Features

### 🎯 Core Functionality
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Countdown Timer**: Dynamic countdown to registration deadline (October 18, 2024)
- **Registration Form**: Complete form with validation for name, email, and phone
- **Smooth Scrolling**: Enhanced navigation with smooth scroll effects
- **Interactive Elements**: Hover effects, animations, and visual feedback

### 🎨 Design Elements
- **Modern Gradient Backgrounds**: Eye-catching color schemes throughout
- **Card-based Layout**: Clean, organized content presentation
- **Typography**: Professional Poppins font family
- **Icons**: Emoji-based icons for visual appeal
- **Animations**: Scroll-triggered animations and transitions

### 📱 Sections Included
1. **Header**: Navigation with contact link
2. **Hero Section**: Main title, subtitle, instructor info, pricing, and countdown timer
3. **Features**: 5 key benefits with detailed descriptions
4. **Mind Power**: Statistics and motivational content
5. **Future Self**: Benefits after completing the workshop
6. **Workshop Schedule**: Detailed 2-day program breakdown
7. **Testimonials**: Success stories and feedback
8. **Bonuses**: Value proposition and pricing
9. **FAQ**: Frequently asked questions
10. **Registration**: Form with validation
11. **Footer**: Links and copyright information

## Files Structure

```
DKaleLandingPage/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This documentation file
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. The website will load with all functionality active

### Customization

#### Changing the Countdown Timer
Edit the target date in `script.js`:
```javascript
const targetDate = new Date('October 18, 2024 23:59:59').getTime();
```

#### Modifying Content
- Edit text content directly in `index.html`
- Update styling in `styles.css`
- Modify interactive behavior in `script.js`

#### Color Scheme
The main colors used are:
- Primary: `#667eea` (Blue gradient)
- Secondary: `#764ba2` (Purple gradient)
- Accent: `#ff6b6b` (Red) and `#ffd93d` (Yellow)
- Text: `#2c3e50` (Dark blue-gray)

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

## Performance Features

- **Optimized Images**: Uses CSS gradients instead of heavy images
- **Debounced Scroll Events**: Smooth performance during scrolling
- **Efficient Animations**: CSS transitions for better performance
- **Minimal JavaScript**: Lightweight code for fast loading

## Mobile Responsiveness

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## Interactive Features

1. **Countdown Timer**: Updates every second until deadline
2. **Form Validation**: Real-time validation for registration form
3. **Smooth Scrolling**: Clicking navigation links smoothly scrolls to sections
4. **Hover Effects**: Interactive buttons and cards with hover animations
5. **Scroll Animations**: Elements animate into view as you scroll
6. **Keyboard Navigation**: Press 'R' to scroll to registration form

## Form Handling

The registration form includes:
- Client-side validation for all fields
- Email format validation
- Phone number length validation
- Success message display
- Form reset after successful submission

**Note**: In a production environment, you would need to integrate with a backend service to actually process form submissions.

## Customization Tips

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style the section in `styles.css`
3. Add any interactive behavior in `script.js`

### Modifying Animations
- Scroll animations are controlled by the `IntersectionObserver` in `script.js`
- Hover effects are defined in CSS with `:hover` pseudo-classes
- Button animations use CSS `transform` and `transition` properties

### Changing Fonts
Update the Google Fonts import in `index.html` and modify the `font-family` property in `styles.css`.

## Support

For any issues or customization needs, please refer to the code comments or modify the files according to your requirements.

## License

This project is created for Dr. Dhananjay V Kale's workshop landing page. Please ensure you have the right to use any content or modify as needed for your specific use case.
