import styled from "styled-components";
import Warning from "../assets/Warning";
import Checkbox from "../assets/Checkbox";
import TechStack from "../assets/TechStack";
import Code from "../assets/Code";
import Globe from "../assets/Globe";
import Book from "../assets/Book";
import { useState } from "react";
import Modal from "../Modal";

export enum ProjectMarker {
  PROJECT_FINISHED = "Project finished",
  UNDER_CONSTRUCTION = "Under construction",
  COMPLETE_REFACTOR = "Undergoing complete refactorization",
}

interface Props {
  title: string;
  description: string;
  marker: ProjectMarker;
  url: string;
  techStack: string[];
  demo?: string;
  caseStudy: boolean;
}

export default function Card({
  title,
  description,
  marker,
  url,
  techStack,
  demo,
  caseStudy,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function defineMarkers() {
    let icon: JSX.Element;
    switch (marker) {
      case ProjectMarker.UNDER_CONSTRUCTION:
        icon = <Warning />;
        break;
      case ProjectMarker.PROJECT_FINISHED:
        icon = <Checkbox />;
        break;
      case ProjectMarker.COMPLETE_REFACTOR:
        icon = <Warning />;
        break;
      default:
        icon = <Warning />;
    }

    return (
      <div>
        {icon}
        <div>{marker}</div>
      </div>
    );
  }

  function displayTechStack() {
    if (!techStack || techStack.length < 1) return;

    return (
      <div>
        {<TechStack />}
        <div>{techStack.join(", ")}</div>
      </div>
    );
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Markers>
        {defineMarkers()}
        {displayTechStack()}
      </Markers>

      <ButtonGrid>
        <CodeLink href={url} target="_blank">
          <Code />
          <div>View Code</div>
        </CodeLink>

        {demo ? (
          <DemoLink href={demo} target="_blank">
            <Globe />
            <div>Live Demo</div>
          </DemoLink>
        ) : (
          <span></span>
        )}
        {caseStudy && (
          <DemoLink onClick={() => setIsModalOpen(true)}>
            <Book />
            <div>Read Case Study</div>
          </DemoLink>
        )}
      </ButtonGrid>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.5rem 1rem;
  background: hsl(from var(--theme) h 30 15);
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  height: auto;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 0.25rem;
`;

const Markers = styled.div`
  margin-top: auto;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    *:nth-child(2) {
      transition: all 0.25s ease;

      opacity: 0.5;
    }

    &:hover *:nth-child(2) {
      opacity: 0.75;
    }
  }
`;

const Description = styled.div`
  margin-bottom: 1rem;
  opacity: 0.95;
  font-size: 0.95rem;
`;

export const Button = styled.a`
  all: unset;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.5rem 0;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  transition: all 0.25s ease;

  &:hover,
  &:focus {
    color: inherit;
    transform: translateY(-2px);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const CodeLink = styled(Button)`
  background-color: rgba(0, 0, 0, 0.3);

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const DemoLink = styled(Button)`
  background-color: rgba(255, 255, 255, 0.5);
  color: var(--black);

  &:hover,
  &:focus {
    color: var(--black);
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const ButtonGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
