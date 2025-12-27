# Source Camera Model Identification Dashboard

A beautiful, modern React web application for displaying SCMI (Source Camera Model Identification) results with advanced animations and stunning UI.

## Features

✨ **Advanced Animations**
- Gradient shifting background
- Floating particles
- Smooth transitions and hover effects
- Row animations with staggered delays
- Visual progress bars for metrics

🎨 **Modern UI Design**
- Glassmorphism effects with backdrop blur
- Gradient backgrounds and overlays
- Responsive design for all screen sizes
- Interactive elements with hover states

📊 **Functional Components**
- Dataset selector dropdown (Forchheim, Vision, Dresden, Socrates)
- Dynamic results table
- Performance metrics display (PLA%, ILA%)
- Visual progress indicators

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Create a new React app:
\`\`\`bash
npx create-react-app scmi-dashboard
cd scmi-dashboard
\`\`\`

2. Replace the contents of `src/App.jsx` with the provided App.jsx file
3. Replace the contents of `src/App.css` with the provided App.css file

4. Update `src/index.js` to remove StrictMode (optional):
\`\`\`javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
\`\`\`

5. Start the development server:
\`\`\`bash
npm start
\`\`\`

The app will open at `http://localhost:3000`

## Customization

### Adding More Data
Edit the `tableData` array in `App.jsx`:

\`\`\`javascript
const tableData = [
  { method: 'Your Method Name', pla: '95.2', ila: '93.8' },
  { method: 'Another Method', pla: '97.1', ila: '95.4' },
  // Add more rows as needed
];
\`\`\`

### Changing Datasets
Modify the `datasets` array in `App.jsx`:

\`\`\`javascript
const datasets = ['Dataset1', 'Dataset2', 'Dataset3'];
\`\`\`

### Styling Adjustments
All styles are in `App.css`. Key sections:
- **Colors**: Update gradient colors in `.app-container` and other gradient properties
- **Animations**: Modify animation durations and keyframes
- **Spacing**: Adjust padding and margins in respective classes

## Technologies Used

- **React** - UI library
- **CSS3** - Advanced styling with animations
- **Glassmorphism** - Modern UI design pattern
- **CSS Animations** - Smooth, performant animations

## Performance Features

- Hardware-accelerated animations
- Optimized CSS with GPU-accelerated properties
- Smooth 60fps animations
- Responsive and mobile-friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Built with ❤️ for SCMI Research
