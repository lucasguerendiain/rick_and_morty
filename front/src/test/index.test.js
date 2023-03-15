import { render, screen } from '@testing-library/react';
import * as React from 'react';
import Form from '../components/Form/Form';

test("username input should be rendered", () => {
    render(<Form/>);
    const userInput = screen.getByPlaceholderText(/Usuario.../i);
    expect(userInput).toBeInTheDocument();
})
test("password input should be rendered", () => {
    render(<Form/>);
    const PassInput = screen.getByPlaceholderText(/Password.../i);
    expect(PassInput).toBeInTheDocument();
})
test("button input should be rendered", () => {
    render(<Form/>);
    const buttonInput = screen.getByText(/confirmar/i);
    expect(buttonInput).toBeInTheDocument();
})