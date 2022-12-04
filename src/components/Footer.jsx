import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;

function Footer() {
  return <FooterWrapper>Footer</FooterWrapper>;
}

export default Footer;
