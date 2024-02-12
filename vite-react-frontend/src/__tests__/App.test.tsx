import { render, screen } from "@testing-library/react";
import * as useGetActivitiesModule from "../data/useGetActivities";
import App from "../App";
import "@testing-library/jest-dom";
import { mockActivityResponseData } from "../mocks";

jest.mock("../data/useGetActivities");

describe("App", () => {
  let mockUseGetActivities: jest.SpyInstance;
  beforeEach(() => {
    mockUseGetActivities = jest.spyOn(useGetActivitiesModule, "default");
    mockUseGetActivities.mockImplementation(() => ({
      setSearchText: jest.fn(),
      activities: [],
      loading: false,
      error: false,
    }));
  });

  afterEach(() => {
    mockUseGetActivities.mockRestore();
  });

  it("renders loading message during the loading phase", async () => {
    // set mockUseGetActivities to simulate loading state
    mockUseGetActivities.mockImplementation(() => ({
      setSearchText: jest.fn(),
      activities: [],
      loading: true,
      error: false,
    }));
    jest.mock("../data/useGetActivities", () => ({
      __esModule: true,
      default: mockUseGetActivities,
    }));

    // Render the App component
    render(<App />);

    // Assert that loading message is displayed
    const loadingMessage = screen.getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });

  it("remove loading message after loading phase", async () => {
    // set mockUseGetActivities to simulate loading state ended
    mockUseGetActivities.mockImplementation(() => ({
      setSearchText: jest.fn(),
      activities: [],
      loading: false,
      error: false,
    }));
    jest.mock("../data/useGetActivities", () => ({
      __esModule: true,
      default: mockUseGetActivities,
    }));

    // Render the App component
    render(<App />);

    // Assert that loading message is not present after loading
    expect(screen.queryByText("Loading...")).toBeNull();
  });

  it("renders data view when activities are available", async () => {
    // set mockUseGetActivities to simulate activities available
    mockUseGetActivities.mockImplementation(() => ({
      setSearchText: jest.fn(),
      activities: mockActivityResponseData,
      loading: false,
      error: false,
    }));
    jest.mock("../data/useGetActivities", () => ({
      __esModule: true,
      default: mockUseGetActivities,
    }));

    // Render the App component
    render(<App />);

    // Assert that data view is displayed
    const dataView = screen.getByText("Activity 1");
    expect(dataView).toBeInTheDocument();
  });

  it("renders error message when error occurs", async () => {
    // set mockUseGetActivities to simulate error
    mockUseGetActivities.mockImplementation(() => ({
      setSearchText: jest.fn(),
      activities: [],
      loading: false,
      error: true,
    }));
    jest.mock("../data/useGetActivities", () => ({
      __esModule: true,
      default: mockUseGetActivities,
    }));

    // Render the App component
    render(<App />);

    // Assert that error message is displayed
    const errorMessage = screen.getByText("Error loading activities.");
    expect(errorMessage).toBeInTheDocument();
  });
});
