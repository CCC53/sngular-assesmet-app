
export interface SolverProps {
    n: number
}

export interface FormProps {
    returnValue: (data: number | null) => void;
    cleanData: () => void;
    setLoading: (loading: boolean) => void;
}

export interface UseCalculatingResult {
    nPrime: number;
    nFibonacci: number;
    nTriangular: number;
    nth: number;
}