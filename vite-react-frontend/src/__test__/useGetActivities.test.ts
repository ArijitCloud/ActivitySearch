import { renderHook, act, waitFor } from "@testing-library/react";
import useGetActivities from "../data/useGetActivities";
import * as fetchActivitiesModule from "../data/fetchActivities";
import { activityResponseData } from "./mocks";

// Mock fetchActivities module
jest.mock("../data/fetchActivities");

describe("useGetActivities", () => {
  it("fetches activities data with correct search text", async () => {
    const fetchActivitiesSpy = jest.spyOn(fetchActivitiesModule, "default");
    fetchActivitiesSpy.mockResolvedValue(activityResponseData);

    const { result } = renderHook(() => useGetActivities());

    act(() => {
      result.current.setSearchText("Berlin");
    });

    await waitFor(() => !result.current.loading);

    expect(fetchActivitiesSpy).toHaveBeenCalledWith("Berlin");
  });
  it("fetches activities data", async () => {
    const fetchActivitiesSpy = jest.spyOn(fetchActivitiesModule, "default");
    fetchActivitiesSpy.mockResolvedValue(activityResponseData);

    const { result } = renderHook(() => useGetActivities());

    act(() => {
      result.current.setSearchText("Berlin");
    });

    await waitFor(() => !result.current.loading);

    expect(result.current.activities).toEqual(activityResponseData);
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
