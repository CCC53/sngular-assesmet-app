import { getNthPrime, getFibonacci, triangularNumber, getResult } from "@/app/helpers/operations";

describe("Operations functions", () => {
    it("calcula valores correctos cuando n = 4", () => {
        const n = 4;
        const nthPrime = getNthPrime(n)
        const nthFibonacci = getFibonacci(n-2);
        const triangular = triangularNumber(n);
        expect(nthPrime).toBe(7);
        expect(nthFibonacci).toBe(1);
        expect(triangular).toBe(10);
        expect(getResult(nthPrime, triangular, nthFibonacci)).toBe(210);
    });

    it("calcula valores correctos cuando n = 5", () => {
        const n = 5;
        const nthPrime = getNthPrime(n)
        const nthFibonacci = getFibonacci(n-2);
        const triangular = triangularNumber(n);
        expect(nthPrime).toBe(11);
        expect(nthFibonacci).toBe(2);
        expect(triangular).toBe(15);
        expect(getResult(nthPrime, triangular, nthFibonacci)).toBe(247.5);
    });

    it("calcula valores correctos cuando n = 7", () => {
        const n = 7;
        const nthPrime = getNthPrime(n)
        const nthFibonacci = getFibonacci(n-2);
        const triangular = triangularNumber(n);
        expect(nthPrime).toBe(17);
        expect(nthFibonacci).toBe(5);
        expect(triangular).toBe(28);
        expect(getResult(nthPrime, triangular, nthFibonacci)).toBe(285.6);
    });

    it("calcula valores correctos cuando n = 10", () => {
        const n = 10;
        const nthPrime = getNthPrime(n)
        const nthFibonacci = getFibonacci(n-2);
        const triangular = triangularNumber(n);
        expect(nthPrime).toBe(29);
        expect(nthFibonacci).toBe(21);
        expect(triangular).toBe(55);
        expect(getResult(nthPrime, triangular, nthFibonacci)).toBe(227.85714285714286);
    });

    it("calcula valores correctos cuando n = 18", () => {
        const n = 18;
        const nthPrime = getNthPrime(n)
        const nthFibonacci = getFibonacci(n-2);
        const triangular = triangularNumber(n);
        expect(nthPrime).toBe(61);
        expect(nthFibonacci).toBe(987);
        expect(triangular).toBe(171);
        expect(getResult(nthPrime, triangular, nthFibonacci)).toBe(31.70516717325228);
    });

    it("calcula valores correctos cuando n = 24", () => {
        const n = 24;
        const nthPrime = getNthPrime(n)
        const nthFibonacci = getFibonacci(n-2);
        const triangular = triangularNumber(n);
        expect(nthPrime).toBe(89);
        expect(nthFibonacci).toBe(17711);
        expect(triangular).toBe(300);
        expect(getResult(nthPrime, triangular, nthFibonacci)).toBe(4.522613065326633);
    });

    it("calcula valores correctos cuando n = 30", () => {
        const n = 30;
        const nthPrime = getNthPrime(n)
        const nthFibonacci = getFibonacci(n-2);
        const triangular = triangularNumber(n);
        expect(nthPrime).toBe(113);
        expect(nthFibonacci).toBe(317811);
        expect(triangular).toBe(465);
        expect(getResult(nthPrime, triangular, nthFibonacci)).toBe(0.49600234101399887);
    });

    it("calcula valores correctos cuando n = 46", () => {
        const n = 46;
        const nthPrime = getNthPrime(n)
        const nthFibonacci = getFibonacci(n-2);
        const triangular = triangularNumber(n);
        expect(nthPrime).toBe(199);
        expect(nthFibonacci).toBe(701408733);
        expect(triangular).toBe(1081);
        expect(getResult(nthPrime, triangular, nthFibonacci)).toBe(0.0009200869188493551);
    });

    it("calcula valores correctos cuando n = 57", () => {
        const n = 57;
        const nthPrime = getNthPrime(n)
        const nthFibonacci = getFibonacci(n-2);
        const triangular = triangularNumber(n);
        expect(nthPrime).toBe(269);
        expect(nthFibonacci).toBe(139583862445);
        expect(triangular).toBe(1653);
        expect(getResult(nthPrime, triangular, nthFibonacci)).toBe(0.000009556770937798217);
    });

    it("calcula valores correctos cuando n = 75", () => {
        const n = 75;
        const nthPrime = getNthPrime(n)
        const nthFibonacci = getFibonacci(n-2);
        const triangular = triangularNumber(n);
        expect(nthPrime).toBe(379);
        expect(nthFibonacci).toBe(806515533049393);
        expect(triangular).toBe(2850);
        expect(getResult(nthPrime, triangular, nthFibonacci)).toBe(4.017839542095399e-9);
    });
})