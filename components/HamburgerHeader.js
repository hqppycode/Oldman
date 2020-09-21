import styled from "@emotion/styled";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

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
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          direction="right"
        />
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

const Menu = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rebeccapurple;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.5s;
  &.open {
    opacity: 1;
  }
`;

// const Links = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   > * {
//     transition: color 0.1s ease;

//     margin-right: 2rem;
//   }
//   > *:hover {
//     color: #228b22;
//   }
// `;

{
  /* <Links>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/articles">
            <a>Survival</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </Links> */
}
