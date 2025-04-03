import { render, screen } from '@testing-library/react';
import { Header } from '@/app/components/Header';

describe('Header Component', () => {
  it('muestra correctamente el logotipo y el texto', () => {
    render(<Header />);

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    const logoImage = screen.getByRole('img');
    expect(logoImage).toHaveAttribute('src', 'https://www.drupal.org/files/Logo-Restyled_Positive_Navy.png');
    expect(logoImage).toHaveClass('h-6');

    const nameText = screen.getByText(/Carlos Calette/i);
    expect(nameText).toBeInTheDocument();

    expect(nameText).toHaveStyle('font-size: 22px');
  });
});
