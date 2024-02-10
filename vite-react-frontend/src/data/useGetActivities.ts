import { useEffect, useState } from "react";
import { Activity } from "../types/activity";
import fetchActivities from "./fetchActivities";

const useGetActivities = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [activities, setActivities] = useState<ReadonlyArray<Activity>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchActivities(encodeURIComponent(searchText.trim())).then((data) => {
      if (data) {
        setActivities(data);
      } else {
        setError(true);
      }
      setLoading(false);
    });
  }, [searchText]);

  return { setSearchText, activities, loading, error };
};

export default useGetActivities;
