import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { LoginForm } from "../components/accountBox/loginForm";
import userEvent from "@testing-library/user-event";

it('Obrazec za prijavo mora imeti username in password polji in gumb za submit', () => {
    render(<LoginForm />);   // Prvo renderiraš formo

    const emailField = screen.queryByTestId("email");
    const passwordField = screen.queryByTestId("password");
    const submitButton = screen.queryByTestId("submit");

    // Asertions
    // Najdi input, ki ima ta label
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

it('omogočeno vpisovanje prijavnih podatkov', () => {
    
    const submit = jest.fn((value) => { }); // klic tagom
    render(<LoginForm submit={submit} />);   // Prvo renderiraš formo
    

    const emailField = screen.queryByTestId("email");
    const passwordField = screen.queryByTestId("password");
    const submitButton = screen.queryByTestId("submit");

    // Vpis podatkov za testiranje
    userEvent.type(emailField, "janez.novak@gmail.com");
    userEvent.type(passwordField, "Varnogeslo2.");
    userEvent.click(submitButton, "submit");

    // const { getByTestId } = render(<LoginForm submit={submit}/>)

    // const EmailInput = screen.getByTestId('email').querySelector('input')
    // fireEvent.change(EmailInput, { target: { value: 'janez.novak@gmail.com' } })
    // expect(EmailInput.value).toBe('janez.novak@gmail.com');

    // const PasswordInput = screen.getByTestId('password')
    // fireEvent.change(PasswordInput, { target: { value: 'Varnogeslo2.' } })
    // expect(PasswordInput.value).toBe('Varnogeslo2.')
});