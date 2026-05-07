import { useEffect, useState } from "react";
import axios from "axios";

type CityRisk = {
  city: string;
  risk: number;
  temp: number;
  wind: number;
  visibility: number;
};

function App() {
  const [data, setData] = useState<CityRisk[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/weather")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌦 Extreme Weather Risk Dashboard</h1>

      {data.map((city, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: city.risk > 50 ? "#ff4d4d" : "#4CAF50",
            color: "white"
          }}
        >
          <h2>{city.city}</h2>
          <p>Risk Score: {city.risk}</p>
          <p>Temperature: {city.temp}</p>
          <p>Wind: {city.wind}</p>
          <p>Visibility: {city.visibility}</p>
        </div>
      ))}
    </div>
  );
}

export default App;