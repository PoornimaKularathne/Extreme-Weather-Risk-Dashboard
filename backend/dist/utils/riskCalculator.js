"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRisk = calculateRisk;
function calculateRisk(weather) {
    let score = 0;
    // Extract values
    const temp = weather.main.temp;
    const windSpeed = weather.wind.speed;
    const visibility = weather.visibility;
    // Condition 1: High Temperature
    if (temp > 308) { // 308K ≈ 35°C
        score += 30;
    }
    // Condition 2: Strong Wind
    if (windSpeed > 10) {
        score += 30;
    }
    // Condition 3: Low Visibility
    if (visibility < 5000) {
        score += 40;
    }
    return score;
}
