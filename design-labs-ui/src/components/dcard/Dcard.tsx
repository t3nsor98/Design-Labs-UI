import React, { useState } from "react";
import { DcardProps } from "./Dcard.types";
import styles from "./Dcard.module.css";

/**
 * Dcard component displays a responsive grid of flip cards with an image on front and text on back
 */
export const Dcard: React.FC<DcardProps> = ({
  cards,
  className = "",
  animationDuration = 300,
  cardWidth = 250,
  cardHeight = 350,
  gap = 20,
}) => {
  const [flippedCards, setFlippedCards] = useState<Record<string | number, boolean>>({});

  if (!cards || cards.length === 0) {
    return null;
  }

  const toggleFlip = (cardId: string | number) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(min(${cardWidth}px, 100%), 1fr))`,
    gap: `${gap}px`,
    width: "100%",
  };

  return (
    <div
      className={`${styles.dcardContainer} ${className}`}
      style={containerStyle}
    >
      {cards.map((card) => {
        const isFlipped = flippedCards[card.id] || false;
        
        return (
          <div
            key={card.id}
            className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
            onClick={() => toggleFlip(card.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleFlip(card.id);
              }
            }}
            aria-label={`Flip card ${card.altText || card.id}`}
          >
            <div 
              className={styles.cardInner} 
              style={{ transition: `transform ${animationDuration}ms` }}
            >
              <div className={styles.cardFront}>
                <img
                  src={card.frontImage}
                  alt={card.altText || `Card ${card.id}`}
                  className={styles.cardImage}
                  loading="lazy"
                />
                {card.frontTitle && (
                  <div className={styles.cardTitle}>{card.frontTitle}</div>
                )}
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardContent}>
                  {card.backTitle && <h3 className={styles.backTitle}>{card.backTitle}</h3>}
                  <p>{card.backText}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dcard;
