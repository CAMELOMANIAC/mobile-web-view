import { Link } from "@tanstack/react-router";
import styled from "styled-components";

const BottomNav = () => {
  const onClickHandler = () => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("네이티브로 보낼 데이터");
    }
  };
  return (
    <NavContainer>
      <Link to="/about">about</Link>
      <button onClick={onClickHandler}>post message</button>
    </NavContainer>
  );
};

export default BottomNav;

const NavContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 425px;
  height: 50px;
  background-color: #333;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
`;
