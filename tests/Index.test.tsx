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
    expect(screen.getByText(/UniEvents/i)).toBeInTheDocument();
  });

  test("renders hero section", () => {
    renderWithRouter();
    expect(screen.getByText(/Discover Amazing/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();
  });

  test("shows events after clicking Browse Events", async () => {
    renderWithRouter();
    const browseButton = screen.getByRole("button", { name: /Browse Events/i });
    fireEvent.click(browseButton);

    // Wait for the Upcoming Events section to appear
    expect(await screen.findByText(/Upcoming Events/i)).toBeInTheDocument();
  });

  test("filters events by category", async () => {
    renderWithRouter();
    const browseButton = screen.getByRole("button", { name: /Browse Events/i });
    fireEvent.click(browseButton);

    // Wait for Hackathon button to appear
    const hackathonBtn = await screen.findByRole("button", { name: /Hackathon/i });
    fireEvent.click(hackathonBtn);

    expect(await screen.findByText(/Hackathon 2024/i)).toBeInTheDocument();
    expect(screen.queryByText(/React Workshop/i)).not.toBeInTheDocument();
  });

  test("shows no events for unmatched search", async () => {
    renderWithRouter();
    const browseButton = screen.getByRole("button", { name: /Browse Events/i });
    fireEvent.click(browseButton);

    const searchInput = await screen.findByPlaceholderText(/search events/i);
    fireEvent.change(searchInput, { target: { value: "nonsense" } });

    expect(await screen.findByText(/No events found/i)).toBeInTheDocument();
  });
});
