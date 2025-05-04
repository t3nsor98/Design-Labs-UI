import React, { useState, useEffect } from "react";
import { DclockProps } from "./Dclock.types";
import "./Dclock.css";

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
    </div>
  );
};

export default Dclock;
