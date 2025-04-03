import { renderHook } from "@testing-library/react";
import { useCalculating } from "@/app/hooks/useCalculating";
import { getNthPrime, getFibonacci, triangularNumber, getResult } from "@/app/helpers/operations";

jest.mock("../../app/helpers/operations", () => ({
    getNthPrime: jest.fn(),
    getFibonacci: jest.fn(),
    triangularNumber: jest.fn(),
    getResult: jest.fn()
}));

const mockedGetNthPrime = getNthPrime as jest.Mock;
const mockedGetFibonacci = getFibonacci as jest.Mock;
const mockedTriangularNumber = triangularNumber as jest.Mock;
const mockedResult = getResult as jest.Mock;

describe('useCalculating Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("asigna los valores correctos cuando n = 4", () => {
        mockedGetNthPrime.mockReturnValue(7);
        mockedGetFibonacci.mockReturnValue(1);
        mockedTriangularNumber.mockReturnValue(10);
        mockedResult.mockReturnValue(210);

        const { result } = renderHook(() => useCalculating(4));
        expect(result.current.nPrime).toBe(7);
        expect(result.current.nFibonacci).toBe(1);
        expect(result.current.nTriangular).toBe(10);
        expect(result.current.nth).toBe(210);
    });

    test("asigna los valores correctos cuando n = 5", () => {
        mockedGetNthPrime.mockReturnValue(11);
        mockedGetFibonacci.mockReturnValue(2);
        mockedTriangularNumber.mockReturnValue(15);
        mockedResult.mockReturnValue(247.5);

        const { result } = renderHook(() => useCalculating(5));
        expect(result.current.nPrime).toBe(11);
        expect(result.current.nFibonacci).toBe(2);
        expect(result.current.nTriangular).toBe(15);
        expect(result.current.nth).toBe(247.5);
    });

    test("asigna los valores correctos cuando n = 7", () => {
        mockedGetNthPrime.mockReturnValue(17);
        mockedGetFibonacci.mockReturnValue(5);
        mockedTriangularNumber.mockReturnValue(28);
        mockedResult.mockReturnValue(285.6);

        const { result } = renderHook(() => useCalculating(7));
        expect(result.current.nPrime).toBe(17);
        expect(result.current.nFibonacci).toBe(5);
        expect(result.current.nTriangular).toBe(28);
        expect(result.current.nth).toBe(285.6);
    });

    test("asigna los valores correctos cuando n = 10", () => {
        mockedGetNthPrime.mockReturnValue(29);
        mockedGetFibonacci.mockReturnValue(21);
        mockedTriangularNumber.mockReturnValue(55);
        mockedResult.mockReturnValue(227.85714285714286);

        const { result } = renderHook(() => useCalculating(10));
        expect(result.current.nPrime).toBe(29);
        expect(result.current.nFibonacci).toBe(21);
        expect(result.current.nTriangular).toBe(55);
        expect(result.current.nth).toBe(227.85714285714286);
    });

    test("asigna los valores correctos cuando n = 18", () => {
        mockedGetNthPrime.mockReturnValue(61);
        mockedGetFibonacci.mockReturnValue(987);
        mockedTriangularNumber.mockReturnValue(171);
        mockedResult.mockReturnValue(31.70516717325228);

        const { result } = renderHook(() => useCalculating(18));
        expect(result.current.nPrime).toBe(61);
        expect(result.current.nFibonacci).toBe(987);
        expect(result.current.nTriangular).toBe(171);
        expect(result.current.nth).toBe(31.70516717325228);
    });

    test("asigna los valores correctos cuando n = 24", () => {
        mockedGetNthPrime.mockReturnValue(89);
        mockedGetFibonacci.mockReturnValue(17711);
        mockedTriangularNumber.mockReturnValue(300);
        mockedResult.mockReturnValue(4.522613065326633);

        const { result } = renderHook(() => useCalculating(24));
        expect(result.current.nPrime).toBe(89);
        expect(result.current.nFibonacci).toBe(17711);
        expect(result.current.nTriangular).toBe(300);
        expect(result.current.nth).toBe(4.522613065326633);
    });

    test("asigna los valores correctos cuando n = 30", () => {
        mockedGetNthPrime.mockReturnValue(113);
        mockedGetFibonacci.mockReturnValue(317811);
        mockedTriangularNumber.mockReturnValue(465);
        mockedResult.mockReturnValue(0.49600234101399887);

        const { result } = renderHook(() => useCalculating(30));
        expect(result.current.nPrime).toBe(113);
        expect(result.current.nFibonacci).toBe(317811);
        expect(result.current.nTriangular).toBe(465);
        expect(result.current.nth).toBe(0.49600234101399887);
    });
    
    test("asigna los valores correctos cuando n = 46", () => {
        mockedGetNthPrime.mockReturnValue(199);
        mockedGetFibonacci.mockReturnValue(701408733);
        mockedTriangularNumber.mockReturnValue(1081);
        mockedResult.mockReturnValue(0.0009200869188493551);

        const { result } = renderHook(() => useCalculating(46));
        expect(result.current.nPrime).toBe(199);
        expect(result.current.nFibonacci).toBe(701408733);
        expect(result.current.nTriangular).toBe(1081);
        expect(result.current.nth).toBe(0.0009200869188493551);
    });

    test("asigna los valores correctos cuando n = 57", () => {
        mockedGetNthPrime.mockReturnValue(269);
        mockedGetFibonacci.mockReturnValue(139583862445);
        mockedTriangularNumber.mockReturnValue(1653);
        mockedResult.mockReturnValue(0.000009556770937798217);

        const { result } = renderHook(() => useCalculating(57));
        expect(result.current.nPrime).toBe(269);
        expect(result.current.nFibonacci).toBe(139583862445);
        expect(result.current.nTriangular).toBe(1653);
        expect(result.current.nth).toBe(0.000009556770937798217);
    });

    test("asigna los valores correctos cuando n = 75", () => {
        mockedGetNthPrime.mockReturnValue(379);
        mockedGetFibonacci.mockReturnValue(806515533049393);
        mockedTriangularNumber.mockReturnValue(2850);
        mockedResult.mockReturnValue(4.017839542095399e-9);

        const { result } = renderHook(() => useCalculating(75));
        expect(result.current.nPrime).toBe(379);
        expect(result.current.nFibonacci).toBe(806515533049393);
        expect(result.current.nTriangular).toBe(2850);
        expect(result.current.nth).toBe(4.017839542095399e-9);
    });

});