"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const riskCalculator_1 = require("./utils/riskCalculator");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// =========================
// ✅ SERVE FRONTEND
// =========================
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
// =========================
// ✅ API ROUTE
// =========================
const API_KEY = process.env.API_KEY;
app.get("/weather", async (req, res) => {
    try {
        const cities = ["Colombo", "London", "Tokyo", "Dubai", "New York"];
        const results = await Promise.all(cities.map(city => axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)));
        const processed = results.map(r => ({
            city: r.data.name,
            risk: (0, riskCalculator_1.calculateRisk)(r.data),
            temp: r.data.main.temp,
            wind: r.data.wind.speed,
            visibility: r.data.visibility
        }));
        processed.sort((a, b) => b.risk - a.risk);
        res.json(processed);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});
// =========================
// ✅ IMPORTANT: FRONTEND ROUTE
// =========================
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../public/index.html"));
});
// =========================
// ✅ START SERVER
// =========================
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
