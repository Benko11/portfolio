import styled from "styled-components";
import "./App.css";
import Card from "./components/Card";
import { ProjectMarker } from "./components/Card";
import Header from "./components/Header";
import projects from "./data/projects.json";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />

      <MainContainer id="portfolio">
        <Container>
          <div style={{ paddingBottom: "1.5rem" }}>
            <Header>Portfolio</Header>
            <CardGrid>
              {projects.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  marker={project.marker as ProjectMarker}
                  techStack={project.techStack}
                  url={project.url}
                  demo={project.demo ? project.demo : undefined}
                />
              ))}
            </CardGrid>
          </div>

          <Skills />
        </Container>
      </MainContainer>

      <Footer />
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 990px;
  max-width: 95%;
`;

const CardGrid = styled.div`
  --columns: 3;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (max-width: 60rem) {
    --columns: 2;
  }

  @media (max-width: 40rem) {
    --columns: 1;
  }
`;

export default App;
