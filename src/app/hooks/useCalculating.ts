import { useEffect, useState } from "react"
import { getNthPrime, getFibonacci, triangularNumber, getResult } from "../helpers/operations";
import { UseCalculatingResult } from "../types/types";

export const useCalculating = (n: number): UseCalculatingResult => {
    const initialState: UseCalculatingResult = { nPrime: 0, nFibonacci: 0, nTriangular: 0, nth: 0 }
    const [result, setResult] = useState(initialState);

    useEffect(() => {
        const nPrime = getNthPrime(n);
        const nTriangular = triangularNumber(n);
        const nFibonacci = getFibonacci(n-2)
        const nth = getResult(nPrime, nTriangular, nFibonacci);
        setResult({ nPrime, nFibonacci, nTriangular, nth });
    }, [n]);
    
    return result;
}
