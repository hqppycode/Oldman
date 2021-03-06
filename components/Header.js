import styled from "@emotion/styled";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link href="/">
            <a>
              <img src="/images/tree.png" alt="logo" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <h1>
                Old Man |<span> New World</span>
              </h1>
            </a>
          </Link>
        </Logo>
        <Links>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/articles">
            <a>Survival</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </Links>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 70px;
  max-width: 1192px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    height: 60px;
  }
  a {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    width: 70px;
    @media (max-width: 480px) {
      width: 50px;
    }
  }
  h1 {
    white-space: nowrap;
    margin-right: 2rem;
    font-size: 2.3rem;
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
    span {
      color: #888;
      font-weight: 400;
      font-size: 1.9rem;
      @media (max-width: 480px) {
        font-size: 1.2rem;
      }
    }
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > * {
    transition: color 0.1s ease;

    margin-right: 2rem;
  }
  > *:hover {
    color: #228b22;
  }
`;
