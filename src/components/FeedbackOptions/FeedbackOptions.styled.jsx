import styled from '@emotion/styled';

export const Button = styled.button`
  width: 120px;
  padding: 15px;
  margin-right: 25px;
  background-color: #eebaf8;
  border: 1px solid transparent;
  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.36);
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: #c775d7;
  }
`;
