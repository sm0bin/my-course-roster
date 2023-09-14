import PropTypes from "prop-types";

const CartItems = ({ cartItem }) => {
  return <li>{cartItem}</li>;
};

CartItems.propTypes = {
  cartItem: PropTypes.string,
};

export default CartItems;
