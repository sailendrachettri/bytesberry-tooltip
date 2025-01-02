# @bytesberry/overlay-loader

A lightweight and flexible utility for creating customizable overlay loaders.

## Installation

Install the package using Yarn:

```bash
yarn add @bytesberry/overlay-loader
```

Install the package using NPM:

```bash
npm install @bytesberry/overlay-loader
```

## Usage

Easily integrate the `OverlayLoader` component into your application:

```javascript
import { OverlayLoader } from "@bytesberry/overlay-loader";

<OverlayLoader />;
```

## API Reference

### Props

- **`message`**  
  _Type_: `string`  
  _Description_: Defines a custom message to display within the loader.  
  _Example_:

  ```javascript
  <OverlayLoader message="Loading, please wait..." />
  ```

- **`strokeColor`**  
  _Type_: `string`  
  _Description_: Specifies the stroke color for the loader animation. You can use any valid color value (e.g., color names, hex, RGB).  
  _Example_:
  ```javascript
  <OverlayLoader strokeColor="#3498db" />
  ```

## Features

- Lightweight and easy to integrate.
- Fully customizable with props for messaging and styling.
- Ideal for creating smooth and user-friendly loading experiences.

Elevate your web app's UI with the power of **@bytesberry/overlay-loader**.
