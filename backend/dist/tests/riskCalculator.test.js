"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const riskCalculator_1 = require("../utils/riskCalculator");
test("stormy city should have higher risk than sunny city", () => {
    //  Sunny city (low risk)
    const sunnyCity = {
        main: { temp: 295 },
        wind: { speed: 2 },
        visibility: 10000
    };
    //  Stormy city (high risk)
    const stormyCity = {
        main: { temp: 310 },
        wind: { speed: 15 },
        visibility: 2000
    };
    const sunnyRisk = (0, riskCalculator_1.calculateRisk)(sunnyCity);
    const stormyRisk = (0, riskCalculator_1.calculateRisk)(stormyCity);
    expect(stormyRisk).toBeGreaterThan(sunnyRisk);
});
