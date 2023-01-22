import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;
const Center = styled.div`
  display: flex;
  flex: 3;
  justify-content: space-around;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  text-transform: uppercase;
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  list-style: none;
  margin: 30px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.dark};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Button = styled.button`
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.bgDefault};
  color: ${(props) => props.theme.colors.bgDefault};
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 20px;
  &:hover {
    background-color: white;
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid darkblue;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo>It Shop</Logo>
      </Left>
      <Center>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About Us</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Center>
      <Right>
        <Button>Call Us Now</Button>
      </Right>
    </Container>
  );
};

export default Navbar;
