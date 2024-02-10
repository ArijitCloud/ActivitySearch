import useGetActivities from "../../data/useGetActivities";
import SearchInput from "../SearchInput/SearchInput";

const DataView = () => {
  const { setSearchText, activities, loading, error } = useGetActivities();

  const onHandleSearch = (searchText: string) => {
    console.log("searchText::", searchText);
    setSearchText(searchText);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <main>
      <SearchInput handleSearch={onHandleSearch} />
      <div>
        {activities.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </main>
  );
};

export default DataView;
