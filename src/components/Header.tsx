import styled from '@emotion/styled';

function Header({ content }: { content: string }) {
  return (
    <Title>
      <h1>{content}</h1>
    </Title>
  );
}

export default Header;

const Title = styled.header`
  text-align: center;
  min-width: 25%;
  line-height: 50px;
  h1 {
    font-size: xx-large;
    font-weight: bold;
  }
`;
