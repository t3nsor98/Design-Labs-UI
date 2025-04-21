import React from 'react';
import { StyleDivProps } from './StyleDiv.types';
import './StyleDiv.css';

const StyleDiv: React.FC<StyleDivProps> = ({
  backgroundColor = '#ffffff',
  padding = '16px',
  margin = '0',
  borderRadius = '4px',
  boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)',
  width = 'auto',
  height = 'auto',
  children,
  className = '',
}) => {
  const styles = {
    backgroundColor,
    padding,
    margin,
    borderRadius,
    boxShadow,
    width,
    height,
  };

  return (
    <div className={`dlui-stylediv ${className}`} style={styles}>
      {children}
    </div>
  );
};

export default StyleDiv;
