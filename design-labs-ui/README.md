# Design Labs UI

A modern, lightweight React component library for building beautiful user interfaces.

[![npm version](https://img.shields.io/npm/v/design-labs-ui)](https://www.npmjs.com/package/design-labs-ui)
[![license](https://img.shields.io/npm/l/design-labs-ui)](https://github.com/t3nsor98/Design-Labs-UI/blob/main/LICENSE)
[![downloads](https://img.shields.io/npm/dt/design-labs-ui)](https://www.npmjs.com/package/design-labs-ui)

---

## Installation

Install the package using npm:

```bash
npm install design-labs-ui
```

Or, if you're using Yarn:

```bash
yarn add design-labs-ui
```

---

## Quick Start

Here’s an example of how to use the `StyleDiv` component:

```jsx
import React from "react";
import { StyleDiv } from "design-labs-ui";

function App() {
  return (
    <StyleDiv
      backgroundColor="#f5f5f5"
      padding="20px"
      borderRadius="8px"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
    >
      <h1>Hello, Design Labs UI!</h1>
      <p>This is a styled container component from our library.</p>
    </StyleDiv>
  );
}

export default App;
```

---

## Components

### StyleDiv

A flexible container component with customizable styling properties.

#### Props

| Prop            | Type      | Default                        | Description                             |
| --------------- | --------- | ------------------------------ | --------------------------------------- |
| `backgroundColor` | `string`    | `'#ffffff'`                      | Background color of the div             |
| `padding`         | `string`    | `'16px'`                         | Padding inside the div                  |
| `margin`          | `string`    | `'0'`                            | Margin around the div                   |
| `borderRadius`    | `string`    | `'4px'`                          | Border radius of the div                |
| `boxShadow`       | `string`    | `'0 2px 4px rgba(0, 0, 0, 0.1)'` | Box shadow effect                       |
| `width`           | `string`    | `'auto'`                         | Width of the div                        |
| `height`          | `string`    | `'auto'`                         | Height of the div                       |
| `className`       | `string`    | `''`                             | Additional CSS class names              |
| `children`        | `ReactNode` | `-`                              | Child elements to render inside the div |

#### Example

```jsx
<StyleDiv
  backgroundColor="#e0e0e0"
  padding="24px"
  borderRadius="12px"
  boxShadow="0 6px 12px rgba(0, 0, 0, 0.15)"
>
  <h2>Custom Styled Container</h2>
  <p>This container has custom styling applied through props.</p>
</StyleDiv>
```

---

## Roadmap

We're actively working on expanding our component library. Here are some components we plan to add in future releases:

- Button
- Input
- Card
- Modal
- Dropdown
- Tabs
- Toast notifications
- Form elements

---

## Contributing

We welcome contributions to Design Labs UI! Please feel free to submit issues, pull requests, or suggestions to help improve the library.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/amazing-component`.
3. Commit your changes: `git commit -m 'Add some amazing component'`.
4. Push to the branch: `git push origin feature/amazing-component`.
5. Open a Pull Request.

---

## License

This project is licensed under the ISC License. See the [LICENSE](https://github.com/t3nsor98/Design-Labs-UI/blob/main/LICENSE) file for details.

---

## Author

Created by [Digbijaya Lenka](https://github.com/t3nsor98).

---

## Acknowledgments

- Thanks to all the open-source projects that inspired this library.
- Special thanks to our contributors and users.

---

Made with ❤️ by the Design Labs UI team.
