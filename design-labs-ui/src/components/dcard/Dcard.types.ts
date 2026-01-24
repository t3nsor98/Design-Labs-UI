export interface Card {
    id: string | number;
    frontImage: string;
    frontTitle?: string;
    backTitle?: string;
    backText: React.ReactNode;
    altText?: string;
  }
  
  export interface DcardProps {
    /**
     * Array of card items to display
     */
    cards: Card[];
    
    /**
     * Optional class name for custom styling
     */
    className?: string;
    
    /**
     * Optional animation duration in milliseconds
     * @default 300
     */
    animationDuration?: number;
    
    /**
     * Optional card width in pixels
     * @default 250
     */
    cardWidth?: number;
    
    /**
     * Optional card height in pixels
     * @default 350
     */
    cardHeight?: number;
    
    /**
     * Optional gap between cards in pixels
     * @default 20
     */
    gap?: number;
  }