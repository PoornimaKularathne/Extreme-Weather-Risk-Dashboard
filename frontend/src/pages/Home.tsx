import React from 'react';
import { motion } from 'framer-motion';

/*
  Home Page Component
  Landing section with hero content and call-to-action
  Provides introduction to the Weather Risk Dashboard
*/
const Home: React.FC = () => {
  return (
    <section id="home" className="py-2xl">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-lg" style={{ color: 'var(--text-primary)' }}>
              Extreme Weather Risk
              <span style={{ color: 'var(--accent-primary)' }}> Dashboard</span>
            </h1>

            <p className="text-lg text-secondary mb-xl leading-relaxed">
              Monitor weather conditions across multiple cities with advanced risk assessment.
              Get real-time insights on temperature, wind speed, and visibility to make
              informed decisions during extreme weather events.
            </p>

            <div className="flex flex-col sm:flex-row gap-md">
              <a href="#dashboard" className="btn btn-primary text-center">
                View Dashboard
              </a>
              <a href="#about" className="btn btn-secondary text-center">
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            className="glass-card p-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-6xl mb-lg">🌦️</div>
              <h3 className="text-xl font-semibold mb-md" style={{ color: 'var(--text-primary)' }}>
                Real-Time Analytics
              </h3>
              <p className="text-secondary mb-lg">
                Advanced algorithms analyze weather patterns to provide accurate risk assessments
                and help you stay ahead of extreme weather conditions.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-md text-center">
                <div>
                  <div className="text-2xl font-bold mb-sm" style={{ color: 'var(--accent-primary)' }}>
                    24/7
                  </div>
                  <div className="text-secondary text-sm">Monitoring</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-sm" style={{ color: 'var(--success)' }}>
                    100+
                  </div>
                  <div className="text-secondary text-sm">Cities</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-sm" style={{ color: 'var(--warning)' }}>
                    99.9%
                  </div>
                  <div className="text-secondary text-sm">Accuracy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;