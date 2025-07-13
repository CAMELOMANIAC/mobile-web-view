import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

type Props = {
  tapItems: React.ReactNode[];
  setTab: React.Dispatch<React.SetStateAction<number>>;
  tab: number;
};

// type TabItemProps = {
//   onClick: React.MouseEventHandler<HTMLElement>;
//   key: number;
// };

const TabBar = ({ tapItems, setTab, tab }: Readonly<Props>) => {
  return (
    <TabContainer>
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

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  height: auto;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
