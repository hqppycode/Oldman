import styled from "@emotion/styled";
import Header from "./Header";
import Hamburger from "./HamburgerHeader";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [width, setWidth] = useState();

  useEffect(() => setWidth(window.innerWidth), []);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <LayoutContainer>
      {width > 720 ? <Header /> : <Hamburger />}
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LayoutWrapper = styled.div`
  flex: 1 0 auto;
  width: 94%;
  max-width: 700px;
  margin: 2rem auto 0 auto;
`;
