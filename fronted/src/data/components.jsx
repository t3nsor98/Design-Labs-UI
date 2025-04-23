// src/data/components.jsx
import React from "react";
import { StyleDiv } from "design-labs-ui";

// Mock Dterminal component until you publish it
const Dterminal = ({
  textColor = "#00FF00",
  backgroundColor = "#000000",
  topText = "user@mac:~$",
  terminalText = "echo Hello, World!",
}) => {
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + terminalText.charAt(index));
      index++;

      if (index > terminalText.length) {
        clearInterval(interval);
      }
    }, 100);

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
        boxShadow: `0 0 10px rgba(0, 0, 0, 0.5)`,
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
          textColor: "#00FF00",
          backgroundColor: "#000000",
          topText: "user@designlabs:~$",
          terminalText: "npm install design-labs-ui --save",
        },
      },
      {
        name: "React Theme",
        props: {
          textColor: "#61DAFB",
          backgroundColor: "#282C34",
          topText: "react-dev:~$",
          terminalText: "npx create-react-app my-awesome-app",
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
  // Add more components here as they are developed
];
