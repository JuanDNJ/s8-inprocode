
import { expect, describe, it } from "vitest";
import { calacualteExpenseWeek, calculatePercentage, today } from "../src/utils";

describe("Application", () => {

    it("Calculate the percentage is defined", () => {
        const current_day = 78;
        const yesterday = 56;
        expect(calculatePercentage(current_day, yesterday)).toBeDefined()
    })
    it("Calculate the percentage of the current day 78 and the previous day 56", () => {
        const current_day = 78;
        const yesterday = 56;
        expect(calculatePercentage(current_day, yesterday)).toBe(32)
    })
    it('Check if today is a valid date', () => {
        expect(today).not.toBeNull();
        expect(today).toBeInstanceOf(Date);
    });

    it('Check if today is within a reasonable range', () => {
        const currentDate = new Date();
        const fiveYearsAgo = new Date(currentDate.getFullYear() - 5, currentDate.getMonth(), currentDate.getDate());
        const fiveYearsFromNow = new Date(currentDate.getFullYear() + 5, currentDate.getMonth(), currentDate.getDate());

        expect(today.getTime()).toBeGreaterThanOrEqual(fiveYearsAgo.getTime());
        expect(today.getTime()).toBeLessThanOrEqual(fiveYearsFromNow.getTime());
    });
    it('Calculate total expenses for the week', () => {
        const week = [
            { bill: 100 },
            { bill: 150 },
            { bill: 200 }
        ];
        const total = calacualteExpenseWeek(week);
        expect(total).toBe(450);
    });

    it('Return 0 for an empty week', () => {
        const week = [];
        const total = calacualteExpenseWeek(week);
        expect(total).toBe(0);
    });
})
