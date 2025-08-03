import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import styled from "styled-components";

import portrait from "../../../assets/portrait.png";
import { CommonLi, CommonUl, GlassContanierWithPadding, Page } from "../../../components/Commons";
import PageTransitionWrapper from "../../../components/PageTransitionWrapper";
import TabBar from "../../../components/TabBar";
import { useGNBSetState } from "../../../store/useGNBStore";

export const Route = createFileRoute("/(isLogin)/employee/$employeeId")({
  component: () => (
    <PageTransitionWrapper>
      <RouteComponent />
    </PageTransitionWrapper>
  ),
});
function RouteComponent() {
  const setIsShowPrevButton = useGNBSetState((state) => state.setIsShowPrevButton);

  useEffect(() => {
    setIsShowPrevButton(true);

    return () => {
      setIsShowPrevButton(false);
    };
  }, []); // eslint-disable-line

  const [tab, setTap] = useState(0);

  return (
    <Page>
      <PortraitContainer>
        <div>
          <NameSpan>김아무개</NameSpan>
          <NickNameSpan>뭐시기 전문가</NickNameSpan>
          <button>
            <GlassContanierWithPadding $padding="1rem">
              <LuMessageCircleMore />
              입사제의
            </GlassContanierWithPadding>
          </button>
        </div>
        <Portrait src={portrait} />
      </PortraitContainer>
      <GlassContanierWithPaddingFullHeight>
        <TabBar tapItems={[<p>기술</p>, <p>멘탈</p>]} setTab={setTap} tab={tab} />
        <AnimatePresence mode="wait">
          {tab === 0 && (
            <motion.div
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              initial={{ opacity: 0, x: "50%" }}
              animate={{ opacity: 1, x: 0 }}
              style={{ width: "100%" }}
              key="tab0"
            >
              <CommonUl>
                <CommonLi>프론트엔드 감각</CommonLi>
                <CommonLi>백엔드 감각</CommonLi>
                <CommonLi>데이터베이스 감각</CommonLi>
                <CommonLi>클라우드 감각</CommonLi>
                <CommonLi>알고리즘 능력</CommonLi>
                <CommonLi>도메인 지식</CommonLi>
                <CommonLi>QA/디버깅</CommonLi>
              </CommonUl>
            </motion.div>
          )}
          {tab === 1 && (
            <motion.div
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              initial={{ opacity: 0, x: "-50%" }}
              animate={{ opacity: 1, x: 0 }}
              style={{ width: "100%" }}
              key="tab1"
            >
              <CommonUl>
                <CommonLi>협업 능력</CommonLi>
                <CommonLi>문제해결 능력</CommonLi>
                <CommonLi>프로젝트 관리 능력</CommonLi>
                <CommonLi>책임감</CommonLi>
                <CommonLi>리더쉽</CommonLi>
                <CommonLi>효율적 시간분배</CommonLi>
                <CommonLi>기술 습득 능력</CommonLi>
              </CommonUl>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassContanierWithPaddingFullHeight>
    </Page>
  );
}

const PortraitContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0 1rem;

  img {
    flex: 1 1 0;

    height: auto;
    min-width: 0;

    object-fit: cover;
  }
  & > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    width: 100%;
    height: 100%;
    padding: 1rem 0;

    gap: 0.5rem;
  }
`;

const NameSpan = styled.span`
  color: #333333;
  font-weight: 600;
  font-size: 2rem;
`;

const NickNameSpan = styled.span`
  color: #333333;
  font-weight: 600;
  font-size: 1rem;
`;

const Portrait = styled.img`
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0));
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0));
`;

const GlassContanierWithPaddingFullHeight = styled(GlassContanierWithPadding)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  height: 100%;
  padding: 0;

  overflow-x: hidden;
`;
