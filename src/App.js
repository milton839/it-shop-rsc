import styled, { createGlobalStyle } from 'styled-components';
import Banner from './components/Banner/Banner';
import Navbar from './components/NavBar/Navbar';


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
`
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Banner />
      </Container>
    </>
  );
}

export default App;
