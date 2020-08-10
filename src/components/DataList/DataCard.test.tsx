import React from "react";
import { render } from "@testing-library/react";
import DataCard from "./DataCard";

test("renders DataCard with title and subtitle", () => {
  const { getByText } = render(<DataCard title="test" subtitle="2" />);
  const element = getByText(/test/i);
  expect(element).toBeInTheDocument();

  const elementWithSubtitle = getByText(/2/i);
  expect(elementWithSubtitle).toBeInTheDocument();
});

test("renders DataCard without subtitle", () => {
  const { getByText } = render(<DataCard title="test" />);
  const linkElement = getByText(/No description/i);
  expect(linkElement).toBeInTheDocument();
});