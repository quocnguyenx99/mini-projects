import PropTypes from "prop-types";
function SearchBar({
  filteredText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filteredText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show product in stock
      </label>
    </form>
  );
}

SearchBar.propTypes = {
  filteredText: PropTypes.string,
  inStockOnly: PropTypes.bool,
  onFilterTextChange: PropTypes.func,
  onInStockOnlyChange: PropTypes.func,
};

export default SearchBar;
