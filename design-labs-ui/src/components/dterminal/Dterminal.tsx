import React, { useState, useEffect } from "react";

export interface DterminalProps {
  /**
   * Color of the terminal text
   * @default '#00FF00'
   */
  textColor?: string;

  /**
   * Background color of the terminal
   * @default '#000000'
   */
  backgroundColor?: string;

  /**
   * Text displayed at the top of the terminal
   * @default 'user@mac:~$'
   */
  topText?: string;

  /**
   * Text to be animated in the terminal
   * @default 'echo Hello, World!'
   */
  terminalText?: string;
}

const Dterminal: React.FC<DterminalProps> = ({
  textColor = "#00FF00",
  backgroundColor = "#000000",
  topText = "user@mac:~$",
  terminalText = "echo Hello, World!",
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + terminalText.charAt(index));
      index++;

      if (index > terminalText.length) {
        clearInterval(interval);
      }
    }, 100); // typing speed

    return () => clearInterval(interval);
  }, [terminalText]);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontFamily: "monospace",
        padding: "1rem",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "1rem auto",
        boxShadow: `0 0 10px rgba(0, 255, 0, 0.5)`,
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
        {topText}
      </div>
      <div>
        {displayedText}
        <span className="blinking-cursor">|</span>
      </div>
      <style>{`
        .blinking-cursor {
          animation: blink 1s step-start 0s infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Dterminal;
