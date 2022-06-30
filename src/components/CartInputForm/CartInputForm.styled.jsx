import styled from '@emotion/styled';

export const CartInputFormWrap = styled.div`
  display: flex;
  background-color: tomato;
  padding: 15px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const NameInput = styled.span`
  margin-right: 5px;
`;

export const InputWrap = styled.label`
  &:first-child {
    margin-right: 5px;
  }
`;

export const ButtonAdd = styled.button`
  all: unset;
  margin-left: 5px;
  background-color: gray;
  color: white;
  padding: 4px;
  border-radius: 2px;
  display: flex;
  cursor: pointer;
`;
