import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("shows up with no errors", function() {
    render(<NewBoxForm />);
})

it("matches snapshot", function() {
    const { asFragment } = render(<NewFormBox/>);
    expect(asFragment()).toMatchSnapshot();
})