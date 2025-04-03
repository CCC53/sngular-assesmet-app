import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Form } from "@/app/components/Form";

describe("Form Component", () => {
    let setLoadingMock: jest.Mock<void, [boolean]>;
    let returnValueMock: jest.Mock<void, [number | null]>;
    let cleanDataMock: jest.Mock<void, [void]>;

    beforeEach(() => {
        setLoadingMock = jest.fn();
        returnValueMock = jest.fn();
        cleanDataMock = jest.fn();
    });

    test("muestra el formulario correctamente", () => {
        render(<Form setLoading={setLoadingMock} returnValue={returnValueMock} cleanData={cleanDataMock} />);
        expect(screen.getByLabelText(/Número N/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Introduce el número aquí/i)).toBeInTheDocument();
        expect(screen.getByText(/Calcular/i)).toBeInTheDocument();
        expect(screen.getByText(/Limpiar/i)).toBeInTheDocument();
    });

    test("desactiva el botón de submit cuando la entrada no es válida", () => {
        render(<Form setLoading={setLoadingMock} returnValue={returnValueMock} cleanData={cleanDataMock} />);
        const submitButton = screen.getByText(/Calcular/i);
        expect(submitButton).toBeDisabled();
        
        fireEvent.change(screen.getByPlaceholderText(/Introduce el número aquí/i), { target: { value: 2 } });
        expect(submitButton).toBeDisabled();
    });

    test("muestra errores de validación de valor minimo", () => {
        render(<Form setLoading={setLoadingMock} returnValue={returnValueMock} cleanData={cleanDataMock} />);
        const input = screen.getByPlaceholderText(/Introduce el número aquí/i);
        
        fireEvent.change(input, { target: { value: 2 } });
        expect(screen.getByText(/El número debe ser como mínimo 3/i)).toBeInTheDocument();
    });

    test("muestra errores de validación de valor maximo", () => {
        render(<Form setLoading={setLoadingMock} returnValue={returnValueMock} cleanData={cleanDataMock} />);
        const input = screen.getByPlaceholderText(/Introduce el número aquí/i);
        
        fireEvent.change(input, { target: { value: 77 } });
        expect(screen.getByText(/El número debe ser igual o inferior a 76/i)).toBeInTheDocument();
    });

    test("muestra errores de validación de si hay decimales o con e", () => {
        render(<Form setLoading={setLoadingMock} returnValue={returnValueMock} cleanData={cleanDataMock} />);
        const input = screen.getByPlaceholderText(/Introduce el número aquí/i);
        
        fireEvent.change(input, { target: { value: 7.6 } });
        expect(screen.getByText(/Sólo se admiten números enteros/i)).toBeInTheDocument();
    });

    test("activa el botón de submit con una entrada válida", () => {
        render(<Form setLoading={setLoadingMock} returnValue={returnValueMock} cleanData={cleanDataMock} />);
        
        fireEvent.change(screen.getByPlaceholderText(/Introduce el número aquí/i), { target: { value: 5 } });
        expect(screen.getByText(/Calcular/i)).not.toBeDisabled();
    });

    test("envía el formulario con el valor correcto", async () => {
        render(<Form setLoading={setLoadingMock} returnValue={returnValueMock} cleanData={cleanDataMock} />);
        const input = screen.getByPlaceholderText(/Introduce el número aquí/i);
        const submitButton = screen.getByText(/Calcular/i);
    
        fireEvent.change(input, { target: { value: 10 } });
        fireEvent.click(submitButton);
        
        await waitFor(() => expect(setLoadingMock).toHaveBeenCalledWith(true));
        await waitFor(() => expect(returnValueMock).toHaveBeenCalledWith(10));
        await waitFor(() => expect(setLoadingMock).toHaveBeenCalledWith(false));
    });

    test("borra el formulario al reiniciarse", () => {
        render(<Form setLoading={setLoadingMock} returnValue={returnValueMock} cleanData={cleanDataMock} />);
        const input = screen.getByPlaceholderText(/Introduce el número aquí/i) as HTMLInputElement;
        const clearButton = screen.getByText(/Limpiar/i);
    
        fireEvent.change(input, { target: { value: 10 } });
        expect(input.value).toBe("10");
    
        fireEvent.click(clearButton);
        expect(input.textContent).toBe("");
        expect(cleanDataMock).toHaveBeenCalled();
    });
});