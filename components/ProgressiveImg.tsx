import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Img = styled.img<{ maxWidth: string | undefined }>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "auto")};
  width: 100%;
  object-fit: cover;

  display: block;
  &.image-loading {
    filter: blur(5px);
    clip-path: inset(0);
  }
  &.image-loaded {
    filter: blur(0);
    transition: filter 0.5s linear;
  }
`;

const Loading = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IProgressiveImg {
  placeholderSrc: string;
  src: string;
  maxWidth?: string;
}

const ProgressiveImg = ({
  placeholderSrc,
  src,
  maxWidth,
  ...props
}: IProgressiveImg) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  return (
    <Wrapper>
      <Img
        maxWidth={maxWidth}
        {...{
          src: imgSrc,
          ...props,
        }}
        className={`image-${customClass}`}
      />
      {imgSrc === placeholderSrc && (
        <Loading>
          <FadeLoader
            color="#4cba20"
            height={15}
            width={5}
            radius={2}
            margin={2}
          />
        </Loading>
      )}
    </Wrapper>
  );
};

export default ProgressiveImg;
