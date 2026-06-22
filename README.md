# Rock Paper Scissors 🎮

Rock Paper Scissors is a classic hand game recreated as a modern web application using HTML, CSS, and JavaScript. The project combines simple game mechanics with a clean user interface, responsive layout, and interactive features to provide an enjoyable experience across different devices.

This project was developed as a frontend practice application with a focus on user interaction, DOM manipulation, JavaScript logic, responsive design, and browser storage. While the game itself is simple, it demonstrates several important web development concepts that are commonly used in real-world projects.

---

## Overview

The player competes against the computer by selecting one of three available choices:

- 🪨 Rock
- 📄 Paper
- ✂️ Scissors

The computer generates a random choice each round, and the winner is determined according to the traditional rules of the game.

The application keeps track of scores, match statistics, and user preferences while providing a smooth and responsive experience.

---

## Features

### Gameplay
- Play against a computer opponent
- Random computer move generation
- Instant result calculation
- Real-time score updates
- Win, Draw, and Loss tracking

### User Interface
- Modern and clean design
- Responsive layout for desktop and mobile devices
- Interactive buttons and hover effects
- Smooth animations and transitions
- Large visual game cards for better usability

### Theme Support
- Light Mode
- Dark Mode
- One-click theme switching
- Theme preference saved automatically

### Data Persistence
- Score saved using Local Storage
- Statistics remain available after page refresh
- Theme selection remembered between sessions

### Utility Features
- Reset Game button
- Automatic UI updates
- Simple and intuitive controls
- Beginner-friendly code structure

---

## Technologies Used

### HTML5
Used for creating the structure and layout of the application.

### CSS3
Used for styling, responsive design, animations, spacing, typography, and theme support.

### JavaScript (Vanilla JS)
Used for game logic, event handling, score tracking, DOM manipulation, local storage management, and theme switching.

---

## Game Rules

The winner is determined using the following rules:

| Choice | Beats |
|---------|---------|
| Rock | Scissors |
| Paper | Rock |
| Scissors | Paper |

Examples:

- Rock defeats Scissors
- Paper defeats Rock
- Scissors defeats Paper
- Same choices result in a Draw

---

## Learning Objectives

This project is a practical example of several core frontend development concepts:

- DOM Manipulation
- Event Listeners
- Conditional Statements
- Functions
- Variables and Data Handling
- Local Storage
- Responsive Design
- Theme Switching
- User Interface Design
- Basic Game Development Logic

It is especially useful for beginners who want to understand how JavaScript interacts with HTML and CSS to create interactive applications.

---

## Project Structure

```text
Rock-Paper-Scissors/
│
├── index.html
├── style.css
├── script.js
└── README.md
