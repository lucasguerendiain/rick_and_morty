import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';
import Form from '../components/Form/Form';
import App from '../App.js';

describe("testeando el formulario de entrada", () => {
    test("username input should be rendered", () => {
        render(<Form/>);
        const userInput = screen.getByPlaceholderText(/Usuario.../i);
        expect(userInput).toBeInTheDocument();
    })
    test("password input should be rendered", () => {
        render(<Form/>);
        const passInput = screen.getByPlaceholderText(/Password.../i);
        expect(passInput).toBeInTheDocument();
    })
    test("button input should be rendered", () => {
        render(<Form/>);
        const buttonInput = screen.getByText(/confirmar/i);
        expect(buttonInput).toBeInTheDocument();
    })
    test("username should start empty", () => {
        render(<Form/>);
        const userInput = screen.getByPlaceholderText(/Usuario.../i);
        expect(userInput.value).toBe("");
    })
    test("password should start empty", () => {
        render(<Form/>);
        const passInput = screen.getByPlaceholderText(/Password.../i);
        expect(passInput.value).toBe("");
    })
    test("username should cahnge properly", () => {
        render(<Form/>);
        const userInput = screen.getByPlaceholderText(/Usuario.../i);
        const testValue = "test";
        fireEvent.change(userInput, {target: {value: testValue}});
        expect(userInput.value).toBe(testValue);
    })
    test("password should change properly", () => {
        render(<Form/>);
        const passInput = screen.getByPlaceholderText(/Password.../i);
        const testValue = "123456";
        fireEvent.change(passInput, {target: {value: testValue}});
        expect(passInput.value).toBe(testValue);
    })
    test("el usuario entra correctamente", () => {
        const mockLogin = jest.fn();
        render(<Form login={mockLogin}/>);
        const passInput = screen.getByPlaceholderText(/Password.../i);
        const userInput = screen.getByPlaceholderText(/Usuario.../i);
        const buttonInput = screen.getByText(/confirmar/i);
        fireEvent.change(userInput, {target: {value: "lucas@guere.com"}});
        fireEvent.change(passInput, {target: {value: "1234567"}});
        fireEvent.click(buttonInput);
        expect(mockLogin).toHaveBeenCalled();
    })
    test("la wea no se llama con datos erroneos", () => {
        const mockLogin = jest.fn();
        render(<Form login={mockLogin}/>);
        window.alert = () => {};
        const passInput = screen.getByPlaceholderText(/Password.../i);
        const userInput = screen.getByPlaceholderText(/Usuario.../i);
        const buttonInput = screen.getByText(/confirmar/i);
        fireEvent.change(userInput, {target: {value: "lucas@guere"}});
        fireEvent.change(passInput, {target: {value: "12345"}});
        fireEvent.click(buttonInput);
        expect(mockLogin).not.toHaveBeenCalled();
    })
})
