import React, { useState, useEffect } from "react";

const ReadingProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return (
    <div
      style={{ width: `${completion}%` }}
      className="fixed top-0 left-0 h-1 bg-[#8b3a2b] z-50 transition-all duration-150"
    />
  );
};

export default ReadingProgress;