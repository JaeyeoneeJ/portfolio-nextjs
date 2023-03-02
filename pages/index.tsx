import Seo from "@/components/Seo";
import TypingText from "@/components/TypingText";
import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 260px);
  font-size: 30px;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
export default function Home() {
  const textArr = [
    "안녕하세요?",
    "프론트엔드 개발자",
    "정재연 입니다.",
    "Hello, everyone.",
    "My name is Jaeyeon Jeong.",
    "Grad to meet you. :)",
  ];
  return (
    <>
      <Seo />
      <Wrapper>
        <TypingText text={textArr} fontSize="40px" />
      </Wrapper>
    </>
  );
}
