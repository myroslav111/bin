import { CartInputFormWrap } from './CartInputForm.styled';
import { NameInput } from './CartInputForm.styled';
import { InputWrap } from './CartInputForm.styled';
import { ButtonAdd } from './CartInputForm.styled';
import { Form } from './CartInputForm.styled';

const CartInputForm = () => {
  // logic here...

  return (
    <CartInputFormWrap>
      <Form>
        <InputWrap>
          <NameInput>name</NameInput>
          <input type="text" />
        </InputWrap>

        <InputWrap>
          <NameInput>price</NameInput>
          <input type="number" />
        </InputWrap>

        <ButtonAdd type="submit">+ add</ButtonAdd>
      </Form>
    </CartInputFormWrap>
  );
};

export default CartInputForm;
