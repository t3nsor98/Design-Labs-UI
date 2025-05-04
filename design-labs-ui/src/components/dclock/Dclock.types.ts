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
  fontFamily?: 'orbitron' | 'digital' | 'segment' | 'alarm';
  
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
