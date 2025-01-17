# Project Structure

For managing the project in a more concise way, we can create these folders for more manageable code:

## Files and Folders Structure

- `components`
  - `core`
  - `common`
  - `layouts`
- `utils`
  - `lib`
  - `services`
  - `hooks`
  - `store`
- `assets`

### Components

This folder contains reusable UI components used throughout the application. It has three folders:

#### &nbsp; Core

which stores the core components such as buttons, inputs.

#### &nbsp; Common

which stores common components, shared across multiple layouts in the application. Such as Different Types of Cards, DropDowns, Tabs, Accordions, Modals.

#### &nbsp; Layouts

The layouts folder contains layout components (Most Particularly the Sections of each pages) that define the overall structure or layout shared across multiple pages in the application. These layout components often include common elements like headers, footers, or sidebars.

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

### Assets

The `assets` folder contains static files such as images, fonts, or any other assets used in the application.
