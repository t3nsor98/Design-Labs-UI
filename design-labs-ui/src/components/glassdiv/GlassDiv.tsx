import React from "react";

export interface GlassDivProps {
  /**
   * Background color with opacity
   * @default 'rgba(144, 19, 254, 0.3)'
   */
  backgroundColor?: string;

  /**
   * Box shadow effect
   * @default '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
   */
  boxShadow?: string;

  /**
   * Blur amount for the backdrop filter
   * @default '2px'
   */
  blurAmount?: string;

  /**
   * Border radius of the div
   * @default '10px'
   */
  borderRadius?: string;

  /**
   * Border width
   * @default '1px'
   */
  borderWidth?: string;

  /**
   * Border color with opacity
   * @default 'rgba(255, 255, 255, 0.18)'
   */
  borderColor?: string;

  /**
   * Padding inside the div
   * @default '20px'
   */
  padding?: string;

  /**
   * Width of the div
   * @default 'auto'
   */
  width?: string;

  /**
   * Height of the div
   * @default 'auto'
   */
  height?: string;

  /**
   * Additional CSS class names
   * @default ''
   */
  className?: string;

  /**
   * Child elements to render inside the div
   */
  children?: React.ReactNode;
}

const GlassDiv: React.FC<GlassDivProps> = ({
  backgroundColor = "rgba(144, 19, 254, 0.3)",
  boxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  blurAmount = "2px",
  borderRadius = "10px",
  borderWidth = "1px",
  borderColor = "rgba(255, 255, 255, 0.18)",
  padding = "20px",
  width = "auto",
  height = "auto",
  className = "",
  children,
}) => {
  const styles: React.CSSProperties = {
    background: backgroundColor,
    boxShadow: boxShadow,
    backdropFilter: `blur(${blurAmount})`,
    WebkitBackdropFilter: `blur(${blurAmount})`,
    borderRadius: borderRadius,
    border: `${borderWidth} solid ${borderColor}`,
    padding: padding,
    width: width,
    height: height,
  };

  return (
    <div className={`dlui-glassdiv ${className}`} style={styles}>
      {children}
    </div>
  );
};

export default GlassDiv;
