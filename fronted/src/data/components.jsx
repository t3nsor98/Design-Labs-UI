// src/data/components.js
import { StyleDiv } from "design-labs-ui";

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
  // Add more components here as they are developed
];
