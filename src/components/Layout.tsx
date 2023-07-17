import styled from '@emotion/styled';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  header?: React.ReactNode;
};

function Layout({ children, header }: Props) {
  return (
    <Wrapper>
      {header}
      {children}
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.main`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 100%;
`;
