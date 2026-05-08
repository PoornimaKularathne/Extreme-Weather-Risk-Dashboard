import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { calculateRisk } from "./utils/riskCalculator";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


//  SERVE FRONTEND

app.use(express.static(path.join(__dirname, "../public")));


//  API ROUTE

const API_KEY = process.env.API_KEY;

app.get("/weather", async (req, res) => {
  try {
    const cities = ["Colombo", "London", "Tokyo", "Dubai", "New York"];

    const results = await Promise.all(
      cities.map(city =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
      )
    );

    const processed = results.map(r => ({
      city: r.data.name,
      risk: calculateRisk(r.data),
      temp: r.data.main.temp,
      wind: r.data.wind.speed,
      visibility: r.data.visibility
    }));

    processed.sort((a, b) => b.risk - a.risk);

    res.json(processed);

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});


// FRONTEND ROUTE

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


//  START SERVER

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});