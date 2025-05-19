import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Body>
      <h3>Welcome Home!</h3>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  max-width: 1024px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;
