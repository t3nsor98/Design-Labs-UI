import React from "react";
import { StyleDiv, Dterminal, GlassDiv, SimpleNav } from "design-labs-ui";

export const components = [
  {
    id: "stylediv",
    name: "StyleDiv",
    description:
      "A flexible container component with customizable styling properties.",
    component: StyleDiv,
    props: {
      backgroundColor: "rgba(45, 27, 105, 0.3)",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
      className: "backdrop-blur-md border border-white/10",
      children: <p className="text-white">This is a styled div component.</p>,
    },
    code: `import { StyleDiv } from 'design-labs-ui';

function Example() {
  return (
    <StyleDiv
      backgroundColor="rgba(45, 27, 105, 0.3)"
      padding="2rem"
      borderRadius="1rem"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
      className="backdrop-blur-md border border-white/10"
    >
      <p className="text-white">This is a styled div component.</p>
    </StyleDiv>
  );
}`,
    examples: [
      {
        name: "Basic",
        props: {
          backgroundColor: "rgba(45, 27, 105, 0.3)",
          padding: "1.5rem",
          borderRadius: "0.5rem",
          children: <p className="text-white">Basic styled div example.</p>,
        },
      },
      {
        name: "With Shadow",
        props: {
          backgroundColor: "rgba(108, 63, 219, 0.2)",
          padding: "1.5rem",
          borderRadius: "0.5rem",
          boxShadow: "0 10px 25px rgba(108, 63, 219, 0.3)",
          children: (
            <p className="text-white">Styled div with shadow effect.</p>
          ),
        },
      },
      {
        name: "With Border",
        props: {
          backgroundColor: "rgba(45, 27, 105, 0.1)",
          padding: "1.5rem",
          borderRadius: "0.5rem",
          className: "border border-primary-500/50",
          children: (
            <p className="text-white">Styled div with custom border.</p>
          ),
        },
      },
    ],
    propsList: [
      {
        name: "backgroundColor",
        type: "string",
        default: "#ffffff",
        description: "Background color of the div",
      },
      {
        name: "padding",
        type: "string",
        default: "16px",
        description: "Padding inside the div",
      },
      {
        name: "margin",
        type: "string",
        default: "0",
        description: "Margin around the div",
      },
      {
        name: "borderRadius",
        type: "string",
        default: "4px",
        description: "Border radius of the div",
      },
      {
        name: "boxShadow",
        type: "string",
        default: "0 2px 4px rgba(0, 0, 0, 0.1)",
        description: "Box shadow effect",
      },
      {
        name: "width",
        type: "string",
        default: "auto",
        description: "Width of the div",
      },
      {
        name: "height",
        type: "string",
        default: "auto",
        description: "Height of the div",
      },
      {
        name: "className",
        type: "string",
        default: "",
        description: "Additional CSS class names",
      },
      {
        name: "children",
        type: "ReactNode",
        default: "-",
        description: "Child elements to render inside the div",
      },
    ],
  },
  {
    id: "dterminal",
    name: "Dterminal",
    description:
      "A terminal-like component with typing animation for showcasing code snippets and commands.",
    component: Dterminal,
    props: {
      textColor: "#00FF00",
      backgroundColor: "#000000",
      topText: "user@designlabs:~$",
      terminalText: "npm install design-labs-ui --save",
    },
    code: `import { Dterminal } from 'design-labs-ui';

function Example() {
  return (
    <Dterminal
      textColor="#00FF00"
      backgroundColor="#000000"
      topText="user@designlabs:~$"
      terminalText="npm install design-labs-ui --save"
    />
  );
}`,
    examples: [
      {
        name: "Basic",
        props: {
          textColor: "#FFF3B0",
          backgroundColor: "#540B0E",
          topText: "t3nsor@designlabs:~$",
          terminalText: "npm install design-labs-ui",
        },
      },
      {
        name: "React Theme",
        props: {
          textColor: "#61DAFB",
          backgroundColor: "#282C34",
          topText: "t3nsor-dev:~$",
          terminalText: "npm create vite@latest .",
        },
      },
      {
        name: "Git Commands",
        props: {
          textColor: "#F1502F",
          backgroundColor: "#0D1117",
          topText: "git@github:~$",
          terminalText:
            "git clone https://github.com/t3nsor98/Design-Labs-UI.git",
        },
      },
    ],
    propsList: [
      {
        name: "textColor",
        type: "string",
        default: "#00FF00",
        description: "Color of the terminal text",
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "#000000",
        description: "Background color of the terminal",
      },
      {
        name: "topText",
        type: "string",
        default: "user@mac:~$",
        description: "Text displayed at the top of the terminal",
      },
      {
        name: "terminalText",
        type: "string",
        default: "echo Hello, World!",
        description: "Text to be animated in the terminal",
      },
    ],
  },
  {
    id: "glassdiv",
    name: "GlassDiv",
    description:
      "A modern glassmorphism component with customizable blur, opacity, and border effects.",
    component: GlassDiv,
    props: {
      backgroundColor: "rgba(144, 19, 254, 0.3)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      blurAmount: "2px",
      borderRadius: "10px",
      borderWidth: "1px",
      borderColor: "rgba(255, 255, 255, 0.18)",
      padding: "20px",
      className: "",
      children: <p className="text-white">This is a glass effect component.</p>,
    },
    code: `import { GlassDiv } from 'design-labs-ui';

function Example() {
  return (
    <GlassDiv
      backgroundColor="rgba(144, 19, 254, 0.3)"
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
      blurAmount="2px"
      borderRadius="10px"
      borderWidth="1px"
      borderColor="rgba(255, 255, 255, 0.18)"
      padding="20px"
    >
      <p className="text-white">This is a glass effect component.</p>
    </GlassDiv>
  );
}`,
    examples: [
      {
        name: "Basic",
        props: {
          backgroundColor: "rgba(80, 19, 254, 0.1)",
          blurAmount: "2px",
          children: <p className="text-white">Basic glass effect example.</p>,
        },
      },
      {
        name: "Light Glass",
        props: {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          blurAmount: "5px",
          borderColor: "rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
          children: (
            <p className="text-white">Light glass effect with more blur.</p>
          ),
        },
      },
      {
        name: "Dark Glass",
        props: {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          blurAmount: "3px",
          borderColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
          children: <p className="text-white">Dark glass effect example.</p>,
        },
      },
    ],
    propsList: [
      {
        name: "backgroundColor",
        type: "string",
        default: "rgba(144, 19, 254, 0.3)",
        description: "Background color with opacity",
      },
      {
        name: "boxShadow",
        type: "string",
        default: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        description: "Box shadow effect",
      },
      {
        name: "blurAmount",
        type: "string",
        default: "2px",
        description: "Blur amount for the backdrop filter",
      },
      {
        name: "borderRadius",
        type: "string",
        default: "10px",
        description: "Border radius of the div",
      },
      {
        name: "borderWidth",
        type: "string",
        default: "1px",
        description: "Border width",
      },
      {
        name: "borderColor",
        type: "string",
        default: "rgba(255, 255, 255, 0.18)",
        description: "Border color with opacity",
      },
      {
        name: "padding",
        type: "string",
        default: "20px",
        description: "Padding inside the div",
      },
      {
        name: "width",
        type: "string",
        default: "auto",
        description: "Width of the div",
      },
      {
        name: "height",
        type: "string",
        default: "auto",
        description: "Height of the div",
      },
      {
        name: "className",
        type: "string",
        default: "",
        description: "Additional CSS class names",
      },
      {
        name: "children",
        type: "ReactNode",
        default: "-",
        description: "Child elements to render inside the div",
      },
    ],
  },
  {
    id: "simplenav",
    name: "SimpleNav",
    description:
      "A responsive navigation bar component with customizable colors and mobile menu.",
    component: SimpleNav,
    props: {
      brandText: "Design Labs",
      brandHref: "#",
      navItems: [
        { label: "Home", href: "#", active: true },
        { label: "Components", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "About", href: "#" },
      ],
      textColor: "#ffffff",
      backgroundColor: "#333333",
      accentColor: "#6c3fdb",
      sticky: false,
    },
    code: `import { SimpleNav } from 'design-labs-ui';

function Example() {
  return (
    <SimpleNav
      brandText="Design Labs"
      brandHref="#"
      navItems={[
        { label: "Home", href: "#", active: true },
        { label: "Components", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "About", href: "#" },
      ]}
      textColor="#ffffff"
      backgroundColor="#333333"
      accentColor="#6c3fdb"
      sticky={false}
    />
  );
}`,
    examples: [
      {
        name: "Basic",
        props: {
          brandText: "Design Labs",
          navItems: [
            { label: "Home", href: "#", active: true },
            { label: "Offerings", href: "#" },
            { label: "Services", href: "#" },
            { label: "About Us", href: "#" },
          ],
          textColor: "#FFFF82",
          backgroundColor: "#0F0326",
          accentColor: "#6c3fdb",
        },
      },
      {
        name: "Dark Theme",
        props: {
          brandText: "Dark Theme",
          navItems: [
            { label: "Home", href: "#", active: true },
            { label: "Products", href: "#" },
            { label: "Services", href: "#" },
            { label: "Contact", href: "#" },
          ],
          backgroundColor: "#1a1a1a",
          accentColor: "#ff7dff",
        },
      },
      {
        name: "Light Theme",
        props: {
          brandText: "Light Theme",
          navItems: [
            { label: "Home", href: "#", active: true },
            { label: "Features", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Blog", href: "#" },
          ],
          backgroundColor: "#ffffff",
          textColor: "#333333",
          accentColor: "#6c3fdb",
        },
      },
    ],
    propsList: [
      {
        name: "brandText",
        type: "string",
        default: "Brand",
        description: "Brand/logo text to display",
      },
      {
        name: "brandHref",
        type: "string",
        default: "#",
        description: "URL for the brand/logo",
      },
      {
        name: "navItems",
        type: "NavItem[]",
        default: "[]",
        description: "Array of navigation items",
      },
      {
        name: "textColor",
        type: "string",
        default: "#ffffff",
        description: "Text color for the navigation",
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "#333333",
        description: "Background color for the navigation",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#6c3fdb",
        description: "Accent color for active items and hover states",
      },
      {
        name: "sticky",
        type: "boolean",
        default: "false",
        description: "Whether to stick the navbar to the top",
      },
      {
        name: "className",
        type: "string",
        default: "",
        description: "Additional CSS class names",
      },
    ],
  },

  // Add more components here as they are developed
];
