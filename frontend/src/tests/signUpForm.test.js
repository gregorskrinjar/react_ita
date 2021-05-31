import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import { SignupForm } from "../components/accountBox/signupForm";

it('Obrazec za prijavo mora imeti username, password polji in gumb za submit', () => {
    render(<SignupForm />);   // Prvo renderiraš formo

    const name = screen.queryByTestId("name");
    const emailField = screen.queryByTestId("email");
    const passwordField = screen.queryByTestId("password");
    const passwordCheckField = screen.queryByTestId("passwordCheck");
    const submitButton = screen.queryByTestId("submit");

    // Asertions
    // Najdi input, ki ima ta label
    expect(name).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(passwordCheckField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

it('omogočeno vpisovanje prijavnih podatkov', () => {
    const submit = jest.fn((value) => { }); // klic tagom
    render(<SignupForm submit={submit} />);   // Prvo renderiraš formo

    const name = screen.queryByTestId("name");
    const emailField = screen.queryByTestId("email");
    const passwordField = screen.queryByTestId("password");
    const passwordCheckField = screen.queryByTestId("passwordCheck");
    const submitButton = screen.queryByTestId("submit");

    userEvent.type(name, "Janez");
    userEvent.type(emailField, "janez.novak@gmail.com");
    userEvent.type(passwordField, "Varogeslo2.");
    userEvent.type(passwordCheckField, "Varnogeslo2.");
    userEvent.click(submitButton, "submit");
    
    // const { queryByPlaceholderText } = render(<LoginForm submit={submit}/>)

    // const EmailInput = queryByPlaceholderText('Email1')
    // fireEvent.change(EmailInput, { target: { value: 'janez.novak@gmail.com' } })
    // expect(EmailInput.value).toBe('janez.novak@gmail.com');

    // const PasswordInput = queryByPlaceholderText('Geslo1')
    // fireEvent.change(PasswordInput, { target: { value: 'Varnogeslo2.' } })
    // expect(PasswordInput.value).toBe('Varnogeslo2.')
});