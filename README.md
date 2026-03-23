# JavaScript Fundamentals Projects

This repository contains 10 browser-based JavaScript practice projects focused on DOM manipulation, events, storage, APIs, routing, drag and drop, and dynamic UI updates.

## Project Overview

| No. | Project | Folder |
| --- | --- | --- |
| 1 | Interactive To-Do List Application | `1 Interactive To-Do List Application` |
| 2 | Simple Calculator | `2 Simple Calculator` |
| 3 | Image Gallery Lightbox | `3 Image Gallery Lightbox` |
| 4 | Weather App with API Integration | `4 Weather App with API Integration` |
| 5 | Dynamic Quiz Application | `5 Dynamic Quiz Application` |
| 6 | Drag and Drop List Reordering | `6 Drag and Drop List Reordering` |
| 7 | Real-time Chat Simulation | `7 Real-time Chat Simulation` |
| 8 | Single-Page Application with Hash-based Routing | `8 Single-Page Application SPA) with Hash-based Routing` |
| 9 | Infinite Scrolling Content Loader | `9 Infinite Scrolling Content Loader` |
| 10 | Full-featured eCommerce Shopping Cart | `10 Full-featured eCommerce Shopping Cart` |

## How to Run

1. Open any project folder.
2. Launch its `index.html` file in a browser.
3. For projects that use external data or APIs, keep the browser console open for debugging if needed.

## Project Details

### 1. Interactive To-Do List Application

- Objective: Create a simple to-do list where users can add tasks, mark them as complete, and remove them.
- Core concepts: DOM manipulation, event listeners, conditional UI updates.
- Features:
  - Add new tasks dynamically
  - Toggle completed state
  - Delete tasks from the list
  - Task handling can be managed through arrays or `localStorage`
- Folder: `1 Interactive To-Do List Application`

### 2. Simple Calculator

- Objective: Build a calculator for basic arithmetic operations such as addition, subtraction, multiplication, and division.
- Core concepts: Button-driven input, state handling, dynamic display updates.
- Features:
  - Number and operator buttons
  - Real-time display updates
  - Arithmetic evaluation based on user interaction
  - Clear and reset interactions
- Folder: `2 Simple Calculator`

### 3. Image Gallery Lightbox

- Objective: Build an image gallery where clicking a thumbnail opens a larger preview in a modal overlay.
- Core concepts: Event-driven image updates, class toggling, transitions.
- Features:
  - Clickable image thumbnails
  - Modal/lightbox preview
  - Dynamic image replacement inside the modal
  - Smooth show/hide transitions
- Folder: `3 Image Gallery Lightbox`

### 4. Weather App with API Integration

- Objective: Fetch and display live weather information using a city name.
- Core concepts: Fetch API, JSON parsing, async UI states, error handling.
- Features:
  - Search weather by city
  - Display temperature, humidity, description, and wind speed
  - Handle invalid city names and network failures
  - Loading and error messages for better feedback
- Folder: `4 Weather App with API Integration`
- Note: This project uses OpenWeatherMap and may require a valid API key in `script.js`.

### 5. Dynamic Quiz Application

- Objective: Load quiz questions dynamically and track the user's score.
- Core concepts: Data-driven rendering, option selection, score calculation.
- Features:
  - Multiple-choice questions
  - Score tracking across questions
  - Next-question navigation
  - Feedback and explanations after answers
- Folder: `5 Dynamic Quiz Application`
- Data source: `Questions.json` is included alongside the app files.

### 6. Drag and Drop List Reordering

- Objective: Let users reorder a list interactively using drag and drop.
- Core concepts: HTML5 Drag and Drop API, DOM reordering, visual state changes.
- Features:
  - Drag list items
  - Drop items into a new position
  - Update the DOM to reflect the new order
  - Highlight valid drop targets during dragging
- Folder: `6 Drag and Drop List Reordering`

### 7. Real-time Chat Simulation

- Objective: Simulate a real-time chat experience without a backend server.
- Core concepts: Timers, DOM updates, message rendering, timestamps.
- Features:
  - Send user messages
  - Simulate incoming messages with `setTimeout` or `setInterval`
  - Render messages inside a chat window
  - Show timestamps for conversation flow
- Folder: `7 Real-time Chat Simulation`

### 8. Single-Page Application with Hash-based Routing

- Objective: Build a basic SPA that switches views without reloading the page.
- Core concepts: `window.onhashchange`, dynamic rendering, client-side routing.
- Features:
  - Hash-based navigation
  - Multiple views loaded dynamically
  - Shared UI across routes
  - State retained without full page refreshes
- Folder: `8 Single-Page Application SPA) with Hash-based Routing`

### 9. Infinite Scrolling Content Loader

- Objective: Load more content automatically as the user scrolls near the bottom of the page.
- Core concepts: Scroll events, asynchronous loading, incremental rendering.
- Features:
  - Bottom-of-page scroll detection
  - Additional content loading on demand
  - DOM appending without page reload
  - Smooth user experience for larger content feeds
- Folder: `9 Infinite Scrolling Content Loader`

### 10. Full-featured eCommerce Shopping Cart

- Objective: Build an eCommerce simulation with product listings, filtering, cart state, and price calculations.
- Core concepts: Dynamic rendering, state management, `localStorage`, filtering, cart logic.
- Features:
  - Product listing with image, title, description, and price
  - Category filtering and keyword search
  - Add-to-cart, quantity increase/decrease, and remove actions
  - Persistent cart state using `localStorage`
  - Totals, tax, delivery charge, platform fee, and discount calculations
  - Responsive shopping UI
- Folder: `10 Full-featured eCommerce Shopping Cart`

## Skills Practiced Across the Repository

- DOM manipulation
- Event handling
- Array and object state management
- Browser storage with `localStorage`
- Fetch API and JSON handling
- Drag and drop interactions
- Hash-based routing
- Dynamic UI rendering
- Error handling in front-end applications

## Repository Structure

```text
JS_Fundamentals/
|-- 1 Interactive To-Do List Application/
|-- 2 Simple Calculator/
|-- 3 Image Gallery Lightbox/
|-- 4 Weather App with API Integration/
|-- 5 Dynamic Quiz Application/
|-- 6 Drag and Drop List Reordering/
|-- 7 Real-time Chat Simulation/
|-- 8 Single-Page Application SPA) with Hash-based Routing/
|-- 9 Infinite Scrolling Content Loader/
|-- 10 Full-featured eCommerce Shopping Cart/
`-- README.md
```
