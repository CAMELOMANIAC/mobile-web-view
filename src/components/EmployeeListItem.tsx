import { useRouter } from "@tanstack/react-router";
import styled from "styled-components";

import portrait from "../assets/portrait.png";
import { GlassContanierWithPadding } from "./Commons";

const EmployeeListItem = () => {
  const router = useRouter();
  return (
    <GlassContanierWithPadding onClick={() => router.navigate({ to: "./kim" })}>
      <PortraitIconContainer>
        <PortraitIcon src={portrait} />
      </PortraitIconContainer>
      <SimpleInfoContainer>
        <NameSpan>김아무개</NameSpan>
        <NickNameSpan>뭐시기 전문가</NickNameSpan>
      </SimpleInfoContainer>
    </GlassContanierWithPadding>
  );
};

export default EmployeeListItem;

const PortraitIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  width: 3rem;
  height: 3rem;
  border-radius: 100%;

  background-color: lightgray;
`;

const PortraitIcon = styled.img`
  position: relative;
  top: 0.5rem;

  width: 100%;
  height: auto;
  min-width: 0;

  scale: 1.2;
`;

const SimpleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding-left: 1rem;

  gap: 0.5rem;
`;

const NameSpan = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

const NickNameSpan = styled.span`
  color: gray;
  font-size: 1rem;
`;
