import React, { useState } from "react";
import "./SimpleNav.css";

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface SimpleNavProps {
  brandText?: string;
  brandHref?: string;
  navItems?: NavItem[];
  textColor?: string;
  backgroundColor?: string;
  accentColor?: string;
  sticky?: boolean;
  className?: string;
}

const SimpleNav: React.FC<SimpleNavProps> = ({
  brandText = "Brand",
  brandHref = "#",
  navItems = [],
  textColor = "#ffffff",
  backgroundColor = "#333333",
  accentColor = "#6c3fdb",
  sticky = false,
  className = "",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`dlui-simplenav ${
        sticky ? "dlui-simplenav-sticky" : ""
      } ${className}`}
      style={
        {
          backgroundColor,
          color: textColor,
          "--accent-color": accentColor,
        } as React.CSSProperties
      }
    >
      <div className="dlui-simplenav-container">
        <a
          href={brandHref}
          className="dlui-simplenav-brand"
          style={{ color: textColor }}
        >
          {brandText}
        </a>

        {/* Desktop Menu */}
        <div className="dlui-simplenav-desktop-menu">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`dlui-simplenav-item ${
                item.active ? "dlui-simplenav-item-active" : ""
              }`}
              style={{ color: item.active ? accentColor : textColor }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className={`dlui-simplenav-toggle ${
            isMenuOpen ? "dlui-simplenav-toggle-active" : ""
          }`}
        >
          <span style={{ backgroundColor: textColor }}></span>
          <span style={{ backgroundColor: textColor }}></span>
          <span style={{ backgroundColor: textColor }}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`dlui-simplenav-mobile-menu ${
          isMenuOpen ? "dlui-simplenav-mobile-menu-active" : ""
        }`}
        style={{ backgroundColor }}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`dlui-simplenav-mobile-item ${
              item.active ? "dlui-simplenav-mobile-item-active" : ""
            }`}
            style={{ color: item.active ? accentColor : textColor }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SimpleNav;
