"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCacheValid = exports.getCache = exports.setCache = void 0;
let cacheData = null;
let lastUpdated = 0;
// 📦 Save data to cache
const setCache = (data) => {
    cacheData = data;
    lastUpdated = Date.now();
};
exports.setCache = setCache;
// 📦 Get cached data
const getCache = () => {
    return {
        data: cacheData,
        lastUpdated,
    };
};
exports.getCache = getCache;
// ⏱ Check if cache is still valid (in minutes)
const isCacheValid = (minutes = 10) => {
    if (!cacheData)
        return false;
    const now = Date.now();
    const diff = (now - lastUpdated) / 1000 / 60;
    return diff < minutes;
};
exports.isCacheValid = isCacheValid;
