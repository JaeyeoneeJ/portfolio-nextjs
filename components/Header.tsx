import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Position = styled.div`
  top: 80px;
  left: 0;
  right: 0;
  max-width: 1480px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.white.lighter};
`;

const FlexBox = styled.div<{ gap: string }>`
  display: flex;
  gap: ${(props) => props.gap};
`;

const MenuArea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const MenuItem = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: 300;
  position: relative;
  top: -5px;
  @media screen and (max-width: 1180px) {
    font-size: 14px;
  }
`;
const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #265d10;
  border-radius: 5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const TitleArea = styled.div`
  /* min-width: 250px; */
  color: #265d10;
  display: flex;
  flex-direction: column;
  align-items: center;
  span:last-child {
    font-size: 30px;
    letter-spacing: 10px;
  }
  @media screen and (max-width: 1180px) {
    font-size: 14px;
    span:last-child {
      font-size: 20px;
      letter-spacing: 6px;
    }
  }
`;
const LinkArea = styled.a<{ hoverColor: string }>`
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

const Header = () => {
  const router = useRouter();
  const emailAddress = "5ikve@naver.com";
  return (
    <Position>
      <Wrapper>
        <FlexBox gap="80px">
          <Link href="/">
            <TitleArea>
              <span>jaeyeonee's</span>
              <span>PORTFOLIO</span>
            </TitleArea>
          </Link>
          <MenuArea>
            <MenuItem>
              <Link href="/">
                Home
                {router.asPath === "/" && <Circle layoutId="circle" />}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/project">
                Project
                {router.asPath === "/project" && <Circle layoutId="circle" />}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/timeline">
                Timeline
                {router.asPath === "/timeline" && <Circle layoutId="circle" />}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about_me">
                About me
                {router.asPath === "/about_me" && <Circle layoutId="circle" />}
              </Link>
            </MenuItem>
          </MenuArea>
        </FlexBox>
        <FlexBox gap="10px">
          <CopyToClipboard
            text={emailAddress}
            onCopy={() => {
              alert(`메일 주소 ${emailAddress}이 복사되었습니다.`);
            }}
          >
            <LinkArea hoverColor="#0bb9f8">
              <AiFillMail size={30} color="white" />
            </LinkArea>
          </CopyToClipboard>
          <LinkArea hoverColor="black" href="https://github.com/jaeyeoneej">
            <FaGithub size={30} color="white" />
          </LinkArea>
        </FlexBox>
      </Wrapper>
    </Position>
  );
};

export default React.memo(Header);
