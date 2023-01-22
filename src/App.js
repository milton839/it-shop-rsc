import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Banner from './components/Banner/Banner';
import Navbar from './components/NavBar/Navbar';
import Services from './components/Services/Services';


const GlobalStyles = createGlobalStyle`
  body{
    background-color: #fff;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    *{
      font-family: 'Roboto', sans-serif;
    }
  }
`
const Container = styled.div`
  background-color: #fff;
  height: 100vh;
`;

const theme = {
  colors:{
    primary: 'darkBlue',
    secondary: 'tomato',
    dark: 'black',
    text: 'snow',
    danger: 'red',
    textDark: 'gray',
    bgDefault: 'white',
    bgPrimary: 'darkBlue',
    bgSecondary: 'lightBlue',
    bgLight: 'aliceBlue'
  }
}
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Banner />
        <Services />
      </Container>
    </ThemeProvider>
  );
}

export default App;
