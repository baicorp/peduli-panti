import React from "react";
import { render, screen } from "@testing-library/react";
import { FormField } from "./LoginForm";

describe("FormField", () => {
  test("renders form fields", () => {
    const handleSubmit = jest.fn();
    const setEmail = jest.fn();
    const setPassword = jest.fn();
    const email = "";
    const password = "";

    render(
      <FormField
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
        email={email}
        password={password}
      />
    );

    // Assert that the email input field is present
    const emailInput = screen.getByLabelText("Email address");
    expect(emailInput).toBeInTheDocument();

    // Assert that the password input field is present
    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();

    // Assert that the submit button is present
    const submitButton = screen.getByText("Masuk");
    expect(submitButton).toBeInTheDocument();
  });
});
