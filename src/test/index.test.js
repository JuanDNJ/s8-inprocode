
import { test, expect } from "vitest";
import { calculatePercentage, getCurrentWeek } from "../utils";


test("Calculate the percentage of the current day 78 and the previous day 56", () => {
    const current_day = 78;
    const yesterday = 56;
    expect(calculatePercentage(current_day, yesterday)).toBe(32)
})

test("Get the current week of the month", () => {
    expect(getCurrentWeek()).toBe(2)
})