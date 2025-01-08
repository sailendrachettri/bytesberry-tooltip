# @bytesberry/tooltip

A simple and customizable React tooltip component that provides an easy way to display informative hover messages.

## Installation

Install the package using Yarn:

```bash
yarn add @bytesberry/tooltip
```

Install the package using NPM:

```bash
npm install @bytesberry/tooltip
```

## Usage

You can easily integrate the `ToolTip` component into your React application:

```javascript
import {ToolTip} from "@bytesberry/tooltip";

<ToolTip 
  hoverMessage="This is a helpful tip!" 
  text="Hover me for details" 
  position="top" 
  tooltipColor="orange" 
  hoverMessageColor="#fff" 
  backgroundColor="green" 
  arrowColor="green"
/>
```

## API Reference

### Props

- **`hoverMessage`**  
  _Type_: `string`  
  _Default_: `"Your hover message."`  
  _Description_: Defines the message to display when the user hovers over the text.  
  _Example_:  
  ```javascript
  <ToolTip hoverMessage="This is a helpful tip!" />
  ```

- **`text`**  
  _Type_: `string`  
  _Default_: `"This is hover text"`  
  _Description_: The text displayed on the element that the user will hover over.  
  _Example_:  
  ```javascript
  <ToolTip text="Hover me!" />
  ```

- **`position`**  
  _Type_: `string`  
  _Default_: `"top"`  
  _Description_: Specifies the position of the tooltip relative to the element. Possible values: `"top"`, `"bottom"`, `"left"`, `"right"`.  
  _Example_:  
  ```javascript
  <ToolTip position="bottom" />
  ```

- **`tooltipColor`**  
  _Type_: `string`  
  _Default_: `"blueviolet"`  
  _Description_: The color of the tooltip text.  
  _Example_:  
  ```javascript
  <ToolTip tooltipColor="red" />
  ```

- **`hoverMessageColor`**  
  _Type_: `string`  
  _Default_: `"#fff"`  
  _Description_: The text color of the hover message.  
  _Example_:  
  ```javascript
  <ToolTip hoverMessageColor="yellow" />
  ```

- **`backgroundColor`**  
  _Type_: `string`  
  _Default_: `"#333"`  
  _Description_: The background color of the tooltip.  
  _Example_:  
  ```javascript
  <ToolTip backgroundColor="black" />
  ```

- **`arrowColor`**  
  _Type_: `string`  
  _Default_: `"#333"`  
  _Description_: The color of the arrow pointing to the element.  
  _Example_:  
  ```javascript
  <ToolTip arrowColor="green" />
  ```

## Features

- Lightweight and easy to use.
- Customizable colors, positions, and messages for complete control.
- Ideal for enhancing UI elements with additional context on hover.
- Supports top, bottom, left, and right positioning for versatile usage.

Elevate your web app's user interface with the power of **@bytesberry/tooltip**.