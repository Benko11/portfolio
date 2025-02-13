import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <div>(c) 2024-2025, Benjamin Dubovecky/Bergstrom</div>
      <a href="https://github.com/benko11/portfolio" target="_blank">
        View source code of this site
      </a>{" "}
    </Container>
  );
}

const Container = styled.div`
  background-image: linear-gradient(
    to bottom,
    hsl(from var(--theme) h 86% 6%),
    var(--black)
  );
  height: 10rem;
  color: hsl(from var(--theme) h 60% 70%);
  font-family: monospace;
  padding: 12.5rem 0 5rem 5rem;

  a {
    color: inherit;
  }

  @media (max-width: 60rem) {
    text-align: center;
    padding: 0;
    padding-top: 7rem;
  }
`;
