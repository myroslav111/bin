import styled from '@emotion/styled';

export const CartItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 0 2px 0;
  align-items: center;
`;

export const CartNameWrap = styled.div`
  display: flex;
  width: 33.33%;
  justify-content: space-between;
`;

export const CartCounterWrap = styled.div`
  display: flex;
  width: 33.33%;
  justify-content: space-evenly;
`;

export const CartCounterButton = styled.button`
  all: unset;
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: gray;
  color: white;
  border-radius: 2px;
  cursor: pointer;
`;

export const CartAmountWrap = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CartAmountValue = styled.span`
  padding: 0 5px;
`;

export const CartAmountButtonDell = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: tomato;
  width: 25px;
  height: 25px;
  border-radius: 2px;
`;
