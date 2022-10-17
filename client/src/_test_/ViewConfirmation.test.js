import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


import ViewConfirmation from "../components/ViewConfirmation/ViewConfirmation";


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
    act(() => {
      render(<ViewConfirmation name="gymInfo" />, container);
    });
    

    const fakeUser = {
      title: "Test Gym",
      description: "Ron's Test Gym",
      cost: "33",
      accessInformation: "Use the front door",
      address: "Testing address"
    };

    expect(container.textContent).toBe("Reservation NameView Confirmation");
    expect(fakeUser.title).toEqual("Test Gym")
    expect(fakeUser.description).toEqual("Ron's Test Gym")
    expect(fakeUser.cost).toEqual("33")
    expect(fakeUser.accessInformation).toEqual("Use the front door")
    expect(fakeUser.address).toEqual("Testing address")
});

