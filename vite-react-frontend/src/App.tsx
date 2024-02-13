import "./App.css";
import { DataView, MessageView, SearchInput } from "./components";
import useGetActivities from "./data/useGetActivities";

function App() {
  const { setSearchText, activities, loading, error } = useGetActivities();

  const onHandleSearch = (searchText: string) => {
    setSearchText(searchText);
  };

  const onClear = () => {
    setSearchText("");
  };

  // TODO: localize these texts
  const loadingText = "Loading...";
  const errorText = "Error loading activities.";
  const noResultsText = "No activities found.";

  return (
    <>
      <h1 style={{ fontSize: "1.5rem", margin: "0.5rem" }}>Activity Search</h1>
      <main className="activity-main">
        <section className="search-input">
          <SearchInput handleSearch={onHandleSearch} handleClear={onClear} />
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
    </>
  );
}

export default App;
