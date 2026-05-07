import { calculateRisk } from "../utils/riskCalculator";

test("stormy city should have higher risk than sunny city", () => {

    // ☀️ Sunny city (low risk)
    const sunnyCity = {
        main: { temp: 295 },
        wind: { speed: 2 },
        visibility: 10000
    };

    // ⛈ Stormy city (high risk)
    const stormyCity = {
        main: { temp: 310 },
        wind: { speed: 15 },
        visibility: 2000
    };

    const sunnyRisk = calculateRisk(sunnyCity);
    const stormyRisk = calculateRisk(stormyCity);

    expect(stormyRisk).toBeGreaterThan(sunnyRisk);
});