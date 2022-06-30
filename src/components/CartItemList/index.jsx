import propTypes from 'prop-types';
import CartItem from 'components/CartItem';
import { CartItemListWrap } from './CartItemList.styled';

const CartItemList = ({ items }) => (
  <CartItemListWrap>
    {items.map(item => (
      <CartItem key={item.id} item={item} />
    ))}
  </CartItemListWrap>
);

CartItemList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};

export default CartItemList;
