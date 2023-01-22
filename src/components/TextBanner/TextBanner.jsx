import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin: 5px;
  color: darkblue;
`;

const SubTitle = styled.div`
  color: gray;
`;
const TextBanner = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

export default TextBanner;
