# FlexiSaf Tech Store

A modern e-commerce web application built as part of the FlexiSaf Internship Program - Week 1 Intermediate Deliverable. This project demonstrates practical implementation of ES6 features and array methods in a real-world application.

## 🚀 Live Demo

[View Live Site](https://blaqbeard.github.io/FlexiSaf-Tech-Store/) | [GitHub Repository](https://github.com/Blaqbeard/FlexiSaf-Tech-Store)

## 📋 Project Overview

This is a fully functional tech store showcasing FlexiSaf's product line including laptops, tablets, audio devices, wearables, accessories, and cameras. The application features a responsive design, interactive shopping cart, and demonstrates modern JavaScript development practices.

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+)
- **Styling:** Tailwind CSS v4 with custom build system
- **Build Tool:** Tailwind CSS CLI
- **Storage:** Local Storage for cart persistence
- **Images:** Local product images

## ✨ Features

### Core Functionality
- **Product Catalog:** 12 tech products across 6 categories
- **Search & Filter:** Real-time product search and category filtering
- **Sorting Options:** Sort by price, rating, name, or relevance
- **Shopping Cart:** Add, remove, update quantities with persistent storage
- **Responsive Design:** Mobile-first approach with Tailwind CSS

### ES6 Features Implemented
- `const` and `let` declarations
- Arrow functions throughout the codebase
- Template literals for dynamic HTML generation
- Object and array destructuring
- Spread operator for array manipulation
- ES6 class syntax for Cart management
- Map data structure for efficient cart operations

### Array Methods Demonstrated
- `map()` - Product rendering and data transformation
- `filter()` - Search and category filtering
- `reduce()` - Cart total calculations
- `sort()` - Product sorting functionality
- `find()` - Product lookup by ID
- `forEach()` - Category dropdown population
- `some()` and `every()` - Data validation patterns

## 📁 Project Structure

```
FlexiSaf-Tech-Store/
├── index.html              # Main HTML file
├── src/
│   ├── input.css           # Tailwind CSS source file
│   ├── output.css          # Compiled Tailwind CSS
│   └── script.js           # Combined JavaScript application
├── images/                 # Product images
│   ├── ultrabook14.jpeg
│   ├── laptop15.jpeg
│   ├── tab11.jpeg
│   ├── tabmini8.jpeg
│   ├── budspro.jpeg
│   ├── soundbar2.1.jpeg
│   ├── watchS.jpeg
│   ├── watchX.jpeg
│   ├── charge65.jpeg
│   ├── mechanicalkeyboard.jpeg
│   ├── cam4k.jpeg
│   └── lens50.jpeg
├── package.json            # Node.js dependencies
├── package-lock.json       # Dependency lock file
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (for Tailwind CSS build process)
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Blaqbeard/FlexiSaf-Tech-Store.git
   cd FlexiSaf-Tech-Store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS (if making changes)**
   ```bash
   npx tailwindcss -i src/input.css -o src/output.css
   ```

4. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

## 🎯 Learning Outcomes Achieved

This project successfully demonstrates the Week 1 Intermediate requirements:

### ES6 Features
- ✅ Modern variable declarations (`const`, `let`)
- ✅ Arrow functions for concise syntax
- ✅ Template literals for string interpolation
- ✅ Destructuring for clean data extraction
- ✅ Spread operator for array manipulation
- ✅ ES6 classes for object-oriented programming

### Array Methods
- ✅ `map()` - Transforming product data to HTML
- ✅ `filter()` - Implementing search and category filters
- ✅ `reduce()` - Calculating cart totals and taxes
- ✅ `sort()` - Multiple sorting algorithms
- ✅ `find()` - Locating specific products
- ✅ `forEach()` - Populating UI elements

### Modern JavaScript Patterns
- ✅ Function composition and chaining
- ✅ Local storage integration
- ✅ Event delegation
- ✅ Responsive design principles
- ✅ Clean, maintainable code structure

## 🎨 Customization

### Adding New Products
Edit the `products` array in `src/script.js`:

```javascript
{
  id: 'p013',
  name: 'New Product Name',
  brand: 'FlexiSaf',
  category: 'Category',
  price: 100000,
  rating: 4.5,
  stock: 10,
  image: 'images/new-product.jpeg',
  description: 'Product description here.'
}
```

### Styling Changes
Modify `src/input.css` and rebuild:

```bash
npx tailwindcss -i src/input.css -o src/output.css
```

## 🌐 Deployment Options

### GitHub Pages (Recommended)
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch" → master
4. Your site will be live at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Deploy automatically on every push
3. Custom domain support available

### Vercel
1. Import your GitHub repository
2. Zero-config deployment
3. Automatic HTTPS and CDN

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

This is an internship deliverable project. For suggestions or improvements, please open an issue or submit a pull request.

## 📄 License

This project is part of the FlexiSaf Internship Program. All rights reserved.

## 👨‍💻 Author

**Blaqbeard** - FlexiSaf Intern
- GitHub: [@Blaqbeard](https://github.com/Blaqbeard)

---

*Built with ❤️ for the FlexiSaf Internship Program*