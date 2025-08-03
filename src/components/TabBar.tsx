import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

type Props = {
  tapItems: React.ReactNode[];
  setTab: React.Dispatch<React.SetStateAction<number>>;
  tab: number;
  $top?: number;
};

// type TabItemProps = {
//   onClick: React.MouseEventHandler<HTMLElement>;
//   key: number;
// };

const TabBar = ({ tapItems, setTab, tab, $top }: Readonly<Props>) => {
  return (
    <TabContainer $top={$top ?? 0}>
      {tapItems.map((item, index) => (
        <TabItem key={index} onClick={() => setTab(index)}>
          {item}
          {tab === index && (
            <TabItemUnderline layoutId="tab-underline" transition={{ type: "spring", stiffness: 500, damping: 30 }} />
          )}
        </TabItem>
      ))}
      {/* {tapItems.map((item, index) =>
        React.isValidElement(item)
          ? React.cloneElement(item as React.ReactElement<TabItemProps>, { key: index, onClick: () => setTab(index) })
          : item
      )} */}
    </TabContainer>
  );
};

export default TabBar;

type TabContainerProps = {
  $top?: number;
};
const TabContainer = styled.div<TabContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: ${({ $top }) => $top + "px" || 0};
  left: 0;
  z-index: 1;

  width: 100%;
  height: auto;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 20px 10px rgba(255, 255, 255, 1);

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

const TabItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: auto;
  padding: 1rem;
`;

const TabItemUnderline = styled(motion.div)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  height: 3px;
  border-radius: 2px;

  background: black;
`;
