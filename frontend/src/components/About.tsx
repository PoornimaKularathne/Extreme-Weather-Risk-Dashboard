import React from 'react';
import { motion } from 'framer-motion';

/*
  About Section Component
  Provides information about the Weather Risk Dashboard system
  Includes explanation of risk scoring and system capabilities
*/
const About: React.FC = () => {
  return (
    <section id="about" className="py-xl">
      <div className="container">
        <motion.div
          className="text-center mb-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-md" style={{ color: 'var(--text-primary)' }}>
            About Weather Risk Dashboard
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Advanced analytics platform designed to monitor and assess extreme weather risks
            across multiple cities in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {/* System Overview */}
          <motion.div
            className="glass-card p-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-md" style={{ color: 'var(--text-primary)' }}>
              System Overview
            </h3>
            <p className="text-secondary text-sm">
              Our dashboard aggregates weather data from multiple sources to provide
              comprehensive risk assessments. Using advanced algorithms, we analyze
              temperature, wind speed, and visibility to calculate risk scores.
            </p>
          </motion.div>

          {/* Risk Scoring */}
          <motion.div
            className="glass-card p-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-md" style={{ color: 'var(--text-primary)' }}>
              Risk Scoring
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: 'var(--success)' }}
                ></div>
                <span className="text-sm text-secondary">Low Risk (0-30): Safe conditions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: 'var(--warning)' }}
                ></div>
                <span className="text-sm text-secondary">Medium Risk (31-60): Monitor closely</span>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: 'var(--danger)' }}
                ></div>
                <span className="text-sm text-secondary">High Risk (61-100): Take precautions</span>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="glass-card p-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-md" style={{ color: 'var(--text-primary)' }}>
              Key Features
            </h3>
            <ul className="text-secondary text-sm space-y-2">
              <li>• Real-time weather data integration</li>
              <li>• Multi-city risk monitoring</li>
              <li>• Responsive design for all devices</li>
              <li>• Visual risk indicators and progress bars</li>
              <li>• Professional analytics interface</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;