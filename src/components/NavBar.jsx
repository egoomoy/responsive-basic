import React from "react";
import styled from "styled-components";

const NavBarWrapper = styled.nav`
  background: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
`;

function NavBar() {
  return <NavBarWrapper>nav</NavBarWrapper>;
}

export default NavBar;
