import React from "react";
import styled from "styled-components";
import bannerImage from "../../images/hero.png";

const Container = styled.div`
  width: 100%;
  height: 90%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;
const Description = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.textDark};
  width: 70%;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.bgDefault};
  color: ${(props) => props.theme.colors.bgDefault};
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 20px;
  margin-right: 30px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgLight} 50%,
    ${(props) => props.theme.colors.primary} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    background-color: white;
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid darkblue;
    background-position: left bottom;
  }
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
`;
const Banner = () => {
  return (
    <Container>
      <Left>
        <Title>Welcome! to Our IT Shop</Title>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          deleniti vitae ratione ab blanditiis inventore. Pariatur modi placeat
          dolorum provident non veritatis quis iusto molestiae dolore corrupti
          inventore nulla, accusamus voluptatem, voluptas in voluptatum alias
          voluptatibus odit necessitatibus architecto et nemo vitae odio
          doloremque? Magnam quia quasi fugiat debitis cumque numquam obcaecati
          veritatis veniam recusandae!
        </Description>
        <ButtonsContainer>
          <Button>About Us</Button>
          <Button>Contact Us</Button>
        </ButtonsContainer>
      </Left>
      <Right>
        <Image src={bannerImage} />
      </Right>
    </Container>
  );
};

export default Banner;
