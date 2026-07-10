function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter Product Name..."
      />

      <button>Search</button>
    </div>
  );
}

export default SearchBar;