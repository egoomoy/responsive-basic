import React from "react";
import styled from "styled-components";
import Content from "./Content";

const ContentBoxWrapper = styled.div`
  display: flex;
  grid-gap: 0.25rem;
  margin 0.25rem 0;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column; 
    margin : 0;
    grid-gap 0;
  }
`;

function ContentBox() {
  return (
    <ContentBoxWrapper>
      <Content />
      <Content />
      <Content />
    </ContentBoxWrapper>
  );
}

export default ContentBox;
