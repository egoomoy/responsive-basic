import React from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;

function Main() {
  return <MainWrapper>Main</MainWrapper>;
}

export default Main;
