import styled from '@emotion/styled';

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 0px 36px 5px var(--background2) inset,
    0px 0px 26px 5px var(--accent2);
  border-radius: 26px;
  background-color: var(--background1);
  padding: 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background-color: var(--accent2);
  box-shadow: 0px 0px 18px 5px var(--accent1) inset,
    0px 0px 8px 5px var(--accent1);
  cursor: pointer;
  color: white;
`;
