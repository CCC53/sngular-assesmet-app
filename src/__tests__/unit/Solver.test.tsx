import { render, screen } from '@testing-library/react';
import { Solver } from '@/app/components/Solver';
import { useCalculating } from '@/app/hooks/useCalculating';

jest.mock('../../app/hooks/useCalculating', () => ({
    useCalculating: jest.fn(),
}));

const mockedCustomHook = useCalculating as jest.Mock;

describe('Solver Component', () => {
    it('renderiza correctamente con las fórmulas y resultados para n = 4', () => {
        mockedCustomHook.mockReturnValue({ nPrime: 7, nFibonacci: 1, nTriangular: 10, nth: 210 });
        render(<Solver n={4} />);
        expect(screen.getByText(/\\text{serie}\(n\) = \\frac{3 \\cdot \\text{primo}\(n\) \\cdot \\text{triangular}\(n\)}{\\text{fibonacci}\(n-2\)}/)).toBeInTheDocument();
        expect(screen.getByText(/\\text{primo}\(4\) = 7/)).toBeInTheDocument();
        expect(screen.getByText((content) => content.includes('\\text{triangular}(n) = \\frac{n(n+1)}{2} \\rightarrow \\frac{4(4+1)}{2} = 10'))).toBeInTheDocument();
        expect(screen.getByText(/\\text{fibonacci}\(2\) = 1/)).toBeInTheDocument();
        expect(screen.getByText(/\\text{serie}\(4\) = 210/)).toBeInTheDocument();
    });
});