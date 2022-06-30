import propTypes from 'prop-types';
import {
  CartItemWrap,
  CartNameWrap,
  CartCounterWrap,
  CartCounterButton,
  CartAmountWrap,
  CartAmountValue,
  CartAmountButtonDell,
} from './CartItem.styled';

const CartItem = ({ item }) => {
  const amount = item.count * item.price;

  return (
    <CartItemWrap>
      <CartNameWrap>
        <span>{item.name}</span>
        <span>{item.price}$</span>
      </CartNameWrap>

      <CartCounterWrap>
        <CartCounterButton>
          <span>-</span>
        </CartCounterButton>
        <span>{item.count}</span>
        <CartCounterButton>
          <span>+</span>
        </CartCounterButton>
      </CartCounterWrap>

      <CartAmountWrap>
        <CartAmountValue>{amount}$</CartAmountValue>
        <CartAmountButtonDell>X</CartAmountButtonDell>
      </CartAmountWrap>
    </CartItemWrap>
  );
};

CartItem.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    count: propTypes.number.isRequired,
  }),
};

export default CartItem;
