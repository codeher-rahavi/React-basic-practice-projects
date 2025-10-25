import { render } from "@testing-library/react";
import ApiCallTest from "../components/api-testing";

describe('Api testing file', () => {
    it('check list of users fetching', () => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve([
                {
                    id: 1,
                    name: "rahavi",
                    id: 2,
                    name: "hardik",

                },
            ]),
        })
        );


        render(<ApiCallTest />)

        expect(screen.getByText('Loading data.....').toBe)
    });
});