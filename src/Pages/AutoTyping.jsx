import React, { useState, useEffect } from "react";

const AutoTyping = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, speed, text]);

  return <div>{displayText}</div>;
};

export default AutoTyping;
