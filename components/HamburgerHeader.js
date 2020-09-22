import styled from "@emotion/styled";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", function clicky() {
      if (isOpen) {
        const timer = setTimeout(() => {
          isOpen ? setOpen(false) : null;
          document.removeEventListener("click", clicky);
        }, 300);
        return () => clearTimeout(timer);
      }
    });
  }, [isOpen]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

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
        <Right>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            direction="right"
          />
          <MenuSpacer />
        </Right>
        {isOpen && (
          <Menu>
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
          </Menu>
        )}
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

const Right = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Menu = styled.div`
  height: calc(100vh - 75px);
  width: 100%;
  background-color: white;
  position: absolute;
  top: 75px;
  z-index: 5000;

  @media (max-width: 500px) {
    top: 60px;
  }
  /* opacity: 0;
  transition: opacity 0.5s;
  &.open {
    opacity: 1;
  } */
`;

const MenuSpacer = styled.div`
  height: 40px;
  width: 20px;
`;

const Links = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: calc(100vh - 125px);
  > * {
    transition: color 0.1s ease;

    margin-right: 2rem;
  }
  > *:hover {
    color: #228b22;
  }
`;
