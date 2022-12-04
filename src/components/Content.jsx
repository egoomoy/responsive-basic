import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  background: #a6b8b9;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  @media (max-width: 600px) {
    border-radius: 0;
    &:nth-child(1) {
      border-radius: 20px 20px 0 0;
    }
    &:last-child {
      border-radius: 0 0 20px 20px;
    }
  }
`;

function Content() {
  return <ContentWrapper>Content</ContentWrapper>;
}

export default Content;
