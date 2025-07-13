import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <p>BongoManager</p>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  padding: 0.5rem;
`;
