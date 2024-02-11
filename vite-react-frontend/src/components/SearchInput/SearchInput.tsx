import { useState } from "react";
import "./SearchInput.css";
interface SearchInputProps {
  placeholder?: string;
  handleSearch: (searchText: string) => void;
}
export const SearchInput = ({
  placeholder,
  handleSearch,
}: SearchInputProps) => {
  const [searchText, setSearchText] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    handleSearch(searchText);
  };

  return (
    <input
      type="text"
      placeholder={placeholder || "Search..."}
      value={searchText}
      onChange={onInputChange}
      onKeyDown={onSearch}
    />
  );
};
