import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { RiskCard, StatCard, Loader } from '../components';

/*
  Dashboard Page Component
  Main dashboard displaying weather risk data in a responsive grid
  Features top summary statistics and enhanced loading states
  Fetches data from backend API and renders risk cards with animations
*/
type CityRisk = {
  city: string;
  risk: number;
  temp: number;
  wind: number;
  visibility: number;
};

const Dashboard: React.FC = () => {
  const [data, setData] = useState<CityRisk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /*
    Fetch weather risk data from backend API
    Calculate summary statistics for dashboard overview
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/weather');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError('Failed to load weather data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /*
    Calculate key dashboard metrics from weather data
    Provides insights for the summary statistics section
  */
  const calculateMetrics = (cities: CityRisk[]) => {
    if (cities.length === 0) return null;

    const totalCities = cities.length;
    const avgRisk = Math.round(cities.reduce((sum, city) => sum + city.risk, 0) / cities.length);
    const highestRiskCity = cities.reduce((max, city) =>
      city.risk > max.risk ? city : max
    );
    const lowestRiskCity = cities.reduce((min, city) =>
      city.risk < min.risk ? city : min
    );

    return {
      totalCities,
      avgRisk,
      highestRiskCity: highestRiskCity.city,
      lowestRiskCity: lowestRiskCity.city
    };
  };

  const metrics = calculateMetrics(data);

  if (loading) {
    return (
      <section id="dashboard" className="py-xl">
        <div className="container">
          {/* Loading Header */}
          <motion.div
            className="text-center mb-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-md" style={{ color: 'var(--text-primary)' }}>
              Weather Risk Analytics
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Real-time monitoring of extreme weather conditions across multiple cities.
            </p>
          </motion.div>

          {/* Loading Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="glass-card p-lg animate-pulse">
                  <div className="flex items-center justify-center mb-md">
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  </div>
                  <div className="h-8 bg-gray-700 rounded mb-sm"></div>
                  <div className="h-4 bg-gray-700 rounded"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Loading City Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Loader type="skeleton" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="dashboard" className="py-xl">
        <div className="container">
          <motion.div
            className="glass-card p-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-danger text-xl mb-md">⚠️ {error}</div>
            <button
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="dashboard" className="py-xl">
      <div className="container">
        {/* Dashboard Header */}
        <motion.div
          className="text-center mb-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-md" style={{ color: 'var(--text-primary)' }}>
            Weather Risk Analytics
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Real-time monitoring of extreme weather conditions across multiple cities.
            Risk scores are calculated based on temperature, wind speed, and visibility.
          </p>
        </motion.div>

        {/* Summary Statistics Section */}
        {metrics && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StatCard
              icon="🌍"
              label="Cities Analyzed"
              value={metrics.totalCities}
              delay={0.1}
            />
            <StatCard
              icon="📊"
              label="Average Risk"
              value={`${metrics.avgRisk}%`}
              color={metrics.avgRisk > 60 ? 'var(--danger)' : metrics.avgRisk > 30 ? 'var(--warning)' : 'var(--success)'}
              delay={0.2}
            />
            <StatCard
              icon="🔴"
              label="Highest Risk"
              value={metrics.highestRiskCity}
              color="var(--danger)"
              delay={0.3}
            />
            <StatCard
              icon="🟢"
              label="Safest City"
              value={metrics.lowestRiskCity}
              color="var(--success)"
              delay={0.4}
            />
          </motion.div>
        )}

        {/* Risk Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {data.map((city, index) => (
            <motion.div
              key={city.city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <RiskCard
                city={city.city}
                risk={city.risk}
                temp={city.temp}
                wind={city.wind}
                visibility={city.visibility}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Summary Stats */}
        {data.length > 0 && (
          <motion.div
            className="glass-card p-lg mt-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-lg text-center" style={{ color: 'var(--text-primary)' }}>
              Risk Distribution Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              <div className="text-center p-md rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                <div className="text-3xl font-bold mb-sm" style={{ color: 'var(--success)' }}>
                  {data.filter(city => city.risk <= 30).length}
                </div>
                <div className="text-secondary font-medium">Low Risk Cities</div>
                <div className="text-xs text-secondary mt-sm">Safe conditions</div>
              </div>
              <div className="text-center p-md rounded-lg" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
                <div className="text-3xl font-bold mb-sm" style={{ color: 'var(--warning)' }}>
                  {data.filter(city => city.risk > 30 && city.risk <= 60).length}
                </div>
                <div className="text-secondary font-medium">Medium Risk Cities</div>
                <div className="text-xs text-secondary mt-sm">Monitor closely</div>
              </div>
              <div className="text-center p-md rounded-lg" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
                <div className="text-3xl font-bold mb-sm" style={{ color: 'var(--danger)' }}>
                  {data.filter(city => city.risk > 60).length}
                </div>
                <div className="text-secondary font-medium">High Risk Cities</div>
                <div className="text-xs text-secondary mt-sm">Take precautions</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;