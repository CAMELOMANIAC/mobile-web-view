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
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);

  background: rgba(255, 255, 255, 0.15);

  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease-in-out;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    height: 1px;

    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);

    content: "";
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;

    width: 1px;
    height: 100%;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), transparent, rgba(255, 255, 255, 0.3));

    content: "";
  }
`;
