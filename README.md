# Tic-Tac-Toe Game

This is an enhanced version of the classic Tic-Tac-Toe game from the official React documentation tutorial. This version includes some improvements and optimizations to enhance both the user experience and code quality.

## Key Improvements

### Followed All Suggested Extra Steps from the Official Tutorial
- Implemented all recommended best practices and extra steps from the React Tic-Tac-Toe tutorial, including logic for tracking the history of moves and implementing the jump-to-move functionality.

### UI Redesign with Dark Modern Theme
- The user interface has been completely redesigned with a dark, modern theme to provide a more appealing and contemporary look.
- Added subtle basic effects (like hover effects) to improve the user experience (UX).

### Code Refactor & Optimization
- Refactored the code into modules to separate concerns and improve maintainability.
- Followed best practices for React development, including clean and modular code structure.
 
### Restart Button Added
- A restart button has been added to allow players to easily start a new game without refreshing the page. This improves UX by making the app more interactive and user-friendly.

## Features
- **History Tracking:** The game tracks all moves made during the game, allowing players to jump back to any move in the game history.
- **Move Details:** Displays the row and column of each move to give players context for their actions.
- **Dynamic Sorting of Moves:** You can toggle the sorting of the move history between ascending and descending order.
- **Winner Detection:** Automatically detects the winner and highlights the winning combination.
- **Draw Detection:** Detects if the game ends in a draw.
- **Modern UI:** A visually appealing dark theme with subtle animations and effects for a better user experience.
- **Restart Button:** Easily restart the game at any time with the click of a button.

## How to Run the App Locally

### Clone the Repository
```bash
git clone https://github.com/<your-username>/tic-tac-toe-enhanced.git
cd tic-tac-toe-enhanced
```

### Install Dependencies
Run the following command to install the required dependencies:
```bash
npm install
```

### Start the Development Server
Once the dependencies are installed, run:
```bash
npm start
```
The app will open in your browser at [http://localhost:3000](http://localhost:3000).

## Technologies Used
- **React:** JavaScript library for building user interfaces.
- **CSS:** Custom styling for the modern, dark theme.
- **React Hooks:** Used for state management and side effects.
- **JavaScript (ES6+):** Modern JavaScript features for cleaner code.

## Acknowledgments
- [React Documentation](https://react.dev/)
- [Tutorial Tic Tac Toe](https://react.dev/learn/tutorial-tic-tac-toe)