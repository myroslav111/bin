import propTypes from 'prop-types';

const CartrItem = ({ name, price, count }) => {
  const amount = count * price;

  return (
    <div className="cart-item">
      <span>{name}</span>
      <span>{price}$</span>

      <div>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </div>

      <span>{amount}$</span>
      <button>x</button>
    </div>
  );
};

CartrItem.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  count: propTypes.number.isRequired,
};

export default CartrItem;
