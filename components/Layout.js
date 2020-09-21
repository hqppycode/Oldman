import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header>some stuff</Header>
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer>some more stuff</Footer>
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
