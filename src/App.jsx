import Header from "./components/Header";
import Footer from "./components/Footer";
import BreadCrumbSection from "./components/BreadCrumbSection";
import MainSection from "./components/MainSection";
import SSSSection from "./components/SSSSection";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container fluid={"xxl"} className="mt-4">
          <BreadCrumbSection />
          <MainSection />
          <SSSSection />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
