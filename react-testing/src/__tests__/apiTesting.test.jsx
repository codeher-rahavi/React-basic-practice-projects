import { render,screen, waitFor } from "@testing-library/react";
import ApiCallTest from "../components/api-testing";
import React from "react";
import "@testing-library/jest-dom";

describe('Api testing file', () => {
    it('check list of users fetching', async() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve([
                {
                    id: 1,
                    name: "rahavi",
                },
                {
                    id: 2,
                    name: "hardik",
                }
            ]),
        })
        );



        render(<ApiCallTest />)

        expect(screen.getByText('Loading data.....')).toBeInTheDocument();


        await waitFor(()=>{
            expect(screen.getByText('rahavi')).toBeInTheDocument();
            expect(screen.getByText('hardik')).toBeInTheDocument();          
        });

        expect(screen.queryByText('Loading data.....')).not.toBeInTheDocument();
    });
});