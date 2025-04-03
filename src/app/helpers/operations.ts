export const triangularNumber = (n: number): number => (n*(n+1))/2;

export const getFibonacci = (n: number): number => {
    if (n <= 1) {
        return n;
    }
    let a = 0;
    let b = 1;
    for(let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

const isPrime = (n: number): boolean => {
    if (n < 2) {
        return false
    }
    for (let i = 2; Math.pow(i, 2) <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

export const getNthPrime = (n: number): number => {
    let counter = 0;
    let result = 1;
    while (counter < n) {
        result++;
        if (isPrime(result)) {
            counter++;
        }
    }
    return result;
}

export const getResult = (nPrime: number, nTriangular: number, nFibonacci: number): number => (3*nPrime*nTriangular)/nFibonacci;