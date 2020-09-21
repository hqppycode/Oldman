import styled from "@emotion/styled";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container>
      <span>Old Man |</span> <span className="light">New World</span> 🔥
      <span className="dark"> {year}</span>
    </Container>
  );
}

const Container = styled.footer`
  flex-shrink: 0;
  text-align: center;
  color: #333;
  padding: 0.5rem;
  span {
    font-weight: 700;
    color: #333;
  }
  .light {
    color: #888;
    font-weight: 400;
    font-size: 1rem;
  }
  .dark {
    font-weight: 400;
    font-size: 1rem;
  }
`;
