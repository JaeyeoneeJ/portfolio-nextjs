import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { imgName, imgState } from "../recoil/atoms";
import ProgressiveImg from "./ProgressiveImg";
import { AiFillTrophy, AiFillBulb } from "react-icons/ai";

// 모달 배경화면
const Overlay = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

// 모달 닫기 버튼
const CloseBtn = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  top: 12px;
  right: 12px;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transform: rotate(-90deg);
    svg {
      color: ${(props) => props.theme.pointColor};
    }
  }
`;

// 모달 위치 고정
const Ctn = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  min-width: 300px;
  width: 100%;
  margin: 0 auto;
`;
const ModalBox = styled.div`
  overflow: hidden;
  height: 80vh;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const Scroll = styled.div`
  height: calc(100%);
  overflow-y: auto;
`;
const GradientBox = styled.div`
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 80%,
      rgba(255, 255, 255, 1) 100%
    ); /* W3C */
  }
`;
const Contents = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  top: -90px;
  margin-bottom: -60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Duration = styled.p<{ category: string }>`
  border-radius: 5px;
  background-color: ${(props) =>
    props.category === "award" ? "#ffb004" : "#efe702"};
  padding: 2px 6px;
  color: white;
`;
const Text = styled.p<{ fontSize?: string }>`
  width: 100%;
  font-weight: 300;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  line-height: 1.3;
`;

const ImgModal = () => {
  const [isExit, setIsExit] = useState(false);
  const setIsClickedImg = useSetRecoilState(imgState);
  const [isImgName, setIsImgName] = useRecoilState(imgName);
  const initial = {
    category: "",
    src: "",
    title: "",
    duration: "",
    explain: "",
  };

  // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
  const modalRef = useRef<HTMLDivElement>(null);
  const onClose = () => {
    setIsExit(true);
    setTimeout(() => {
      setIsClickedImg(false);
      setIsImgName(initial);
    }, 500);
  };

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    <AnimatePresence>
      {!isExit && (
        <Overlay exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <CloseBtn onClick={onClose}>
            <svg
              strokeWidth="3"
              color="white"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeWidth="3"
                d="M3,3 L21,21 M3,21 L21,3"
              ></path>
            </svg>
          </CloseBtn>
          <Ctn>
            <ModalBox ref={modalRef}>
              <Scroll>
                <GradientBox>
                  <ProgressiveImg
                    maxWidth="960px"
                    src={`img/timeline/${isImgName.src}.jpg`}
                    placeholderSrc={`img/timeline/tiny_${isImgName.src}.jpg`}
                  />
                </GradientBox>
                <Contents>
                  <Header>
                    <Title>{isImgName.title}</Title>
                    <FlexBox>
                      {isImgName.category === "award" ? (
                        <AiFillTrophy size={18} color="#ffb004" />
                      ) : (
                        <AiFillBulb size={18} color="#efe702" />
                      )}

                      <Duration category={isImgName.category}>
                        {isImgName.duration}
                      </Duration>
                    </FlexBox>
                  </Header>
                  <Text fontSize="18px">{isImgName.explain}</Text>
                </Contents>
              </Scroll>
            </ModalBox>
          </Ctn>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default ImgModal;
