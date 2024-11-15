import styled from "styled-components";

interface Props {
  children: string;
}

export default function Header({ children }: Props) {
  return (
    <Container>
      <Cut>{children}</Cut>
    </Container>
  );
}

const Container = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Cut = styled.span`
  @keyframes animation-pan {
    from {
      background-position: 0% center;
    }

    to {
      background-position: -200% center;
    }
  }

  @keyframes glow-pan {
    from {
      --shadow-size: 0;
    }

    to {
      --shadow-size: 50;
    }
  }

  background-clip: text;
  background-size: 200%;
  animation: animation-pan 5s linear infinite;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to right,
    hsl(190, 60%, 60%),
    hsl(210, 60%, 80%),
    hsl(190, 60%, 60%)
  );
`;
