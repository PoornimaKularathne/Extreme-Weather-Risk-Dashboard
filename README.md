#  Extreme Weather Risk Dashboard

A **full-stack weather analytics dashboard** that fetches real-time weather data, computes a **custom risk score**, and presents insights through a **modern, responsive UI**.

This project was built for the **Innovior Internship Challenge** to demonstrate:

* API integration under constraints
* Performance optimization (caching)
* Clean system design
* Testable backend logic
* Production-style frontend UX

---

#  Problem Statement

External weather APIs have **rate limits**.
A naive implementation would:

* call the API on every request ❌
* waste API quota ❌
* increase latency ❌

 **Goal:** Build a system that:

1. Fetches weather data for multiple cities
2. Calculates a meaningful **risk score**
3. **Minimizes API calls** using caching
4. Displays results in a **clear, user-friendly dashboard**

---

#  System Architecture

```text
React Frontend (Dashboard UI)
        ↓
Express Backend API (/weather)
        ↓
OpenWeather API (External Data)
        ↓
In-Memory Cache (10 min)
        ↓
Risk Calculation Engine
        ↓
Sorted Risk Data → UI
```

---

#  Backend (Engineering Core)

## 🔹 API Endpoint

```http
GET /weather
```

Returns:

```ts
{
  city: string;
  risk: number;
  temp: number;
  wind: number;
  visibility: number;
}
```

---

## 🔹 Caching Strategy (IMPORTANT)

To handle API limits:

* Cache type: **In-memory**
* Expiry: **10 minutes**
* Logic:

  * If cache is valid → return cached data ✅
  * Else → fetch from API + update cache ✅

 Result:

* Faster responses
* Reduced API usage
* Stable performance

---

##  Risk Scoring Logic

Risk score is calculated using:

* 🌡 Temperature
* 💨 Wind Speed
* 👁 Visibility

### Simplified idea:

* High temperature → higher risk
* High wind → higher risk
* Low visibility → higher risk

Output:

```ts
Risk Score: 0 – 100
```

---

##  Testing

Implemented **unit testing using Jest**.

Test ensures:

* Stormy conditions → higher risk
* Calm conditions → lower risk

This validates correctness **independent of API data**

---

#  Frontend (UI/UX)

## 🔹 Design Approach

* Dark theme (navy-based)
* Glassmorphism UI
* Clean typography & spacing
* Smooth animations

---

##  Dashboard Features

* 📊 Summary section:

  * Total cities
  * Highest risk city
  * Safest city
  * Average risk

*  Risk Cards:

  * City name
  * Risk score (highlighted)
  * Temperature, wind, visibility
  * Animated risk bar

*  Risk Indicators:

  * 🟢 Low (0–30)
  * 🟡 Medium (31–60)
  * 🔴 High (61–100)

---

##  UX Enhancements

* Loading states (skeleton UI)
* Error handling with retry
* Hover animations & micro-interactions
* Fully responsive layout

---

#  Responsiveness

| Device  | Layout      |
| ------- | ----------- |
| Mobile  | 1 column    |
| Tablet  | 2 columns   |
| Desktop | 3–4 columns |

---

# Project Structure

```text
backend/
  src/
    index.ts
    cache/weatherCache.ts
    utils/riskCalculator.ts
    tests/riskCalculator.test.ts

frontend/
  src/
    components/
    pages/
    styles/
    App.tsx
```

---

#  Tech Stack

## Frontend

* React + TypeScript
* Axios
* Framer Motion
* CSS (custom design system)

## Backend

* Node.js
* Express.js
* TypeScript
* Axios

## Testing

* Jest
* ts-jest

---

# 🚀 How to Run

## 1. Clone

```bash
git clone <repo-url>
cd Extreme-Weather-Risk-Dashboard
```

---

## 2. Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

## 3. Frontend

```bash
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

## 4. Run Tests

```bash
cd backend
npm run test
```

---

# AI Usage Disclosure

AI tools were used for:

* UI design improvements
* Debugging assistance
* Code structuring suggestions

However:

* Risk logic, caching strategy, and system design were **understood and implemented manually**

---

#  Key Learnings

* Designing systems under constraints
* API optimization with caching
* Writing testable backend logic
* Building scalable UI architecture
* Improving UX with data visualization

---

#  Conclusion

This project demonstrates:

* Full-stack development capability
* Performance-aware engineering
* Clean UI/UX design
* Practical problem solving

---

# 👩‍💻 Author

**Poornima**
Innovior Internship Candidate
