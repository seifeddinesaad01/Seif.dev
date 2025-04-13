"use client"
import React, { useState, useEffect } from 'react';

const AnimatedText = ({ texts, typingSpeed = 150, pause = 2000 }: any) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  // Compute the longest text so that the container always has enough space.
  const maxText = texts.reduce((a: string, b: string) => (a.length > b.length ? a : b), "");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (charIndex < texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      // Pause after the current text is complete before starting the next.
      timeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pause);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, texts, typingSpeed, pause]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to always reserve the space for the longest text */}
      <span className="invisible">{maxText}</span>
      {/* Centered container for the animated text */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          {displayedText}
        </span>
      </span>
    </span>
  );
};

export default AnimatedText;
