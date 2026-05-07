import React from 'react';
import { motion } from 'framer-motion';

/*
  Stat Card Component
  Displays key statistics in a compact, visually appealing format
  Used for dashboard summary metrics with icons and values
*/
interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  color?: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  color = 'var(--accent-primary)',
  delay = 0
}) => {
  return (
    <motion.div
      className="glass-card p-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3, scale: 1.02 }}
    >
      <div className="text-3xl mb-sm">{icon}</div>
      <div
        className="text-2xl font-bold mb-sm"
        style={{ color }}
      >
        {value}
      </div>
      <div
        className="text-secondary text-sm font-medium"
        style={{ color: 'var(--text-secondary)' }}
      >
        {label}
      </div>
    </motion.div>
  );
};

export default StatCard;