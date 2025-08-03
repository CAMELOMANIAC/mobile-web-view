import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  width: 100%;
  height: 100%;
`;

export const GlassContanier = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  position: relative;

  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
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

export const GlassContanierWithPadding = styled(GlassContanier)<{ $padding?: string }>`
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: auto;
  padding: ${({ $padding }) => ($padding ? $padding : "1rem")};
`;

export const CommonUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 0 1rem;

  li:nth-child(even) {
    background-color: #f0f0f0;
  }
`;

export const CommonLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;
