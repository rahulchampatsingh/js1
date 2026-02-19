# Copilot Instructions for JS Learning Project

## Project Overview
This is a **learning/practice codebase** for JavaScript fundamentals, focusing on DOM manipulation, event handling, and interactive applications. The main deliverable is a quiz system with timer functionality and local storage for high score tracking.

## Architecture & Key Files

### Quiz Application (`quizformat/quiz.html`)
- **Self-contained single-file app** with embedded CSS and JavaScript
- **Three-screen UI pattern**: home → quiz → results
- Uses **CSS custom properties** (`:root` variables) for theme management
- **State variables**: `currentIdx`, `score`, `timeLeft`, `timer`
- **Data structure**: `quizData` array contains objects with format: `{ q: string, a: string[], correct: number }`

### Learning Files
- `dom.js`: Basic DOM manipulation experiments (querySelector, innerText mutation)
- `second.js`: Object literal practice
- `scrpt.js`: Entry point in `index.html` (minimal content)
- `style.css`: Basic CSS styling (h1 colors) - rarely used due to inline styles in quiz app

## Key Patterns & Conventions

### Timer Implementation
```javascript
// Pattern: setInterval with manual cleanup
timer = setInterval(() => { timeLeft--; }, 1000);
clearInterval(timer); // Always clear before starting new timer
```
Applied in: `loadQuestion()` and `startTimer()` - essential for preventing timer stacking bugs.

### DOM Event Delegation
Quiz uses **direct element references** (`document.getElementById()`) rather than delegation - appropriate for small apps but should note this for scaling.

### State Management
- All quiz state is **global variables** (intentional for learning)
- Single source of truth: `quizData` array with `currentIdx` pointer
- **No frameworks used** - vanilla JS with direct DOM manipulation

### Local Storage Usage
```javascript
localStorage.getItem('meloHighScore') || 0;  // Read with default
localStorage.setItem('meloHighScore', score); // Write when score improves
```
Used only for high score persistence - no complex serialization.

### UI State Pattern
Screen visibility managed via `.hidden` class toggled on three containers:
- `home-screen`: Start page
- `quiz-screen`: Quiz display with timer and question
- `result-screen`: Final score and retry option

## Critical Developer Workflows

### Running Quiz Application
1. Open `quizformat/quiz.html` directly in a browser (no build required)
2. Quiz auto-loads due to embedded JavaScript
3. High score persists across page reloads via localStorage

### Debugging Tips
- **Timer bugs**: Always check that `clearInterval(timer)` fires before `startTimer()`
- **Button state**: Options become disabled after answer via `.disabled` attribute
- **CSS override pattern**: `.correct` and `.wrong` classes use `!important` to guarantee visibility
- Browser DevTools → Elements: Inspect `.hidden` class additions/removals for UI flow

## Important Quirks & Project State

### Known Issues
- **dom.html has merge conflicts** (<<<<<<< HEAD markers visible) - may need resolution
- **Inconsistent path references** in dom.html between HEAD and branch versions
- **dom.js has syntax error**: CSS syntax inside JavaScript file (lines with `.box{` and `border:`)

### File Structure Notes
- No build system or package.json - all vanilla HTML/CSS/JS
- Each HTML file (`index.html`, `index2.html`, `task.html`, `trial.html`) appears to be independent practice pages
- **Main focus**: `quizformat/quiz.html` is the most complete working project

## Code Style Observations
- **No linting/formatting rules enforced** - inconsistent spacing in some files
- **Commented-out code** common (e.g., scrpt.js has many commented functions)
- **Variable naming**: camelCase used (`currentIdx`, `loadQuestion()`)
- **No class-based code** - functional/procedural approach throughout

## When Adding Features
1. **Quiz questions**: Modify `quizData` array in quiz.html - maintain `{ q, a, correct }` structure
2. **Styling**: Prefer CSS custom properties in `:root` for consistency
3. **New screens**: Follow `.hidden` class toggle pattern for visibility
4. **Timers**: Always pair `setInterval()` with matching `clearInterval()` at start of next cycle
