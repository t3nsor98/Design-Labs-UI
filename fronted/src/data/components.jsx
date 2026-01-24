import React from "react";
import {
  StyleDiv,
  Dterminal,
  GlassDiv,
  SimpleNav,
  TypeWriter,
  Dclock,
  Dcard,
} from "design-labs-ui";

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
  {
    id: "typewriter",
    name: "TypeWriter",
    description:
      "A beautiful typewriter effect component with glowing border and animated text.",
    component: TypeWriter,
    props: {
      textColor: "#61dafb",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      constantWord: "I am a",
      variableWords: [
        "frontend developer",
        "full stack developer",
        "UI designer",
        "problem solver",
      ],
    },
    code: `import { TypeWriter } from 'design-labs-ui';

function Example() {
  return (
    <TypeWriter
      textColor="#61dafb"
      backgroundColor="rgba(0, 0, 0, 0.7)"
      constantWord="I am a"
      variableWords={[
        "frontend developer",
        "full stack developer",
        "UI designer",
        "problem solver"
      ]}
    />
  );
}`,
    examples: [
      {
        name: "Basic",
        props: {
          textColor: "#F4D35E",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          constantWord: "We are",
          variableWords: [
            "frontend developers",
            "full stack developers",
            "UI designers",
            "problem solvers",
          ],
        },
      },
      {
        name: "Purple Theme",
        props: {
          textColor: "#9c27b0",
          backgroundColor: "rgba(25, 10, 41, 0.8)",
          constantWord: "Design Labs is",
          variableWords: ["beautiful", "modern", "responsive", "customizable"],
        },
      },
      {
        name: "Neon Green",
        props: {
          textColor: "#39FF14",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          constantWord: "We build",
          variableWords: [
            "amazing UIs",
            "responsive layouts",
            "interactive components",
            "design systems",
          ],
        },
      },
    ],
    propsList: [
      {
        name: "textColor",
        type: "string",
        default: "#ffffff",
        description: "Color of the text and glow effect",
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "rgba(0, 0, 0, 0.5)",
        description: "Background color of the container",
      },
      {
        name: "constantWord",
        type: "string",
        default: "-",
        description: "The constant text that appears before the changing words",
      },
      {
        name: "variableWords",
        type: "string[]",
        default: "[]",
        description:
          "Array of words that will be typed and deleted in sequence",
      },
    ],
  },
  {
    id: "dclock",
    name: "Dclock",
    description:
      "A customizable digital clock component with multiple font options and beautiful styling.",
    component: Dclock,
    props: {
      backgroundColor: "#111111",
      textColor: "#39FF14",
      fontFamily: "orbitron",
      showSeconds: true,
      twentyFourHours: false,
    },
    code: `import { Dclock } from 'design-labs-ui';

function Example() {
  return (
    <Dclock
      backgroundColor="#111111"
      textColor="#39FF14"
      fontFamily="orbitron"
      showSeconds={true}
      twentyFourHours={false}
    />
  );
}`,
    examples: [
      {
        name: "Blue Digital",
        props: {
          backgroundColor: "#001133",
          textColor: "#00AAFF",
          fontFamily: "digital",
        },
      },
      {
        name: "Red Alarm",
        props: {
          backgroundColor: "#330000",
          textColor: "#FF3333",
          fontFamily: "alarm",
          twentyFourHours: true,
        },
      },
      {
        name: "Segment Display",
        props: {
          backgroundColor: "#222222",
          textColor: "#FFCC00",
          fontFamily: "segment",
          showSeconds: false,
        },
      },
    ],
    propsList: [
      {
        name: "backgroundColor",
        type: "string",
        default: "#111111",
        description: "Background color of the clock",
      },
      {
        name: "textColor",
        type: "string",
        default: "#39FF14",
        description: "Text color of the clock",
      },
      {
        name: "fontFamily",
        type: "'orbitron' | 'digital' | 'segment' | 'alarm'",
        default: "orbitron",
        description: "Digital font family to use",
      },
      {
        name: "showSeconds",
        type: "boolean",
        default: "true",
        description: "Whether to show seconds",
      },
      {
        name: "twentyFourHours",
        type: "boolean",
        default: "false",
        description: "Whether to use 24-hour format",
      },
      {
        name: "className",
        type: "string",
        default: "''",
        description: "Additional CSS class names",
      },
    ],
  },
  {
    id: "dcard",
    name: "Dcard",
    description:
      "A responsive grid of interactive flip cards with image on front and text on back.",
    component: Dcard,
    props: {
      cards: [
        {
          id: 1,
          frontImage:
            "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
          frontTitle: "Design Labs UI",
          backTitle: "Interactive Cards",
          backText:
            "This card demonstrates the flip animation effect with an image on the front and text content on the back.",
          altText: "Example card",
        },
        {
          id: 2,
          frontImage:
            "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
          frontTitle: "Responsive Design",
          backTitle: "Mobile Friendly",
          backText:
            "Cards automatically adjust to fit any screen size with a clean responsive grid layout.",
          altText: "Responsive example",
        },
        {
          id: 3,
          frontImage:
            "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
          backTitle: "No Front Title",
          backText:
            "Front titles are optional. This card has no front title but still looks great!",
          altText: "Optional title example",
        },
      ],
      cardWidth: 250,
      cardHeight: 350,
      gap: 20,
      animationDuration: 300,
    },
    code: `import { Dcard } from 'design-labs-ui';

function Example() {
  return (
    <Dcard
      cards={[
        {
          id: 1,
          frontImage: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
          frontTitle: "Design Labs UI",
          backTitle: "Interactive Cards",
          backText: "This card demonstrates the flip animation effect with an image on the front and text content on the back.",
          altText: "Example card"
        },
        {
          id: 2,
          frontImage: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
          frontTitle: "Responsive Design",
          backTitle: "Mobile Friendly",
          backText: "Cards automatically adjust to fit any screen size with a clean responsive grid layout.",
          altText: "Responsive example"
        },
        {
          id: 3,
          frontImage: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
          backTitle: "No Front Title", 
          backText: "Front titles are optional. This card has no front title but still looks great!",
          altText: "Optional title example"
        }
      ]}
      cardWidth={250}
      cardHeight={350}
      gap={20}
      animationDuration={300}
    />
  );
}`,
    examples: [
      {
        name: "Basic",
        props: {
          cards: [
            {
              id: 1,
              frontImage:
                "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
              frontTitle: "Click to Flip",
              backTitle: "Hello!",
              backText: "This is a basic flip card example. Click again to flip back.",
              altText: "Basic flip card",
            },
            {
              id: 2,
              frontImage:
                "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
              frontTitle: "Interactive",
              backTitle: "Information",
              backText:
                "Flip cards are great for revealing additional information in an interactive way.",
              altText: "Interactive card",
            },
          ],
          gap: 15,
        },
      },
      {
        name: "Team Cards",
        props: {
          cards: [
            {
              id: 1,
              frontImage:
                "https://images.pexels.com/photos/30111684/pexels-photo-30111684/free-photo-of-black-and-white-portrait-of-woman-with-closed-eyes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              frontTitle: "Jane Doe",
              backTitle: "Lead Developer",
              backText:
                "Jane has 5+ years of experience in React development and leads our frontend team.",
              altText: "Jane Doe profile",
            },
            {
              id: 2,
              frontImage:
                "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              frontTitle: "John Smith",
              backTitle: "UI Designer",
              backText:
                "John creates beautiful user interfaces with a focus on accessibility and user experience.",
              altText: "John Smith profile",
            },
            {
              id: 3,
              frontImage:
                "https://images.pexels.com/photos/7242808/pexels-photo-7242808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              frontTitle: "Alex Johnson",
              backTitle: "Project Manager",
              backText:
                "Alex ensures our projects are delivered on time and exceed client expectations.",
              altText: "Alex Johnson profile",
            },
            {
              id: 4,
              frontImage:
                "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              frontTitle: "Sarah Williams",
              backTitle: "UX Researcher",
              backText:
                "Sarah conducts user research to ensure our designs meet real user needs and expectations.",
              altText: "Sarah Williams profile",
            },
          ],
          cardWidth: 220,
          cardHeight: 320,
          animationDuration: 400,
        },
      },
      {
        name: "Feature Cards",
        props: {
          cards: [
            {
              id: 1,
              frontImage:
                "https://images.pexels.com/photos/5077061/pexels-photo-5077061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              frontTitle: "Responsive Design",
              backTitle: "Mobile First",
              backText:
                "Our components adjust perfectly to any screen size from mobile phones to large desktop displays.",
              altText: "Responsive feature",
            },
            {
              id: 2,
              frontImage:
                "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              frontTitle: "Accessibility",
              backTitle: "WCAG Compliant",
              backText:
                "All components meet WCAG standards with keyboard navigation and screen reader support.",
              altText: "Accessibility feature",
            },
            {
              id: 3,
              frontImage:
                "https://images.pexels.com/photos/32342295/pexels-photo-32342295/free-photo-of-wooden-blocks-displaying-web-design-in-artistic-style.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              frontTitle: "Customizable",
              backTitle: "Easy To Style",
              backText:
                "Easily customize colors, sizes, and behaviors to match your design system requirements.",
              altText: "Customization feature",
            },
          ],
          gap: 25,
          animationDuration: 500,
        },
      },
    ],
    propsList: [
      {
        name: "cards",
        type: "Card[]",
        default: "[]",
        description: "Array of card objects to display in the grid",
      },
      {
        name: "cardWidth",
        type: "number",
        default: "250",
        description: "Width of each card in pixels",
      },
      {
        name: "cardHeight",
        type: "number",
        default: "350",
        description: "Height of each card in pixels",
      },
      {
        name: "gap",
        type: "number",
        default: "20",
        description: "Gap between cards in pixels",
      },
      {
        name: "animationDuration",
        type: "number",
        default: "300",
        description: "Duration of the flip animation in milliseconds",
      },
      {
        name: "className",
        type: "string",
        default: "''",
        description: "Additional CSS class names for the container",
      },
    ],
  },

  // Add more components here as they are developed
];
