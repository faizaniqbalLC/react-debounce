// eslint-disable-next-line react/prop-types
const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <h2>Search Data from Wikipedia</h2>
      <br />
      <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        autoFocus
      />
    </>
  );
};
export default SearchInput;
