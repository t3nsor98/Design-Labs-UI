import React, { useState, useEffect } from "react";

export interface DclockProps {
  /**
   * Background color of the clock
   * @default '#111111'
   */
  backgroundColor?: string;

  /**
   * Text color of the clock
   * @default '#39FF14'
   */
  textColor?: string;

  /**
   * Digital font family to use
   * Options: 'orbitron', 'digital', 'segment', 'alarm'
   * @default 'orbitron'
   */
  fontFamily?: "orbitron" | "digital" | "segment" | "alarm";

  /**
   * Whether to show seconds
   * @default true
   */
  showSeconds?: boolean;

  /**
   * Whether to use 24-hour format
   * @default false
   */
  twentyFourHours?: boolean;

  /**
   * Additional CSS class names
   * @default ''
   */
  className?: string;
}

const Dclock: React.FC<DclockProps> = ({
  backgroundColor = "#111111",
  textColor = "#39FF14",
  fontFamily = "orbitron",
  showSeconds = true,
  twentyFourHours = false,
  className = "",
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    let ampm = "";

    if (!twentyFourHours) {
      ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
    }

    const formattedHours = hours.toString().padStart(2, "0");

    return {
      hours: formattedHours,
      minutes,
      seconds,
      ampm,
    };
  };

  const { hours, minutes, seconds, ampm } = formatTime();

  const getFontFamily = () => {
    switch (fontFamily) {
      case "digital":
        return "'DS-Digital', monospace";
      case "segment":
        return "'DSEG7 Classic', monospace";
      case "alarm":
        return "'Alarm Clock', monospace";
      case "orbitron":
      default:
        return "'Orbitron', sans-serif";
    }
  };

  return (
    <div
      className={`dlui-dclock ${className}`}
      style={{
        backgroundColor,
        color: textColor,
        fontFamily: getFontFamily(),
        padding: "0.5em 1em",
        borderRadius: "8px",
        boxShadow: `0 0 15px ${textColor}40, inset 0 0 10px ${textColor}30`,
        display: "inline-block",
        fontSize: "3rem",
        letterSpacing: "0.05em",
        textShadow: `0 0 5px ${textColor}`,
        border: `2px solid ${textColor}50`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="dlui-dclock-time">
        {hours}
        <span className="dlui-dclock-colon">:</span>
        {minutes}
        {showSeconds && (
          <>
            <span className="dlui-dclock-colon">:</span>
            {seconds}
          </>
        )}
        {!twentyFourHours && <span className="dlui-dclock-ampm">{ampm}</span>}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
        
        @font-face {
          font-family: 'DS-Digital';
          src: url('https://db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2') format('woff2');
        }
        
        @font-face {
          font-family: 'DSEG7 Classic';
          src: url('https://cdn.jsdelivr.net/npm/dseg@0.46.0/fonts/DSEG7-Classic/DSEG7Classic-Regular.woff2') format('woff2');
        }
        
        @font-face {
          font-family: 'Alarm Clock';
          src: url('https://db.onlinewebfonts.com/t/c7f17cb8ea0ff6843a0d273c3e72ff3d.woff2') format('woff2');
        }
        
        .dlui-dclock-colon {
          animation: blink 1s step-start infinite;
          opacity: 1;
          margin: 0 0.1em;
        }
        
        .dlui-dclock-ampm {
          font-size: 0.4em;
          margin-left: 0.5em;
          vertical-align: super;
        }
        
        @keyframes blink {
          50% { opacity: 0.5; }
        }
        
        .dlui-dclock::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            transparent 0%,
            transparent 40%,
            ${textColor}10 40%,
            ${textColor}20 50%,
            ${textColor}10 60%,
            transparent 60%,
            transparent 100%
          );
          transform: rotate(-45deg);
          animation: scan 4s linear infinite;
        }
        
        @keyframes scan {
          0% { transform: translateY(-50%) rotate(-45deg); }
          100% { transform: translateY(50%) rotate(-45deg); }
        }
      `}</style>
    </div>
  );
};

export default Dclock;
