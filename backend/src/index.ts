import express from "express";
import axios from "axios";
import cors from "cors";
import { calculateRisk } from "./utils/riskCalculator";

const app = express();
app.use(cors());

const API_KEY = "1bcd7ab8518b8bb0266f0f3952aca8d2";

app.get("/weather", async (req, res) => {
    const cities = ["Colombo", "London", "Tokyo", "Dubai", "New York"];

    try {
        const results = await Promise.all(
            cities.map(city =>
                axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
                )
            )
        );

        //  Transform data
        const processed = results.map(r => {
            const data = r.data;

            return {
                city: data.name,
                risk: calculateRisk(data),
                temp: data.main.temp,
                wind: data.wind.speed,
                visibility: data.visibility
            };
        });

        //  Sort by risk (highest first)
        processed.sort((a, b) => b.risk - a.risk);

        res.json(processed);

    } catch (err) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));