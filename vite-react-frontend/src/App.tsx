import "./App.css";
import DataView from "./components/DataView/DataView";
import SearchInput from "./components/SearchInput/SearchInput";
import useGetActivities from "./data/useGetActivities";

function App() {
  const { setSearchText, activities, loading, error } = useGetActivities();

  const onHandleSearch = (searchText: string) => {
    console.log("searchText::", searchText);
    setSearchText(searchText);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <main className="activity-main">
      <section className="search-input">
        <SearchInput handleSearch={onHandleSearch} />
      </section>
      <DataView data={activities} />
    </main>
  );
}

export default App;
