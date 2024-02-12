import { enableFetchMocks } from "jest-fetch-mock";
import fetchMock from "jest-fetch-mock";
import fetchActivities from "../data/fetchActivities";
import {
  fetchEmptyStringSearchApiUrl,
  mockActivityResponseData,
} from "./mocks";

enableFetchMocks();

describe("fetchActivities", () => {
  beforeEach(() => {
    fetchMock.mockClear();
  });

  it("fetches activities data with correct api url", async () => {
    const responseData = {
      success: true,
      data: mockActivityResponseData,
    };
    fetchMock.mockResponseOnce(JSON.stringify(responseData));

    await fetchActivities("");

    // Assert that the fetch was called with the right api url
    expect(fetch).toHaveBeenCalledWith(fetchEmptyStringSearchApiUrl);
  });

  it("fetches activities data", async () => {
    const responseData = {
      success: true,
      data: mockActivityResponseData,
    };
    fetchMock.mockResponseOnce(JSON.stringify(responseData));

    const response = await fetchActivities("");

    // Assert that the response is as expected
    expect(response).toEqual(responseData.data);
  });
  it("handles api call error when fetching activities data", async () => {
    fetchMock.mockReject(new Error("Network response was not ok"));

    const response = await fetchActivities("");

    // Assert that the response is as expected
    expect(response).toBeUndefined();
  });
  it("handles backend error when fetching activities data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ success: false }));

    const response = await fetchActivities("");

    // Assert that the response is as expected
    expect(response).toBeUndefined();
  });
});
