import React from 'react';
import { motion } from 'framer-motion';

/*
  Risk Card Component
  Displays weather risk data for a single city in a glassmorphism card
  Includes risk visualization with progress bar and color coding
  Enhanced with hover effects and improved visual hierarchy
*/
interface RiskCardProps {
  city: string;
  risk: number;
  temp: number;
  wind: number;
  visibility: number;
}

const RiskCard: React.FC<RiskCardProps> = ({ city, risk, temp, wind, visibility }) => {
  /*
    Determine risk level and styling based on risk score
    Low: 0-30 (green), Medium: 31-60 (yellow), High: 61-100 (red)
  */
  const getRiskLevel = (riskScore: number) => {
    if (riskScore <= 30) return {
      level: 'Low',
      color: 'var(--success)',
      bgColor: 'rgba(34, 197, 94, 0.1)',
      glowColor: 'rgba(34, 197, 94, 0.3)'
    };
    if (riskScore <= 60) return {
      level: 'Medium',
      color: 'var(--warning)',
      bgColor: 'rgba(245, 158, 11, 0.1)',
      glowColor: 'rgba(245, 158, 11, 0.3)'
    };
    return {
      level: 'High',
      color: 'var(--danger)',
      bgColor: 'rgba(239, 68, 68, 0.1)',
      glowColor: 'rgba(239, 68, 68, 0.3)'
    };
  };

  const riskInfo = getRiskLevel(risk);

  return (
    <motion.div
      className="glass-card p-lg cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -6,
        boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px ${riskInfo.glowColor}`
      }}
      style={{
        transition: 'all 0.3s ease',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* City Name - Prominent */}
      <motion.h3
        className="text-2xl font-bold mb-lg"
        style={{ color: 'var(--text-primary)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {city}
      </motion.h3>

      {/* Risk Score - Very Prominent */}
      <motion.div
        className="mb-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-sm">
          <span className="text-secondary font-medium">Risk Score</span>
          <motion.span
            className="text-3xl font-bold"
            style={{ color: riskInfo.color }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            {risk}
          </motion.span>
        </div>

        {/* Enhanced Risk Progress Bar */}
        <div
          className="w-full h-4 rounded-full overflow-hidden relative"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
          }}
        >
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{ backgroundColor: riskInfo.color }}
            initial={{ width: 0 }}
            animate={{ width: `${risk}%` }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.5,
                delay: 0.8,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Risk Label Badge */}
      <motion.div
        className="inline-flex items-center px-lg py-sm rounded-full text-sm font-semibold mb-lg"
        style={{
          backgroundColor: riskInfo.bgColor,
          color: riskInfo.color,
          border: `1px solid ${riskInfo.color}40`,
          boxShadow: `0 0 10px ${riskInfo.glowColor}20`
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="w-2 h-2 rounded-full mr-sm" style={{ backgroundColor: riskInfo.color }}></span>
        {riskInfo.level} Risk
      </motion.div>

      {/* Weather Details - Grouped Neatly */}
      <motion.div
        className="grid grid-cols-1 gap-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="grid grid-cols-3 gap-md">
          <div className="text-center p-sm rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <div className="text-2xl mb-sm">🌡️</div>
            <p className="text-secondary text-xs font-medium">Temperature</p>
            <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              {Math.round(temp - 273.15)}°C
            </p>
          </div>
          <div className="text-center p-sm rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <div className="text-2xl mb-sm">💨</div>
            <p className="text-secondary text-xs font-medium">Wind Speed</p>
            <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              {wind} km/h
            </p>
          </div>
          <div className="text-center p-sm rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <div className="text-2xl mb-sm">👁️</div>
            <p className="text-secondary text-xs font-medium">Visibility</p>
            <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              {visibility} km
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RiskCard;