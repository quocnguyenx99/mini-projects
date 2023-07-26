import PropTypes from "prop-types";
import styles from "./Square.module.css";

function Square({ value, onSquareClick }) {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
};

export default Square;
