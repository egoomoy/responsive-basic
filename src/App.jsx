import styled from "styled-components";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import ContentBox from "./components/ContentBox";

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.5fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
  color: white;
`;

const App = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Main />
        <SideBar />
        <ContentBox />
        <Footer />
      </Container>
    </>
  );
};

export default App;
