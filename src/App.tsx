import styled from "styled-components";
import "./App.css";
import Card from "./components/Card";
import { ProjectMarker } from "./components/Card";
import Header from "./components/Header";
import projects from "./data/projects.json";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <HeroSection>
        <Hero>
          <HeroMain>
            <div>Hello.</div>
            <div>I'm Benjamin</div>
          </HeroMain>
          <Tagline>Web Developer, Software Developer</Tagline>
          <Cta>
            <PrimaryCtaButton>Learn more</PrimaryCtaButton>
            <SecondaryCtaButton>View my CV</SecondaryCtaButton>
          </Cta>
        </Hero>
        <HeroAnimation></HeroAnimation>
        <div
          style={{
            position: "absolute",
            right: "-40rem",
            overflow: "hidden",
            width: "40rem",
            height: "40rem",
            boxShadow: "0 0 200px hsl(var(--theme-hue), 100%, 40%)",
            borderRadius: "50%",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </HeroSection>

      <MainContainer>
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

const Hero = styled.div`
  padding-left: 4rem;
  transform: translateY(20vh);
  /* transform: translateY(20vh); */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HeroMain = styled.div`
  font-weight: 900;
  font-size: 3.5rem;
`;

const Tagline = styled.div`
  font-weight: 200;
  font-size: 1.5rem;
  opacity: 0.8;
`;

const Cta = styled.div`
  padding-top: 2rem;
  display: flex;
  gap: 0.5rem;
`;

const CtaButton = styled.button`
  all: unset;
  text-transform: uppercase;
  font-size: 80%;
  padding: 0.5rem 1rem;
  border-radius: 1000px;
  cursor: pointer;
  transition: 0.5s all ease;
`;

const PrimaryCtaButton = styled(CtaButton)`
  background-color: var(--white);
  color: var(--black);

  &:hover {
    background-color: hsl(
      var(--theme-hue),
      calc(var(--white-saturation) * 1%),
      calc(var(--white-lightness) * 1% - 10%)
    );
  }
`;
const SecondaryCtaButton = styled(CtaButton)`
  border: 1px solid var(--white);

  &:hover {
    background-color: hsl(
      var(--theme-hue),
      calc(var(--black-saturation) * 1%),
      calc(var(--black-lightness) * 1% + 10%)
    );
  }
`;

const HeroSection = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    var(--black) 60%,
    hsl(var(--theme), 86%, 6%)
  );
  display: flex;
  gap: 4rem;
`;

const HeroAnimation = styled.div`
  flex-grow: 1;
  margin: 20px;
  display: grid;
  gap: 1rem;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
`;

export default App;
