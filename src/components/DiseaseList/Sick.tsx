import styled from '@emotion/styled';

function Sick({ sickNm, onClick }: { sickNm: string; onClick: any }) {
  return (
    <Li onClick={onClick}>
      <Svg
        viewBox="0 0 16 16"
        fill="gray"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
      </Svg>
      <SickNmSpan>{sickNm}</SickNmSpan>
    </Li>
  );
}

const Li = styled.li`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding: 12px 0px;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
`;

const Svg = styled.svg`
  width: 18px;
  height: 18px;
`;

const SickNmSpan = styled.span`
  padding-left: 10px;
`;

export default Sick;
