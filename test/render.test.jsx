// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import store, { Provider } from "../src/store/index.js"
import Header from "../src/components/Header.jsx";
import App from "../src/App.jsx"
import Aside from '../src/components/Aside.jsx';
import ChangeLanguage from '../src/components/Changelanguage.jsx';
import Flag from '../src/components/Flag.jsx';
import SelectMonth from '../src/components/SelectMonth.jsx';
import SelectWeek from '../src/components/SelectWeek.jsx';
import SelectTheme from '../src/components/SelectTheme.jsx';
import TodayExpense from '../src/components/TodayExpense.jsx';
import TotalBalance from '../src/components/TotalBalance.jsx';


describe("Render Components", () => {
    afterEach(cleanup);
    it("Render Store Provider", () => {
        expect(render(
            <Provider store={store}>
                <Header>Hola Mundo</Header>
            </Provider>
        )).not.toBeNull();
    })
    it("Render App", () => {
        expect(<App />).not.toBeNull();
    });
    it("Render Aside", () => {
        const component = render(
            <Provider store={store}>
                <Aside />
            </Provider>)
        expect(component).not.toBeNull();
    });
    it("Render Header", () => {
        const component = render(<Header>Hola Mundo</Header>)
        expect(component).not.toBeNull();
    });

    it("Render ChangeLanguage", () => {
        expect(render(
            <ChangeLanguage />)
        ).not.toBeNull();
    });
    it("Render Flag", () => {
        expect(render(
            <Flag />)
        ).not.toBeNull();
    });
    it("Render SelectWeek", () => {
        expect(render(
            <Provider store={store}>
                <SelectWeek />
            </Provider>)
        ).not.toBeNull();
    });
    it("Render SelectMonth", () => {
        const component = render(
            <Provider store={store}>
                <SelectMonth />
            </Provider>)
        expect(component).not.toBeNull();
        expect(component.container).toHaveTextContent([''])
    });
    it("Render SelectTheme", () => {
        const component = render(
            <Provider store={store}>
                <SelectTheme />
            </Provider>)
        expect(component).not.toBeNull();
        expect(component.container).toHaveTextContent("selectTheme")
    });
    it("Render TodayExpense", () => {
        const component = render(
            <Provider store={store}>
                <TodayExpense />
            </Provider>)
        expect(component).not.toBeNull();
        expect(component.container).toHaveTextContent("todayExpenses")
        expect(component.container).toHaveTextContent("typeOfCurrency")
        expect(component.container).toHaveTextContent("%")
    });
    it("Render TotalBalance", () => {

        const component = render(
            <Provider store={store}>
                <TotalBalance />
            </Provider>
        )
        expect(component).not.toBeNull();
        expect(component.container).toHaveTextContent("totalBalance")
        expect(component.container).toHaveTextContent("€")
    });
});