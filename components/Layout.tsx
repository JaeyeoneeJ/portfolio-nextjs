import styled from "styled-components";
import Header from "./Header";

const Background = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  padding: 60px 40px;
  transition: padding 0.5s ease-in-out;
  @media screen and (max-width: 880px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-height: 660px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;
const Wrapper = styled.div`
  background-color: white;
  background-image: url("https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80");
  background-repeat: no-repeat;
  background-position: center 30%;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px 60px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: background 5s ease-in-out, padding 0.5s ease-in-out;
  :hover {
    background-position: center 50%;
  }
  @media screen and (max-width: 880px) {
    padding: 20px;
  }
`;
const Container = styled.div`
  z-index: 3;
  margin-top: 20px;
  height: 100%;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Background>
      <Wrapper>
        <Header />
        <Container>{children}</Container>
      </Wrapper>
    </Background>
  );
}
