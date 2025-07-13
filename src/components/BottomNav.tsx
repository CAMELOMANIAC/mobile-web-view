import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { nav } from "motion/react-m";
import { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import styled from "styled-components";

import { GlassContanier } from "./Commons";
const BottomNav = () => {
  const { location } = useRouterState();
  const [hasLeftNavContents, setHasLeftNavContents] = useState(false);

  // const onClickHandler = () => {
  //   if (window.ReactNativeWebView) {
  //     window.ReactNativeWebView.postMessage("네이티브로 보낼 데이터");
  //   }
  // };

  return (
    <NavContainer onClick={() => setHasLeftNavContents((prev) => !prev)}>
      <AnimatePresence>
        {hasLeftNavContents && (
          <NavContents
            initial={{ opacity: 0, left: "50%" }}
            animate={{ opacity: 1, left: "1rem" }}
            exit={{ opacity: 0, left: "50%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ padding: 0, position: "absolute", left: "1rem" }}
            key="left"
          >
            <button onClick={() => window.history.back()}>
              <IconWrapper>
                <IoIosArrowBack />
              </IconWrapper>
            </button>
          </NavContents>
        )}
      </AnimatePresence>
      <NavContents $isCollapsed={hasLeftNavContents} key="center">
        {/* <Link to="/about">about</Link>
        <button onClick={onClickHandler}>post message</button> */}
        <Link to="/" activeProps={{ style: { color: "black" } }}>
          {location.pathname === "/" && (
            <TabItemHighlight
              layoutId="nav-indicator"
              initial={{ y: "auto" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <IconWrapper>
            <GoHomeFill />
          </IconWrapper>
        </Link>
        <Link to="/schedule" activeProps={{ style: { color: "black" } }}>
          {location.pathname === "/schedule" && (
            <TabItemHighlight
              layoutId="nav-indicator"
              initial={{ y: "auto" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <IconWrapper>
            <FaCalendar />
          </IconWrapper>
        </Link>
        <Link to="/employee" activeProps={{ style: { color: "black" } }}>
          {location.pathname === "/employee" && (
            <TabItemHighlight
              layoutId="nav-indicator"
              initial={{ y: "auto" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <IconWrapper>
            <IoPerson />
          </IconWrapper>
        </Link>
      </NavContents>
    </NavContainer>
  );
};

export default BottomNav;

const NavContainer = styled(motion(nav))`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: auto;
`;

type NavContentsProps = {
  $isCollapsed?: boolean;
};

const NavContents = styled(motion(GlassContanier))<NavContentsProps>`
  flex-direction: row;
  overflow: visible;
  position: static;

  width: auto;
  height: auto;
  margin-bottom: 1rem;
  padding: ${({ $isCollapsed }) => ($isCollapsed ? "0" : "0 1rem")};
  border-radius: 10rem;

  background: rgba(255, 255, 255, 0.5);

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: gray;

    text-decoration: none;
  }

  svg {
    font-size: 2rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  padding: 1rem;

  font-size: 1rem;
`;

const TabItemHighlight = styled(motion.div)`
  position: absolute;
  z-index: 0;

  width: 3rem;
  height: 3rem;
  border-radius: 10rem;

  background: gray;
`;
