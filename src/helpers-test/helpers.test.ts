import { deadlineCalculation } from "../helpers/correctarium/deadlineCalculation";
import { priceCalculation } from "../helpers/correctarium/priceCalculation";
import { timeCalculation } from "../helpers/correctarium/timeCalculation";

describe('functions testing', () => {
    test('price calculation (uk/ru, count, known format)', () => {
        let language = 'uk';
        let count = 1500;
        let mimetype = '.doc';
        expect(priceCalculation(language, count, mimetype)).toBe(75);
    })
    test('price calculation (uk/ru, count, unknown format)', () => {
        let language = 'uk';
        let count = 1500;
        let mimetype = '.txt';
        expect(priceCalculation(language, count, mimetype)).toBe(90);
    })
    test('price calculation (uk/ru, count with min price, known format)', () => {
        let language = 'uk';
        let count = 100;
        let mimetype = '.doc';
        expect(priceCalculation(language, count, mimetype)).toBe(50);
    })
    test('price calculation (uk/ru, count with min price, unknown format)', () => {
        let language = 'uk';
        let count = 100;
        let mimetype = '.txt';
        expect(priceCalculation(language, count, mimetype)).toBe(60);
    })

    test('price calculation (en, count, known format)', () => {
        let language = 'en';
        let count = 1500;
        let mimetype = '.doc';
        expect(priceCalculation(language, count, mimetype)).toBe(180);
    })
    test('price calculation (en, count, unknown format)', () => {
        let language = 'en';
        let count = 1500;
        let mimetype = '.txt';
        expect(priceCalculation(language, count, mimetype)).toBe(216);
    })
    test('price calculation (en, count with min price, known format)', () => {
        let language = 'en';
        let count = 100;
        let mimetype = '.doc';
        expect(priceCalculation(language, count, mimetype)).toBe(120);
    })
    test('price calculation (en, count with min price, unknown format)', () => {
        let language = 'uk';
        let count = 100;
        let mimetype = '.txt';
        expect(priceCalculation(language, count, mimetype)).toBe(144);
    })

    test('time calculation (en, count, known format)', () => {
        let language = 'en';
        let count = 1665;
        let mimetype = '.doc';
        expect(timeCalculation(language, count, mimetype)).toBe(5.5);
    })
    test('time calculation (en, count, unknown format)', () => {
        let language = 'en';
        let count = 1665;
        let mimetype = '.txt';
        expect(timeCalculation(language, count, mimetype)).toBe(6.6);
    })
    test('time calculation (en, count to min time, known format)', () => {
        let language = 'en';
        let count = 165;
        let mimetype = '.doc';
        expect(timeCalculation(language, count, mimetype)).toBe(1);
    })
    test('time calculation (en, count to min time, unknown format)', () => {
        let language = 'en';
        let count = 165;
        let mimetype = '.txt';
        expect(timeCalculation(language, count, mimetype)).toBe(1.19);
    })
    
    test('deadline calculation, 10 < startTime < 19', () => {
        let startTime = 1650024000000
        let time = 1.5
        expect(deadlineCalculation(startTime, time)).toBe(1650029400000)
    })
    test('deadline calculation from 18:00 to next day', () => {
        let startTime = 1649948400000
        let time = 1.5 
        expect(deadlineCalculation(startTime, time)).toBe(1650009600000)
    })
    test('deadline calculation from 20:00 to next day', () => {
        let startTime = 1649955600000
        let time = 1.5
        expect(deadlineCalculation(startTime, time)).toBe(1650011400000)
    })
    test('deadline calculation from friday, 18:00, to next work day', () => {
        let startTime = 1650034800000
        let time = 1.5
        expect(deadlineCalculation(startTime, time)).toBe(1650268800000)
    })
    test('deadline calculation from saturday, 18:00 to next work day', () => {
        let startTime = 1650121200000
        let time = 1.5
        expect(deadlineCalculation(startTime, time)).toBe(1650270600000)
    })
    test('deadline calculation from sunday, 08:00 to next work day', () => {
        let startTime = 1650171600000
        let time = 1.5
        expect(deadlineCalculation(startTime, time)).toBe(1650270600000)
    })
    test('deadline calculation from  05:00 to next work day', () => {
        let startTime = 1649901600000
        let time = 1.5
        expect(deadlineCalculation(startTime, time)).toBe(1649925000000)
    })
})