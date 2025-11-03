# Ahmed Mohamed Hassan Etman - Portfolio Website

A modern, responsive single-page portfolio website showcasing Ahmed Etman's education, projects, skills, and professional experience.

## 🎨 Design Features

- **Primary Brand Color**: #93A8DF (Light Blue)
- **Text Color**: #000000 (Black)
- **Clean, modern single-page layout**
- **Fully responsive and mobile-first design**
- **Smooth scrolling navigation**
- **Interactive project cards with expandable details**
- **Accessible and keyboard-friendly**

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file with semantic markup
├── styles.css          # Complete CSS styling with responsive design
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🚀 Deployment Instructions

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it: `portfolio` or `your-username.github.io`

2. **Upload Files**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "main" branch as source
   - Click Save
   - Your site will be live at: `https://your-username.github.io/portfolio/`

### Option 2: Netlify

1. **Drag and Drop**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the entire portfolio folder
   - Get instant deployment with a custom URL

2. **Or Connect GitHub**
   - Connect your GitHub repository
   - Netlify auto-deploys on every commit

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd portfolio
   vercel
   ```

### Option 4: Local Development

1. **Simple HTTP Server**
   ```bash
   # Using Python
   cd portfolio
   python -m http.server 8000
   
   # Or using Node.js
   npx serve
   ```

2. **Open in Browser**
   - Navigate to `http://localhost:8000`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML5 markup
- ARIA labels and landmarks
- Keyboard navigation support
- Focus indicators for all interactive elements
- Alt text for images
- Responsive text sizing
- High contrast ratio for readability

## 🎯 Key Sections

1. **Header** - Name, profile image, and contact information
2. **About** - Brief professional summary
3. **Education** - Academic background with GPA
4. **Projects** - Interactive project cards with expandable details
5. **Experience** - Professional and training experience
6. **Skills** - Technical skills showcase
7. **Contact** - Multiple ways to get in touch
8. **Footer** - Copyright and credits

## 🔧 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #93A8DF;  /* Background color */
    --text-color: #000000;      /* Text color */
}
```

### Update Content
Edit the text directly in `index.html` - all content is clearly structured with semantic tags.

### Add Resume PDF
Place your resume file in the portfolio folder and name it `resume.pdf`, or update the link in the header:
```html
<a href="/your-resume.pdf" class="btn btn-primary" download>Download Resume</a>
```

## 📧 Contact Information

- **Email**: ahmedelmagical@gmail.com
- **Phone**: 01012953088
- **LinkedIn**: [linkedin.com/in/ahmed-etman-11a53b345](https://linkedin.com/in/ahmed-etman-11a53b345)
- **Location**: Egypt

## 🏆 Features Implemented

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth scroll navigation
✅ Interactive project cards
✅ Mobile-friendly hamburger menu
✅ Accessibility compliance
✅ SEO-friendly markup
✅ Fast loading performance
✅ Cross-browser compatibility
✅ Clean, maintainable code
✅ Professional design with brand colors

## 📝 License

© 2025 Ahmed Mohamed Hassan Etman. All rights reserved.

---

**Built with passion and dedication to showcasing engineering excellence!**
