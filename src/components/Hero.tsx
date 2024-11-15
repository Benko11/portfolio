import styled from "styled-components";

export default function Hero() {
  return (
    <Container>
      <Main>
        <HeroMain>
          <div>Hello.</div>
          <div>I'm Benjamin</div>
        </HeroMain>
        <Tagline>Web Developer, Software Developer</Tagline>
        <Cta>
          <PrimaryCtaButton href="#portfolio">Learn more</PrimaryCtaButton>
          <SecondaryCtaButton href="CV.pdf">View my CV</SecondaryCtaButton>
        </Cta>
      </Main>
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
    </Container>
  );
}

const Main = styled.div`
  padding-left: 4rem;
  transform: translateY(20vh);
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

const CtaButton = styled.a`
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

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    var(--black) 60%,
    hsl(var(--theme-hue), 86%, 6%)
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
