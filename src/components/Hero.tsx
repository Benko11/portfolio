import styled from "styled-components";
import { AmbientCanvas } from "../AmbientCanvas";
import { motion } from "motion/react";

export default function Hero() {
  const MotionTagline = motion(Tagline);
  const MotionPrimaryCtaButton = motion(PrimaryCtaButton);
  const MotionSecondaryCtaButton = motion(SecondaryCtaButton);

  return (
    <>
      <Container>
        <Main>
          <HeroMain>
            <motion.div
              className="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.25 }}
            >
              Hello.
            </motion.div>
            <motion.div
              className="welcome-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              I'm Benjamin
            </motion.div>
          </HeroMain>
          <MotionTagline
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Web Developer, Software Developer
          </MotionTagline>
          <Cta>
            <MotionPrimaryCtaButton
              href="#portfolio"
              initial={{ scale: 0 }} // Start at normal size
              animate={{ scale: 1 }} // Bounce effect
              transition={{
                ease: "linear",
                duration: 0.5,
                delay: 2.5,
              }}
            >
              Learn more
            </MotionPrimaryCtaButton>
            <MotionSecondaryCtaButton
              href="CV.pdf"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: "linear",
                duration: 0.5,
                delay: 2.75,
              }}
            >
              View my CV
            </MotionSecondaryCtaButton>
          </Cta>
        </Main>
        <RightSide>
          <AmbientCanvas />
        </RightSide>
      </Container>
      <Transition>
        <TransitionOne></TransitionOne>
      </Transition>
    </>
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
  overflow: visible;
`;

const Tagline = styled.div`
  font-weight: 200;
  font-size: 1.5rem;
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

  &:hover,
  &:focus,
  &:active {
    background-color: hsl(from var(--white) h s calc(l - 15));
    color: var(--black);
  }
`;

const SecondaryCtaButton = styled(CtaButton)`
  border: 1px solid var(--white);
  color: var(--white);

  &:hover,
  &:focus,
  &:active {
    background-color: hsl(from var(--black) h s calc(l + 10));
    color: var(--white);
  }
`;

const Container = styled.div`
  height: 100vh;
  background: var(--black);
  display: flex;
`;

const RightSide = styled.div`
  margin-left: auto;
`;

const Transition = styled.div`
  display: flex;
  height: 200px;
`;

const TransitionOne = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom, var(--black), var(--theme));
`;
