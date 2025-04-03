import { render, screen } from '@testing-library/react';
import { Header } from '@/app/components/Header';

describe('Header Component', () => {
  it('muestra correctamente el logotipo y el texto', () => {
    render(<Header />);

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    const logoImage = screen.getByRole('img');
    expect(logoImage).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fwww.drupal.org%2Ffiles%2FLogo-Restyled_Positive_Navy.png&w=384&q=75');

    const nameText = screen.getByText(/Carlos Calette/i);
    expect(nameText).toBeInTheDocument();

    expect(nameText).toHaveStyle('font-size: 22px');
  });
});
