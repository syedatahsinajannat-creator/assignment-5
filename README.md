# Dev Stack

A simple website to explore development technologies and choose the ones you want in your stack.

## Links

- [Live website](https://syedatahsinajannat-creator.github.io/assignment-5/)
- [GitHub repository](https://github.com/syedatahsinajannat-creator/assignment-5)

## Technologies

React, TypeScript, Tailwind CSS, Vite, and React-Toastify.

## Features

- Explore 12 technologies with descriptions, icons, and other details.
- Add technologies to your stack without adding the same one twice.
- Remove one item or clear the whole stack, with notifications for each action.

## React Questions

### 1. What is JSX?

JSX lets us write HTML-like elements inside JavaScript to describe what appears on the page.

### 2. What is the difference between props and state?

Props pass information to a component. State remembers information that can change, like the selected technologies.

### 3. What does useState do?

It stores a value and gives us a function to update it. This project uses it for the menu, technologies, selected stack, loading, and errors.

### 4. What does useEffect do?

It runs tasks after rendering. Here, it loads the JSON when the component appears.

### 5. Why do list items need a key?

Keys help React identify each item when the list changes. This project uses each technology’s ID.

### 6. What is conditional rendering?

It shows different content depending on a condition. Here, an empty message appears when the stack has no selected items.

### 7. How do parent and child components communicate?

The parent passes props to the child. The child calls a function passed by the parent when something happens, like clicking Add to Stack.

## Learning Note

I built this project while learning React, with AI help for explanations, and debugging.