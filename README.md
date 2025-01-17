# Project Structure

For managing the project in a more concise way, we can create these folders for more manageable code:

## Files and Folders Structure

- `components`
  - `core`
  - `common`
  - `layouts`
- `pages`
- `stories`
- `styles`
- `pages`
- `utils`
  - `lib`
  - `services`
  - `hooks`
  - `store`

### Components

This folder contains reusable UI components used throughout the application. It has three folders:

#### &nbsp; Core

The `core` folder contains the unbreakable components such as buttons, inputs, svg icons etc.

#### &nbsp; Common

The `common` folder contains common components that combine multiple core components. These are shared across different layouts in the application. Examples include various types of cards, dropdowns, tabs, accordions, and modals.

#### &nbsp; Layouts

The `layouts` folder contains components that define the structure of pages. These components often include headers, footers, or sidebars and are used across multiple pages. Layout components are usually made up of multiple common and core components.

### Pages

The `pages` folder contains the main pages of the application. Each file in this folder represents a route in the application. These pages are composed of various components from the `components` folder and are responsible for rendering the content that users interact with. The structure of the `pages` folder follows the [`Official Next.js Project Structure and Organization`](https://nextjs.org/docs/pages/getting-started/project-structure).

#### &nbsp; Example

Here is an example of a simple page component:

```javascript
// filepath: /path/to/pages/Home.js
import React from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import MainContent from '../components/common/MainContent';

const Home = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
```

### Stories

The `stories` folder contains Storybook stories for the components in the application. These stories are used to document and visually test components in isolation. Each component typically has a corresponding story file that demonstrates its various states and uses.

### Styles

The `styles` folder contains global styles, theme definitions, and any other styling-related code. This includes CSS, SCSS, or styled-components files that define the look and feel of the application. It helps maintain a consistent design system across the entire project.

### Utils

The `utils` folder contains utility functions and helpers that are used throughout the application.

#### &nbsp; Lib

The `lib` folder contains utility functions, helpers, or any other code that doesn't fit into the other categories but is still shared across the application.

#### &nbsp; Services

The `services` folder contains code related to making API calls, handling authentication, or any other service-related logic.

#### &nbsp; Hooks

The `hooks` folder contains custom React hooks that encapsulate reusable logic and state management.

#### &nbsp; Store

The `store` folder contains code related to state management in the application using Zustand.

#### &nbsp; &nbsp; Structure

- **Store Configuration**: Set up and configure the Zustand store.
- **Slices**: Organize state into logical slices for better modularity and maintainability.

#### &nbsp; &nbsp; Example

Here is an example of how to set up a Zustand store:

```javascript
// filepath: /path/to/store/useStore.js
import create from 'zustand';

const useStore = create((set) => ({
  // Define your state and actions here
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
```
