import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
import SearchBar from "./components/Search";
import ProductTable from "./components/ProductTable";

function FilterableProductTable({ products }) {
  const [filteredText, setFilteredText] = useState("fruit");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filteredText={filteredText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilteredText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filteredText={filteredText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      price: PropTypes.string,
      stocked: PropTypes.bool,
      name: PropTypes.string,
    }).isRequired
  ),
};

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
