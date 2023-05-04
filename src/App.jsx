import SearchInput from "./components/SearchInput";
import List from "./components/List";
import { useState } from "react";
import useDebounce from "./hooks/useDebounce";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const { debouncedValue } = useDebounce(searchValue, 1000);

  return (
    <>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <List searchTerm={debouncedValue} />
    </>
  );
}

export default App;
