import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
`;

function SideBar() {
  return <SideBarWrapper>SideBar</SideBarWrapper>;
}

export default SideBar;
