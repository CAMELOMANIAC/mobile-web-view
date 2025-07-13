import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  moveDirection?: "left" | "right";
};

const PageTransitionWrapper = ({ children, moveDirection = "right" }: Readonly<Props>) => {
  return (
    <InheritMotionDiv
      initial={{ opacity: 0, x: 20 * (moveDirection === "right" ? -1 : 1) + "%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
    >
      {children}
    </InheritMotionDiv>
  );
};

export default PageTransitionWrapper;

const InheritMotionDiv = styled(motion.div)`
  display: inherit;
  flex: inherit;
  flex-direction: inherit;
  align-items: inherit;
  justify-content: inherit;
  position: inherit;

  width: 100%;
  height: auto;
`;
