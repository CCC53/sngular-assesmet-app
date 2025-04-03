"use client";
import React, { ChangeEvent, useState } from "react"
import { FormProps } from "../types/types";

export const Form = ({ setLoading, returnValue, cleanData }: FormProps) => {
  const [value, setValue] = useState<number | string>("")
  const [error, setError] = useState<string | null>(null);

  const validateInput = (input: number | string): boolean => {
    if (input === "") {
      setError(null);
      return false;
    }

    const num = Number(input);

    if (String(input).includes('.') || String(input).includes('e')) {
      setError("Sólo se admiten números enteros");
      return false;
    }

    if (num < 3) {
      setError("El número debe ser como mínimo 3");
      return false;
    }

    if (num > 76) {
      setError("El número debe ser igual o inferior a 76");
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      returnValue(value !== "" ? Number(value) : null);
      setLoading(false);
    }, 200);
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentValue = e.target.value;
    setValue(currentValue);
    validateInput(currentValue);
  }

  const handleReset = (): void => {
    setValue("");
    setError(null);
    cleanData();
  }

  const isDisabled = error !== null || value === "" || Number(value) < 3 || Number(value) > 76;
  const submitButtonClass = `px-16 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`;
  const clearButtonClass = `px-16 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 ${value === "" ? "cursor-not-allowed" : "cursor-pointer"}`

  return (
    <div data-testid="form" className="bg-white mt-8 pb-7 w-3/4 rounded-lg shadow-lg">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5 mt-5 items-center">
            <div className="w-3/4">
              <label className="mb-3 block" htmlFor="numero-n">Número N</label>
              <input id="numero-n" data-testid="form-input"
                className="block w-full rounded-md border border-gray-300 py-1.5 px-2 text-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-lg"
                type="number" placeholder="Introduce el número aquí" onChange={handleOnChange} value={value} min={3} />
            </div>
            <div className="w-3/4 mt-2">
              { 
                error && <span data-testid="error-message" className="text-sm text-red-500">{error}</span>
              }
            </div>
          </div>
          <div className="flex justify-evenly mt-4">
            <button data-testid="submit-button" type="submit" className={submitButtonClass} disabled={isDisabled}>Calcular</button>
            <button type="button" onClick={handleReset} className={clearButtonClass}>Limpiar</button>
          </div>
        </form>
    </div>
  )
}
