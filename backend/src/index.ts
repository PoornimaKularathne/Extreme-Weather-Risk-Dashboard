import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { calculateRisk } from "./utils/riskCalculator";
import { getCache, setCache, isCacheValid } from "./weatherCache";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// SERVE FRONTEND BUILD

app.use(express.static(path.join(__dirname, "../../frontend/build")));


//  API KEY

const API_KEY = process.env.API_KEY;


//  API CHECK

app.get("/api", (req, res) => {
  res.json({ message: "Backend running 🚀" });
});


// WEATHER API

app.get("/weather", async (req, res) => {
  const cities = ["Colombo", "London", "Tokyo", "Dubai", "New York"];

  //  CACHE CHECK
  if (isCacheValid(10)) {
    return res.json(getCache()?.data);
  }

  try {
    const results = await Promise.all(
      cities.map(city =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
      )
    );

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

    processed.sort((a, b) => b.risk - a.risk);

    setCache(processed);

    res.json(processed);

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});


//  FRONTEND ROUTE (IMPORTANT)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});


//  PORT

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});