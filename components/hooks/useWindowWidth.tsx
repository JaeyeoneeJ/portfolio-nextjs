import { useEffect, useState } from "react";

function getWindowWidth() {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    return width;
  } else {
    const width = 0;
    return width;
  }
}

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

export default useWindowWidth;
