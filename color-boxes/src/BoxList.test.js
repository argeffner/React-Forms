import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it('renders without crashing', () => {
    render(<BoxList/>)
});

it('matches snapshot', () => {
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapShot();
});

function addBox(boxList, width = "25", height = "25", backgroundColor = "pink") {
   const widthInput = boxList.getByLabelText("Width");
   const heightInput = boxList.getByLabelText("Height");
   const backgroundInput = boxList.getByLabelText("backgroundColor");
   fireEvent.change(widthInput, { target: { value: width } });
   fireEvent.change(heightInput, { target: { value: height } });
   fireEvent.change(backgroundInput, { target: { value: backgroundColor } });
   const button = boxList.getByText("Add a Box");
   fireEvent.click(button);
  }

it('adds a new box', () => {
    const boxList = render(<BoxList/>);
    addBox(boxList);
    
    const deleteButton = boxList.getByText('Delete box');
    expect(deleteButton).toBeInTheDocument();
})

it('deletes a box', () => {
    const boxList = render(<BoxList/>);
    addBox(boxList);

    const deleteButton = boxList.getByText('Delete box');
    //delete a box
    fireEvent.click(deleteButton);
    expect(deleteButton).not.toBeInTheDocument();
});