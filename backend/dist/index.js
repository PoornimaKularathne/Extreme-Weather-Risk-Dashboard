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
const weatherCache_1 = require("./weatherCache");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// =========================
// ✅ SERVE FRONTEND BUILD
// =========================
app.use(express_1.default.static(path_1.default.join(__dirname, "../../frontend/build")));
// =========================
// ✅ API KEY
// =========================
const API_KEY = process.env.API_KEY;
// =========================
// ✅ API CHECK
// =========================
app.get("/api", (req, res) => {
    res.json({ message: "Backend running 🚀" });
});
// =========================
// ✅ WEATHER API
// =========================
app.get("/weather", async (req, res) => {
    const cities = ["Colombo", "London", "Tokyo", "Dubai", "New York"];
    // 🧠 CACHE CHECK
    if ((0, weatherCache_1.isCacheValid)(10)) {
        return res.json((0, weatherCache_1.getCache)()?.data);
    }
    try {
        const results = await Promise.all(cities.map(city => axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)));
        const processed = results.map(r => {
            const data = r.data;
            return {
                city: data.name,
                risk: (0, riskCalculator_1.calculateRisk)(data),
                temp: data.main.temp,
                wind: data.wind.speed,
                visibility: data.visibility
            };
        });
        processed.sort((a, b) => b.risk - a.risk);
        (0, weatherCache_1.setCache)(processed);
        res.json(processed);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});
// =========================
// ✅ FRONTEND ROUTE (IMPORTANT)
// =========================
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../frontend/build/index.html"));
});
// =========================
// ✅ PORT
// =========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
