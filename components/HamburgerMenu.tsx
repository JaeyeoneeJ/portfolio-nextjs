import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const BG = styled.div`
  position: fixed;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

const Wrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  width: 200px;
  height: 100%;
  padding: 10px;
  background-color: rgba(38, 93, 16, 0.9);
  box-shadow: -1px 0 10px rgba(0, 0, 0, 0.5);
`;

const wrapperVariants: Variants = {
  start: {
    x: 200,
  },
  animate: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    x: 200,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const HamburgerMenu = ({
  setMenuState,
}: {
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isExit, setIsExit] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
  const onClose = () => {
    setIsExit(true);
    setTimeout(() => {
      setMenuState(false);
    }, 500);
  };

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
    <BG>
      <AnimatePresence>
        {!isExit && (
          <Wrapper
            ref={menuRef}
            variants={wrapperVariants}
            initial="start"
            animate="animate"
            exit="exit"
          >
            hamburger Menu
          </Wrapper>
        )}
      </AnimatePresence>
    </BG>
  );
};

export default HamburgerMenu;
