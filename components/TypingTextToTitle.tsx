import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Text = styled.p<{ fontSize: string; color: string }>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: 400;
  &::after {
    content: "|";
    font-weight: 400;
    animation: blink 1s step-end infinite;
  }
  @keyframes blink {
    0% {
      opacity: 1;
    }
    49% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

interface IProp {
  text?: string;
  speed?: number;
  fontSize?: string;
  color?: string;
}

const TypingTextToTitle = ({
  text = "",
  speed = 120,
  fontSize = "1em",
  color = "black",
}: IProp) => {
  const [typingText, setTypingText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingText((typingText) => {
        let updated = typingText;
        updated = typingText + text[count];
        return updated;
      });
      setCount(count + 1);
    }, speed);
    if (count === text.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count]);

  return (
    <Text fontSize={fontSize} color={color}>
      {typingText}
    </Text>
  );
};

export default React.memo(TypingTextToTitle);
