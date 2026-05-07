import React from 'react';
import { motion } from 'framer-motion';
import { Navbar, Footer, About, Contact } from './components';
import { Home, Dashboard } from './pages';

/*
  Main App Component
  Single-page application with multiple sections
  Features smooth page transitions and maintains existing backend integration
*/
function App() {
  return (
    <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Navigation Bar */}
      <Navbar />

      {/* Page Sections with Staggered Animation */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3
            }
          }
        }}
      >
        {/* Home/Landing Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <Home />
        </motion.div>

        {/* Dashboard Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <Dashboard />
        </motion.div>

        {/* About Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <About />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <Contact />
        </motion.div>
      </motion.main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}

export default App;