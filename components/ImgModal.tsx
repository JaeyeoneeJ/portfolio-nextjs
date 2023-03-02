import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { imgName, imgState } from "../recoil/atoms";

// 모달 배경화면
const Overlay = styled.div`
  position: relative;
  z-index: 6;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
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
  overflow: hidden;
  margin: 0 auto;
`;
const ModalBox = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Img = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: block;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`;

const Text = styled.p<{ fontSize?: string }>`
  color: white;
  font-weight: ${(props) => (props.fontSize ? 400 : 300)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
`;

const ImgModal = () => {
  const setIsClickedImg = useSetRecoilState(imgState);
  const [isImgName, setIsImgName] = useRecoilState(imgName);
  const initial = {
    src: "",
    title: "",
    explain: "",
  };

  // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
  const modalRef = useRef<HTMLDivElement>(null);
  const onClose = () => {
    setIsClickedImg(false);
    setIsImgName(initial);
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
    <Overlay>
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
          <Img src={`img/${isImgName.src}.jpg`} alt="modal-img" />
          <Text fontSize="24px">{isImgName.title}</Text>
          <Text>{isImgName.explain}</Text>
        </ModalBox>
      </Ctn>
    </Overlay>
  );
};

export default ImgModal;
