let cacheData: any = null;
let lastUpdated: number = 0;

// 📦 Save data to cache
export const setCache = (data: any) => {
  cacheData = data;
  lastUpdated = Date.now();
};

// 📦 Get cached data
export const getCache = () => {
  return {
    data: cacheData,
    lastUpdated,
  };
};

// ⏱ Check if cache is still valid (in minutes)
export const isCacheValid = (minutes: number = 10) => {
  if (!cacheData) return false;

  const now = Date.now();
  const diff = (now - lastUpdated) / 1000 / 60;

  return diff < minutes;
};