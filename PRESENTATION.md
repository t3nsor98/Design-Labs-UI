# Design Labs UI
## A Modern React Component Library

---

# 🎯 What is Design Labs UI?

A **lightweight**, **modern**, and **customizable** React component library for building beautiful user interfaces.

### Key Highlights:
- 📦 Published on npm (`design-labs-ui`)
- ⚡ Built with TypeScript for type safety
- 🎨 Highly customizable through props
- 🪶 Zero runtime dependencies (only React peer dependency)
- 📱 Responsive & mobile-friendly components

---

# 🛠️ Installation

```bash
# Using npm
npm install design-labs-ui

# Using yarn
yarn add design-labs-ui
```

**Requirements:**
- React >= 17.0.0
- React DOM >= 17.0.0

---

# 📦 Component Library Overview

| Component | Description |
|-----------|-------------|
| **StyleDiv** | Flexible container with customizable styling |
| **GlassDiv** | Glassmorphism effect container |
| **Dterminal** | Terminal-like component with typing animation |
| **TypeWriter** | Dynamic typewriter text effect |
| **SimpleNav** | Responsive navigation bar |
| **Dclock** | Digital clock with multiple styles |

---

# 🎨 Component #1: StyleDiv

A flexible container component with customizable styling properties.

### Features:
- Custom background colors
- Configurable padding, margin, border radius
- Box shadow effects
- Full width/height control

### Code Example:
```jsx
import { StyleDiv } from 'design-labs-ui';

<StyleDiv
  backgroundColor="#f5f5f5"
  padding="20px"
  borderRadius="8px"
  boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
>
  <h1>Hello, Design Labs UI!</h1>
</StyleDiv>
```

---

# 🪟 Component #2: GlassDiv

A modern **glassmorphism** component with customizable blur, opacity, and border effects.

### Features:
- Backdrop blur effect
- Semi-transparent backgrounds
- Frosted glass aesthetic
- Customizable borders and shadows

### Code Example:
```jsx
import { GlassDiv } from 'design-labs-ui';

<GlassDiv
  backgroundColor="rgba(144, 19, 254, 0.3)"
  blurAmount="2px"
  borderRadius="10px"
  borderColor="rgba(255, 255, 255, 0.18)"
>
  <p>This is a glass effect component.</p>
</GlassDiv>
```

---

# 💻 Component #3: Dterminal

A terminal-like component with **typing animation** for showcasing code snippets and commands.

### Features:
- Realistic terminal appearance
- Typing animation effect
- Customizable colors
- Perfect for installation instructions

### Code Example:
```jsx
import { Dterminal } from 'design-labs-ui';

<Dterminal
  textColor="#00FF00"
  backgroundColor="#000000"
  topText="user@designlabs:~$"
  terminalText="npm install design-labs-ui --save"
/>
```

---

# ⌨️ Component #4: TypeWriter

Dynamic typewriter text effect with rotating words.

### Features:
- Smooth typing animation
- Word rotation cycle
- Blinking cursor effect
- Customizable timing

### Code Example:
```jsx
import { TypeWriter } from 'design-labs-ui';

<TypeWriter
  constantWord="I am a"
  variableWords={["frontend developer", "UI designer", "full stack developer"]}
  textColor="#ffffff"
  backgroundColor="rgba(0, 0, 0, 0.5)"
/>
```

---

# 🧭 Component #5: SimpleNav

A responsive navigation bar with customizable colors and mobile menu.

### Features:
- Fully responsive design
- Mobile hamburger menu
- Custom brand/logo text
- Themeable colors
- Active state support

### Code Example:
```jsx
import { SimpleNav } from 'design-labs-ui';

<SimpleNav
  brandText="Design Labs"
  navItems={[
    { label: "Home", href: "#", active: true },
    { label: "Components", href: "#" },
    { label: "Documentation", href: "#" },
  ]}
  backgroundColor="#333333"
  accentColor="#6c3fdb"
/>
```

---

# 🕐 Component #6: Dclock

A stylish digital clock component with multiple font styles.

### Features:
- Multiple font family options (Orbitron, Digital, Segment, Alarm)
- 12/24 hour format
- Optional seconds display
- Neon glow effect
- Real-time updates

### Code Example:
```jsx
import { Dclock } from 'design-labs-ui';

<Dclock
  backgroundColor="#111111"
  textColor="#39FF14"
  fontFamily="orbitron"
  showSeconds={true}
  twentyFourHours={false}
/>
```

---

# 🏗️ Technical Architecture

### Project Structure:
```
design-labs-ui/
├── src/
│   ├── index.ts          # Main entry point
│   └── components/
│       ├── stylediv/     # StyleDiv component
│       ├── glassdiv/     # GlassDiv component
│       ├── dterminal/    # Dterminal component
│       ├── typewriter/   # TypeWriter component
│       ├── simplenav/    # SimpleNav component
│       └── dclock/       # Dclock component
├── dist/                 # Compiled output
├── rollup.config.js      # Build configuration
└── tsconfig.json         # TypeScript config
```

---

# 🔧 Build System

### Technologies Used:
- **TypeScript** - Type-safe development
- **Rollup** - Module bundler
- **Babel** - JavaScript compiler
- **PostCSS** - CSS processing

### Output Formats:
- CommonJS (`dist/index.js`)
- ES Module (`dist/index.esm.js`)
- Type Definitions (`dist/types/index.d.ts`)

---

# 🎯 Design Philosophy

### 1. **Simplicity First**
   - Easy to install, easy to use
   - Minimal configuration required

### 2. **Full Customization**
   - Every visual aspect controllable via props
   - No forced styling decisions

### 3. **Modern Aesthetics**
   - Glassmorphism support
   - Smooth animations
   - Dark mode friendly

### 4. **Developer Experience**
   - Full TypeScript support
   - Comprehensive prop documentation
   - Consistent API across components

---

# 🌐 Live Demo & Documentation

### 🔗 Links:
- **npm Package:** [npmjs.com/package/design-labs-ui](https://www.npmjs.com/package/design-labs-ui)
- **GitHub Repository:** [github.com/t3nsor98/Design-Labs-UI](https://github.com/t3nsor98/Design-Labs-UI)
- **Live Showcase:** Frontend application included

### Documentation Features:
- Interactive component previews
- Code examples for each component
- Props documentation
- Multiple theme examples

---

# 🗺️ Roadmap

### Upcoming Components:
- 🔘 **Button** - Versatile button component
- 📝 **Input** - Styled form inputs
- 🃏 **Card** - Content card containers
- 📱 **Modal** - Popup dialogs
- 📋 **Dropdown** - Select menus
- 📑 **Tabs** - Tabbed navigation
- 🔔 **Toast** - Notification system

---

# 📊 Why Choose Design Labs UI?

| Feature | Design Labs UI |
|---------|---------------|
| Bundle Size | 🪶 Lightweight |
| TypeScript | ✅ Full Support |
| Customization | ✅ Prop-based |
| Dependencies | 🚫 Zero (peer only) |
| Documentation | ✅ Comprehensive |
| Maintenance | ✅ Active |
| Learning Curve | 📉 Low |

---

# 🚀 Getting Started in 30 Seconds

```jsx
// 1. Install
npm install design-labs-ui

// 2. Import
import { StyleDiv, GlassDiv, Dterminal } from 'design-labs-ui';

// 3. Use
function App() {
  return (
    <GlassDiv blurAmount="4px">
      <h1>Welcome to Design Labs UI!</h1>
      <Dterminal 
        terminalText="npm install design-labs-ui" 
      />
    </GlassDiv>
  );
}
```

---

# 👨‍💻 Created By

**Digbijaya Lenka**

- 🌐 GitHub: [@t3nsor98](https://github.com/t3nsor98)
- 📦 npm: [design-labs-ui](https://www.npmjs.com/package/design-labs-ui)
- 📧 Issues & Contributions Welcome!

---

# 🙏 Thank You!

### Questions?

Try Design Labs UI today:
```bash
npm install design-labs-ui
```

⭐ Star us on GitHub!
