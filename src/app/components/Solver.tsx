"use client";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { SolverProps } from "../types/types"
import { useCalculating } from "../hooks/useCalculating";

export const Solver = ({ n }: SolverProps) => {

    const { nPrime, nFibonacci, nTriangular, nth } = useCalculating(n);

    return (
        <div data-testid="solver-container" className="bg-white mt-8 w-3/4 p-5 rounded-lg flex flex-col justify-center">
            <MathJaxContext>
                <MathJax data-testid="mathjax-output">
                    {`
                        Siguiendo la fórmula dada: 
                        $$ 
                        \\text{serie}(n) = \\frac{3 \\cdot \\text{primo}(n) \\cdot \\text{triangular}(n)}{\\text{fibonacci}(n-2)} 
                        $$

                        Primero obtenemos el N primo: 
                        $$ \\text{primo}(${n}) = ${nPrime} $$

                        Seguimos con el N triangular: 
                        $$ 
                        \\text{triangular}(n) = \\frac{n(n+1)}{2} \\rightarrow \\frac{${n}(${n}+1)}{2} = ${nTriangular} 
                        $$

                        Se calcula el número Fibonacci (n-2): 
                        $$ \\text{fibonacci}(${n-2}) = ${nFibonacci} $$

                        Finalmente se realiza la operación en conjunto: 
                        $$ 
                        \\text{serie}(${n}) = \\frac{3 \\cdot ${nPrime} \\cdot ${nTriangular}}{${nFibonacci}} 
                        $$

                        El N en la serie es: 
                        $$ \\text{serie}(${n}) = ${nth} $$  
                    `}
                </MathJax>
            </MathJaxContext>
        </div>
    )
}
