import styled from "styled-components";
import Header from "./Header";

import skills from "../data/skills.json";

export default function Skills() {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <Header>Skills</Header>
      <Container>
        {skills.map((skill) => (
          <Skill key={skill.technology}>
            <img src={`/images/${skill.image}`} alt={skill.technology} />
            <div>{skill.technology}</div>
          </Skill>
        ))}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  --column-count: 5;
  grid-template-columns: repeat(var(--column-count), 1fr);
  gap: 1rem;

  @media (max-width: 65rem) {
    --column-count: 4;
  }

  @media (max-width: 45rem) {
    --column-count: 3;
  }
`;

const Skill = styled.div`
  aspect-ratio: 1 / 1;
  background: hsl(from var(--theme) h 30 15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.75rem;

  &:hover img {
    filter: saturate(100%);
  }

  img {
    transition: all 0.5s ease;
    width: 50%;
    filter: saturate(0%);
  }

  div {
    font-size: 1.25rem;
  }
`;
