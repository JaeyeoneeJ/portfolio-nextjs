import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { AiFillMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const BG = styled(motion.div)`
  position: fixed;
  overflow: hidden;
  right: 0;
  top: 0;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
`;

const Wrapper = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  right: 0;
  top: 0;
  width: 110px;
  height: 100%;
  background-color: rgba(38, 93, 16, 0.9);
  box-shadow: -1px 0 10px rgba(0, 0, 0, 0.5);
`;

const MenuItem = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
`;
const Square = styled(motion.span)`
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  left: 0;
  width: 3px;
  height: 100%;
`;

const MenuArea = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
`;

const FlexBox = styled.div`
  position: fixed;
  width: 110px;
  bottom: 10px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LinkItem = styled.a<{ hoverColor: string }>`
  cursor: pointer;
  svg {
    transition: all 0.3s;
  }
  &:first-child:hover svg {
    transform: rotateZ(-15deg) translateY(-5px);
  }
  &:hover svg {
    fill: ${(props) => props.hoverColor};
    scale: 1.1;
    transform: translateY(-5px);
  }
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

const menuVariants: Variants = {
  hover: {
    color: "rgba(255, 255, 255, 1)",
  },
};

const HamburgerMenu = ({
  setMenuState,
}: {
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const emailAddress = "5ikve@naver.com";
  const [isExit, setIsExit] = useState(false);

  const router = useRouter();

  // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
  const menuRef = useRef<HTMLDivElement>(null);
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
    <AnimatePresence>
      {!isExit && (
        <BG animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Wrapper
            ref={menuRef}
            variants={wrapperVariants}
            initial="start"
            animate="animate"
            exit="exit"
          >
            <MenuArea>
              <MenuItem
                onClick={() => setTimeout(() => onClose(), 300)}
                variants={menuVariants}
                whileHover="hover"
              >
                {router.asPath === "/" && <Square layoutId="square" />}
                <Link href="/">Home</Link>
              </MenuItem>
              <MenuItem
                onClick={() => setTimeout(() => onClose(), 300)}
                variants={menuVariants}
                whileHover="hover"
              >
                {router.asPath === "/project" && <Square layoutId="square" />}
                <Link href="/project">Project</Link>
              </MenuItem>
              <MenuItem
                onClick={() => setTimeout(() => onClose(), 300)}
                variants={menuVariants}
                whileHover="hover"
              >
                {router.asPath === "/timeline" && <Square layoutId="square" />}
                <Link href="/timeline">Timeline</Link>
              </MenuItem>
              <MenuItem
                onClick={() => setTimeout(() => onClose(), 300)}
                variants={menuVariants}
                whileHover="hover"
              >
                {router.asPath === "/about_me" && <Square layoutId="square" />}
                <Link href="/about_me">About me</Link>
              </MenuItem>
            </MenuArea>
            <FlexBox>
              <CopyToClipboard
                text={emailAddress}
                onCopy={() => {
                  alert(`메일 주소 ${emailAddress}이 복사되었습니다.`);
                }}
              >
                <LinkItem hoverColor="#0bb9f8">
                  <AiFillMail size={30} color="white" />
                </LinkItem>
              </CopyToClipboard>
              <LinkItem hoverColor="black" href="https://github.com/jaeyeoneej">
                <FaGithub size={30} color="white" />
              </LinkItem>
            </FlexBox>
          </Wrapper>
        </BG>
      )}
    </AnimatePresence>
  );
};

export default HamburgerMenu;
