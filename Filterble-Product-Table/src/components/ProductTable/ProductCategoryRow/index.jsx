import PropTypes from "prop-types";

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string,
};

export default ProductCategoryRow;
