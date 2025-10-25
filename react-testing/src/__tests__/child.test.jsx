import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Child from "../components/child";


test('check props value', () => {
        const { getByTestId } = render(<Child  count={500}/>)
        const getElememt = getByTestId('child-count-value');

        expect(getElememt.textContent).toBe('500');


});

test('check toggle button',() =>{
    const {getByTestId} = render(<Child count={100}/>)
    const toggleButton = getByTestId('toggle-button');
    const toggleText = getByTestId('toggle-text');

    expect(toggleText.textContent).toBe('false');

    fireEvent.click(toggleButton);
    expect(toggleText.textContent).toBe('true');
})
