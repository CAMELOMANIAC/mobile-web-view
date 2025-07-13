import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <p>BongoManager</p>
      <GlobalContinueButton>길게 눌러 진행</GlobalContinueButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  padding: 0.5rem;
`;

const GlobalContinueButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
