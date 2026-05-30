# 🎮 Connect Four – Two Player Browser Game

> A classic two-player Connect Four game built using HTML, CSS, JavaScript, and jQuery, featuring real-time gameplay, turn-based interactions, and automatic win detection.

---

## 📖 Overview

Connect Four is a browser-based implementation of the popular strategy board game where two players take turns dropping colored chips into a vertical grid. The objective is to connect four consecutive chips horizontally, vertically, or diagonally before your opponent.

This project demonstrates front-end web development concepts including DOM manipulation, event handling, game state management, and algorithmic win detection using JavaScript and jQuery.

---

## ✨ Features

### 👥 Two-Player Gameplay

* Local multiplayer experience
* Player name customization
* Alternate turns automatically

### 🎨 Interactive Game Board

* 6 × 7 grid layout
* Visual chip placement
* Color-coded players

  * 🔵 Player 1 (Blue)
  * 🔴 Player 2 (Red)

### ⬇️ Gravity-Based Chip Placement

* Chips automatically fall to the lowest available slot
* Mimics real Connect Four mechanics

### 🏆 Win Detection

* Horizontal four-in-a-row detection
* Vertical four-in-a-row detection
* Diagonal four-in-a-row detection
* Automatic winner announcement

### 📱 Responsive UI

* Clean browser-based interface
* Bootstrap-powered layout
* Dynamic game updates

---

## 🛠️ Tech Stack

| Category     | Technologies |
| ------------ | ------------ |
| Structure    | HTML5        |
| Styling      | CSS3         |
| Logic        | JavaScript   |
| Library      | jQuery       |
| UI Framework | Bootstrap    |

---

## 🏗️ Game Architecture

```text
Player Click
      │
      ▼
Select Column
      │
      ▼
Find Lowest Empty Slot
      │
      ▼
Drop Chip
      │
      ▼
Update Board State
      │
      ▼
Check Win Conditions
      │
      ▼
Winner? ──► Yes → End Game
      │
      ▼
 No
      │
      ▼
Switch Player Turn
```

---

## 📂 Project Structure

```text
Connect-Four/
│
├── connect.html      # Game structure
├── connect.css       # Styling and board design
├── connect.js        # Game logic and interactions
└── README.md
```

---

## ⚙️ How It Works

### 1️⃣ Player Setup

When the game starts:

* Player 1 enters their name
* Player 2 enters their name
* Colors are automatically assigned

### 2️⃣ Chip Placement

Players click a column on the board.

The game:

* Identifies the selected column
* Finds the lowest available empty slot
* Places the player's chip

### 3️⃣ Turn Management

After each move:

* Active player changes
* Header updates to show whose turn it is

### 4️⃣ Win Detection

The board is scanned after every move for:

* Horizontal connections
* Vertical connections
* Diagonal connections

If four matching chips are found, the winner is declared immediately.

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/connect-four-game.git
cd connect-four-game
```

### Run the Game

Simply open:

```text
connect.html
```

in any modern web browser.

No additional installation or dependencies are required.

---

## 🎯 Learning Outcomes

This project demonstrates:

* DOM Manipulation
* Event Handling
* Game Development Logic
* jQuery Programming
* State Management
* Algorithm Design
* Front-End Web Development
* Responsive UI Design

---

## 🔮 Future Enhancements

* 🤖 Single-player mode with AI
* 🔄 Restart game button
* 🎵 Sound effects
* 🌙 Dark mode
* 🏅 Score tracking
* 🌐 Online multiplayer support
* 📱 Improved mobile responsiveness

---

## 👨‍💻 Author

Developed as a front-end web development project to demonstrate JavaScript game logic, jQuery interactions, event-driven programming, and browser-based UI development.

⭐ If you enjoyed this project, consider giving it a star on GitHub!
