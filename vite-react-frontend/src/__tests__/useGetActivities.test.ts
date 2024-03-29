import { renderHook, act, waitFor } from "@testing-library/react";
import useGetActivities from "../data/useGetActivities";
import * as fetchActivitiesModule from "../data/fetchActivities";
import { mockActivityResponseData } from "../mocks";

// Mock fetchActivities module
jest.mock("../data/fetchActivities");

describe("useGetActivities", () => {
  it("fetches activities data with correct search text", async () => {
    const fetchActivitiesSpy = jest.spyOn(fetchActivitiesModule, "default");
    fetchActivitiesSpy.mockResolvedValue(mockActivityResponseData);

    const { result } = renderHook(() => useGetActivities());

    act(() => {
      result.current.setSearchText("Berlin");
    });

    await waitFor(() => !result.current.loading);

    // Assert that the fetchActivities function was called with the right search text
    expect(fetchActivitiesSpy).toHaveBeenCalledWith("Berlin");
  });
  it("fetches activities data", async () => {
    const fetchActivitiesSpy = jest.spyOn(fetchActivitiesModule, "default");
    fetchActivitiesSpy.mockResolvedValue(mockActivityResponseData);

    const { result } = renderHook(() => useGetActivities());

    act(() => {
      result.current.setSearchText("Berlin");
    });

    await waitFor(() => !result.current.loading);

    // Assert that the response is as expected
    expect(result.current.activities).toEqual(mockActivityResponseData);
  });
  it("handles api call error when fetching activities data", async () => {
    const fetchActivitiesSpy = jest.spyOn(fetchActivitiesModule, "default");
    fetchActivitiesSpy.mockResolvedValue(undefined);

    const { result } = renderHook(() => useGetActivities());

    act(() => {
      result.current.setSearchText("Berlin");
    });

    await waitFor(() => !result.current.loading);

    expect(result.current.error).toBe(true);
  });
});
