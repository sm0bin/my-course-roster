import PropTypes from "prop-types";
import CartItems from "./CartItems";

const Cart = ({ cart }) => {
  //   const { credit, price } = cart;

  const totalCreditHour = cart.reduce((accumulator, item) => {
    return accumulator + item.credit;
  }, 0);
  const totalPrice = cart.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  return (
    <div className="rounded-xl p-6 bg-white h-auto">
      <h2 className="font-bold text-xl text-blue-500">
        Credit Hour Remaining {20 - totalCreditHour} hr
      </h2>
      <hr className="my-4" />
      <h2 className="font-bold text-2xl mb-5">Course Name</h2>
      <ol className="list-decimal list-inside leading-8 text-lg text-slate-600">
        {cart.map((cartItem) => (
          <CartItems key={cartItem.id} cartItem={cartItem.title} />
        ))}
      </ol>
      <hr className="mt-6 mb-4" />
      <h4 className="font-medium text-slate-700 text-lg">
        Total Credit Hour : {totalCreditHour}
      </h4>
      <hr className="my-4" />
      <h3 className="font-semibold text-slate-700 text-lg">
        Total Price : {totalPrice} USD
      </h3>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
