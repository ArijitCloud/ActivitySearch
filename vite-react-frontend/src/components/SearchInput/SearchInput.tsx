import { useState } from "react";
import "./SearchInput.css";
interface SearchInputProps {
  placeholder?: string;
  handleSearch: (searchText: string) => void;
  handleClear?: () => void;
}
export const SearchInput = ({
  placeholder,
  handleSearch,
  handleClear,
}: SearchInputProps) => {
  const [searchText, setSearchText] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const oldSearchText = searchText;
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    if (!newSearchText && oldSearchText && handleClear) {
      handleClear();
    }
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
