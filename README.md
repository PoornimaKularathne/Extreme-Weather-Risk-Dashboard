# 🌦 Extreme Weather Risk Dashboard

A modern, production-ready React + TypeScript dashboard for monitoring extreme weather risks across multiple cities. Built with a sleek dark theme, glassmorphism UI, and smooth animations.

## ✨ Features

### 🎨 Modern UI/UX Design
- **Dark Theme**: Professional dark navy (#0B1220) background with glassmorphism effects
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and hover effects
- **Glassmorphism Cards**: Translucent cards with blur effects and subtle shadows

### 📊 Dashboard Analytics
- **Real-time Risk Monitoring**: Live weather data integration with risk scoring
- **Visual Risk Indicators**: Color-coded risk levels (Low/Medium/High) with progress bars
- **City Grid Layout**: Responsive card-based layout for multiple cities
- **Summary Statistics**: Dashboard overview with risk distribution metrics

### 🧭 Navigation & Sections
- **Sticky Navigation Bar**: Responsive navbar with mobile hamburger menu
- **Single Page Application**: Smooth scrolling between Home, Dashboard, About, and Contact sections
- **Professional Footer**: Complete footer with links and branding

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Axios Integration**: Preserved existing backend API integration
- **Component Architecture**: Modular, reusable React components
- **Performance Optimized**: Efficient rendering with minimal re-renders

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Extreme-Weather-Risk-Dashboard
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

3. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
Extreme-Weather-Risk-Dashboard/
├── backend/                 # Express.js API server
│   ├── src/
│   │   ├── index.ts        # Main server file
│   │   └── weatherCache.ts # Weather data caching logic
│   └── package.json
├── frontend/                # React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navbar.tsx   # Navigation bar
│   │   │   ├── RiskCard.tsx # City risk display card
│   │   │   ├── About.tsx    # About section
│   │   │   ├── Contact.tsx  # Contact form
│   │   │   ├── Footer.tsx   # Footer component
│   │   │   └── index.ts     # Component exports
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx     # Landing page
│   │   │   ├── Dashboard.tsx# Main dashboard
│   │   │   └── index.ts     # Page exports
│   │   ├── styles/          # Global styles
│   │   │   └── global.css   # Design system & utilities
│   │   ├── App.tsx          # Main app component
│   │   └── index.tsx        # App entry point
│   └── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Background**: `#0B1220` (Dark Navy)
- **Card Background**: `rgba(255,255,255,0.05)` (Glassmorphism)
- **Primary Accent**: `#3B82F6` (Blue)
- **Danger**: `#EF4444` (Red)
- **Success**: `#22C55E` (Green)
- **Warning**: `#F59E0B` (Orange)

### Typography
- **Font Family**: Inter (system font stack)
- **Text Colors**: White primary, Gray secondary/muted

### Components
- **Glass Cards**: Translucent with backdrop blur and borders
- **Smooth Transitions**: 0.3s ease transitions
- **Hover Effects**: Lift animations and glow effects
- **Responsive Grid**: Auto-adjusting columns based on screen size

## 🔧 API Integration

The frontend integrates with the existing backend API:

- **Endpoint**: `GET /weather`
- **Response**: Array of city risk objects
- **Data Structure**:
  ```typescript
  {
    city: string;
    risk: number;      // 0-100 risk score
    temp: number;      // Temperature in Celsius
    wind: number;      // Wind speed in km/h
    visibility: number; // Visibility in km
  }
  ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column grid)
- **Tablet**: 768px - 1024px (2 column grid)
- **Desktop**: > 1024px (3-4 column grid)

## 🛠️ Technologies Used

### Frontend
- **React 19**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Framer Motion**: Smooth animations
- **Axios**: HTTP client for API calls
- **CSS Variables**: Design system implementation

### Backend
- **Express.js**: Web framework
- **TypeScript**: Server-side type safety
- **CORS**: Cross-origin resource sharing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is built for the Innovior Internship Challenge.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by professional analytics dashboards
- Designed for real-world weather monitoring applications