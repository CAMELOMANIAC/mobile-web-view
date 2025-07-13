import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  moveDirection?: "left" | "right";
};

const PageTransitionWrapper = ({ children, moveDirection = "right" }: Readonly<Props>) => {
  const [isTransitionEnd, setIsTransitionEnd] = useState(false);
  useEffect(() => {
    //화면전환 애니메이션중 스크롤이 튀는걸 방지하기위한 hidden을 적용
    const main = document.querySelector("main");
    if (main) {
      if (isTransitionEnd) {
        main.style.overflow = "";
      }
      if (!isTransitionEnd) {
        main.style.overflow = "hidden";
      }
    }
  }, [isTransitionEnd]);
  return (
    <InheritMotionDiv
      initial={{ opacity: 0, x: 20 * (moveDirection === "right" ? -1 : 1) + "%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      onAnimationStart={() => setIsTransitionEnd(false)}
      onAnimationComplete={() => setIsTransitionEnd(true)}
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

  width: inherit;
  height: inherit;
  max-width: 100vw;
`;
