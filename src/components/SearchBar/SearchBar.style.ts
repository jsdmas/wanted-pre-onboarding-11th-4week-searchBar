import styled from '@emotion/styled';

export const Form = styled.form`
  min-width: 460px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 70px;
  border-radius: 40px;
  border: none;
  padding: 8px 30px;
  font-size: 17px;
  &::placeholder {
    font-size: medium;
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: 2px solid rgb(1, 123, 232);
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 3%;
  background-color: rgb(1, 123, 232);
  border: none;
  border-radius: 25px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;
