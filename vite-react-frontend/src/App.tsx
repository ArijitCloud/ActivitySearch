import "./App.css";
import { DataView, MessageView, SearchInput } from "./components";
import useGetActivities from "./data/useGetActivities";

function App() {
  const { setSearchText, activities, loading, error } = useGetActivities();

  const onHandleSearch = (searchText: string) => {
    console.log("searchText::", searchText);
    setSearchText(searchText);
  };

  // TODO: localize these texts
  const loadingText = "Loading...";
  const errorText = "Error loading activities.";
  const noResultsText = "No activities found.";

  return (
    <main className="activity-main">
      <section className="search-input">
        <SearchInput handleSearch={onHandleSearch} />
      </section>
      <section className="activity-list">
        {loading ? (
          <MessageView message={loadingText} />
        ) : error ? (
          <MessageView message={errorText} />
        ) : activities.length < 1 ? (
          <MessageView message={noResultsText} />
        ) : (
          <DataView data={activities} />
        )}
      </section>
    </main>
  );
}

export default App;
