import styled from "styled-components";

export const Card = styled.div`
  width: 450px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgLight} 50%,
    ${(props) => props.theme.colors.text} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.9s ease-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.bgDefault};
    color: ${(props) => props.theme.colors.text};
    background-position: left bottom;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const CardTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled.div`
  color: ${(props) => props.theme.colors.textDark};
  font-size: 15px;
  text-align: center;
`;

export const Button = styled.a`
  color: ${(props) => props.theme.colors.danger};
  font-weight: bold;
  margin-top: 20px;
`;
