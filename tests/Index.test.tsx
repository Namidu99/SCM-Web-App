import { render, screen, fireEvent } from "@testing-library/react";
import Index from "@/pages/index";
import { BrowserRouter } from "react-router-dom";

describe("Index Page", () => {
  const renderWithRouter = () =>
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );

  test("renders UniEvents title", () => {
    renderWithRouter();
    
    expect(screen.getByText(/^UniEvents$/i)).toBeInTheDocument();
  });

  test("renders hero section", () => {
    renderWithRouter();
    expect(screen.getByText(/Discover Amazing/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();
  });

  test("shows events after clicking Browse Events", () => {
    renderWithRouter();
    const browseButton = screen.getByRole("button", { name: /Browse Events/i });
    fireEvent.click(browseButton);
    expect(screen.getByText(/Upcoming Events/i)).toBeInTheDocument();
  });

  test("filters events by category", () => {
    renderWithRouter();
    fireEvent.click(screen.getByRole("button", { name: /Browse Events/i }));
    fireEvent.click(screen.getByRole("button", { name: /Hackathon/i }));
    expect(screen.getByText(/Hackathon 2024/i)).toBeInTheDocument();
    expect(screen.queryByText(/React Workshop/i)).not.toBeInTheDocument();
  });

  test("shows no events for unmatched search", () => {
    renderWithRouter();
    fireEvent.click(screen.getByRole("button", { name: /Browse Events/i }));
    fireEvent.change(screen.getByPlaceholderText(/search events/i), {
      target: { value: "nonsense" },
    });
    expect(screen.getByText(/No events found/i)).toBeInTheDocument();
  });
});
