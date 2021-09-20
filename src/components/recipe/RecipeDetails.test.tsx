import React from "react";
import { render, screen } from "@testing-library/react";
import RecipdeDetails from "./RecipeDetails";
import { getTitles } from "../../utils";

describe("RecipeDetails", () => {
  const defaultData = {
    calories: 788,
    title: "White Cheddar Grilled Cheese with Cherry Preserves & Basil",
    id: "4dT8tcb6ukGSIg2YyuGEOm",
    description:
      "*Grilled Cheese 101*: Use delicious cheese and good quality bread; make crunchy on the outside and ooey gooey on the inside; add one or two ingredients for a flavor punch! In this case, cherry preserves serve as a sweet contrast to cheddar cheese, and basil adds a light, refreshing note. Use __mayonnaise__ on the outside of the bread to achieve the ultimate, crispy, golden-brown __grilled cheese__. Cook, relax, and enjoy!",
    photo: {
      url: "//images.ctfassets.net/kk2bw5ojx476/61XHcqOBFYAYCG…SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg",
      metadata: { tags: Array(0) },
      sys: {
        id: "61XHcqOBFYAYCGsKugoMYK",
        type: "Asset",
        createdAt: "2018-05-07T13:37:53.784Z",
        updatedAt: "2018-05-07T13:37:53.784Z",
      },
    },
    chef: {
      sys: { id: "Chef Id" },
      name: "Shahzaib",
    },
    tags: [
      {
        sys: { id: "Chef Id" },
        name: "healthy",
      },
    ],
  };

  it("Should render component", () => {
    const { container } = render(<RecipdeDetails recipe={defaultData} />);
    expect(container).not.toBe(null);
  });

  it("Should render all details in component", () => {
    const { title, subTitle } = getTitles(defaultData.title);
    const { container } = render(<RecipdeDetails recipe={defaultData} />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      `https:${defaultData.photo.url}`
    );
    expect(container.querySelector("[data-testid=title]")).toHaveTextContent(
      title
    );
    expect(
      container.querySelector("[data-testid=sub-title]")
    ).toHaveTextContent(subTitle);
    expect(container.querySelector("[data-testid=chef]")).not.toBeNull();
    expect(
      container.querySelector("[data-testid=tags]")?.childNodes
    ).toHaveLength(1);
  });
});
