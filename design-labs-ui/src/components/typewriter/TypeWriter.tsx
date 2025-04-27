import React, { useState, useEffect } from "react";

export interface TypeWriterProps {
  /**
   * Color of the text and glow effect
   * @default '#ffffff'
   */
  textColor?: string;

  /**
   * Background color of the container
   * @default 'rgba(0, 0, 0, 0.5)'
   */
  backgroundColor?: string;

  /**
   * The constant text that appears before the changing words
   * @example "I am a"
   */
  constantWord: string;

  /**
   * Array of words that will be typed and deleted in sequence
   * @example ["frontend developer", "full stack developer", "UI designer"]
   */
  variableWords: string[];
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  textColor = "#ffffff",
  backgroundColor = "rgba(0, 0, 0, 0.5)",
  constantWord,
  variableWords,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 150;
    const currentWord = variableWords[wordIndex];

    const typeNextChar = () => {
      if (!isDeleting && charIndex <= currentWord.length) {
        setDisplayedText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex >= 0) {
        setDisplayedText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }

      if (charIndex === currentWord.length + 1 && !isDeleting) {
        // Pause at the end of typing a word
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      } else if (charIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % variableWords.length);
      }

      setTimeout(typeNextChar, typingSpeed);
    };

    const timeout = setTimeout(typeNextChar, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, variableWords, wordIndex]);

  return (
    <div
      className="dlui-typewriter"
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        padding: "1rem 2rem",
        borderRadius: "12px",
        maxWidth: "fit-content",
        margin: "1rem auto",
        fontFamily: "monospace",
        fontSize: "1.5rem",
        boxShadow: `0 0 15px ${textColor}`,
        border: `2px solid ${textColor}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span>{constantWord} </span>
      <span>{displayedText}</span>
      <span
        className="dlui-typewriter-cursor"
        style={{
          borderRight: `2px solid ${textColor}`,
          marginLeft: "5px",
          height: "1.5rem",
          display: "inline-block",
          verticalAlign: "bottom",
        }}
      />
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .dlui-typewriter-cursor {
          animation: blink 1s step-start 0s infinite;
        }
        .dlui-typewriter::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, ${textColor}40, transparent);
          animation: scan 3s linear infinite;
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default TypeWriter;
