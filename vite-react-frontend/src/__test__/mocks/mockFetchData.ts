import { Activity } from "../../types/activity";

const apiUrl = (searchText: string) =>
  `http://localhost:3001/api/v1/activities?title=${searchText}`;

export const fetchEmptyStringSearchApiUrl = apiUrl("");

export const mockActivityResponseData:ReadonlyArray<Activity> = [
  {
    id: 1,
    title: "Activity 1",
    price: "1000",
    rating: 4.5,
    hasSpecialOffer: true,
    supplierName: "Supplier 1",
    supplierLocation: "Location 1",
  },
  {
    id: 2,
    title: "Activity 2",
    price: "2000",
    rating: 4.0,
    hasSpecialOffer: false,
    supplierName: "Supplier 2",
    supplierLocation: "Location 2",
  },
];
