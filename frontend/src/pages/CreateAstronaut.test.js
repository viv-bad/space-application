import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import CreateAstronaut from "./CreateAstronaut";

// PROBLEM WITH IMPORT STATEMENTS - BABEL PROCESSING NEEDED TO CONVERT FROM ES6
// https://weekendprojects.dev/posts/fixing-syntaxerror-cannot-use-import-statement-outside-a-module/

jest.mock("axios");

describe("CreateAstronaut", () => {
  test("should create an astronaut successfully", async () => {
    // Arrange
    axios.post.mockResolvedValueOnce({ status: 200 });

    render(<CreateAstronaut />);

    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const missionInput = screen.getByLabelText("Mission");
    const createButton = screen.getByText("Create Astronaut");

    // Act
    fireEvent.change(nameInput, { target: { value: "Vivek Badiani" } });
    fireEvent.change(emailInput, { target: { value: "vivek@example.com" } });
    fireEvent.change(missionInput, { target: { value: "Mission to Mars" } });

    fireEvent.click(createButton);

    // Assert
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8000/astronauts",
      {
        name: "Vivek Badiani",
        email: "vivek@example.com",
        mission: "Mission to Mars",
      }
    );

    // Wait for the success message to be displayed
    const successMessage = await screen.findByText(
      "Astronaut created successfully"
    );
    expect(successMessage).toBeInTheDocument();
  });
});
