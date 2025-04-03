import { render, screen } from "@testing-library/react";
import { Loader } from "@/app/components/Loader";

describe("Loader Component", () => {
  test("renderiza el div del componente Loader", () => {
    render(<Loader />);
    
    const loaderContainer = screen.getByTestId("loader-container");
    expect(loaderContainer).toBeInTheDocument();
    
    const spinningDiv = screen.getByTestId("loader-spinner");
    expect(spinningDiv).toHaveClass("animate-spin");
  });
});
