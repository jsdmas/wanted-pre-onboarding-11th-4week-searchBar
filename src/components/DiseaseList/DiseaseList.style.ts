import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Span = styled.span`
  font-size: medium;
  color: rgba(0, 0, 0, 0.5);
`;

export const Ul = styled.ul`
  width: 100%;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding: 12px 0px;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
`;

export const Sick = styled.span`
  padding-left: 10px;
`;
