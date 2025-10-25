import React from "react";
import { render } from "@testing-library/react";
import HelloWorld from "../components/hello-world";
import "@testing-library/jest-dom";

test("render Hello world text", () => {
    const { getByText } = render(<HelloWorld />)
    const checkHelloWorldText = getByText('Hello World');

    expect(checkHelloWorldText).toBeInTheDocument();
});


test("check name by test id", () => {
    const { getByTestId } = render(<HelloWorld />);
    const getElememt = getByTestId('name');

    expect(getElememt.textContent).toBe('Rahavi Ganeshan');  
});