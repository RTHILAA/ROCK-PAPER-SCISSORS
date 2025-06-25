# Rock Paper Scissors Game :

A modern, interactive Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript. Features smooth animations, responsive design, and an engaging user experience.

## 🎯 Live Demo : 

🔗 [Rock Paper Scissors](https://game-rock-paper-scissors1.netlify.app/)

We would appreciate it if you decide to use this project. Please include credit when using it. Thank you! 🙏

## 🚀 Features :

- **Interactive Gameplay**: Click to select your weapon and battle the computer
- **Animated Countdown**: 3-second countdown before each round begins
- **Shake Animation**: Exciting shake effect during weapon selection
- **Score Tracking**: Keep track of player vs computer wins
- **Visual Feedback**: Winner/loser animations with visual effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects, click animations, and result displays

## 🎮 How to Play :

1. Click on one of the three weapons :
   - ✊ Rock
   - ✋ Paper
   - ✌️ Scissors
2. Watch the 3-second countdown
3. See the computer's choice and the shake animation
4. View the result and updated scores
5. Play again by selecting another weapon!

### Game Rules
- **Rock** beats **Scissors**
- **Scissors** beats **Paper**
- **Paper** beats **Rock**
- Same choices result in a **Draw**

## 🚀 Getting Started :

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rock-paper-scissors.git
```

2. Navigate to the project directory:
```bash
cd rock-paper-scissors
```

3. Open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or simply double-click the `index.html` file to open it in your default browser.

## 📁 Project Structure :

```
rock-paper-scissors/
│
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── app.js              # Game logic and functionality
├── images/             # Game assets
│   ├── rock.png
│   ├── paper.png
│   └── scissors.png
└── README.md           # Project documentation
```

## 🎨 Customization :

### Changing Colors
Edit the CSS variables in `style.css`:
- Background color: Modify `background-color` in the `body` selector
- Game container: Update colors in `.game-container` and `.game` classes

### Adding Sound Effects
You can enhance the game by adding sound effects:
1. Add audio files to the project
2. Create audio objects in `app.js`
3. Play sounds during game events (countdown, selection, result)

### Modifying Animations
Customize animations by editing the keyframes in `style.css`:
- `@keyframes shake` - Weapon shake animation
- `@keyframes pulse` - Winner pulse effect
- `@keyframes fadeIn` - Container fade-in effect

## 🔧 Technical Details :

### Built With
- **HTML5** - Structure and content
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6)** - Game logic and interactivity

### Key JavaScript Features
- Event listeners for user interactions
- DOM manipulation for dynamic content updates
- Async timing functions for countdown and animations
- Responsive game state management

### CSS Features
- Flexbox layout for responsive design
- CSS animations and transitions
- Media queries for mobile optimization
- Modern styling with shadows and gradients

## 📱 Responsive Design :

The game is fully responsive and adapts to different screen sizes:
- **Desktop** (1000px+): Full layout with large images
- **Tablet** (700px-1000px): Adjusted spacing and image sizes
- **Mobile** (550px-700px): Optimized for smaller screens
- **Small Mobile** (400px-550px): Stacked layout for tiny screens

## 🐛 Troubleshooting :

### Images Not Loading
- Ensure all image files are in the `images/` directory
- Check that image filenames match exactly: `rock.png`, `paper.png`, `scissors.png`
- Verify file paths are correct in the HTML and JavaScript

### Game Not Responding
- Check browser console for JavaScript errors
- Ensure all files are in the same directory
- Try refreshing the browser page

## 🤝 Contributing :

Contributions are welcome! Here are some ways you can help:

1. **Bug Reports**: Found a bug? Open an issue with details
2. **Feature Requests**: Have an idea? Share it in the issues section
3. **Code Improvements**: Submit pull requests with enhancements
4. **Documentation**: Help improve this README or add code comments

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🌐 Browser Support :

The project supports all modern browsers including:

- Chrome
- Firefox
- Safari
- Edge

## 🎉 Acknowledgments :

- Game icons and design inspiration from modern web UI trends
- Animations inspired by classic arcade games
- Responsive design patterns from modern web development

## 📄 License :

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact :

Have questions or suggestions? Feel free to reach out:

- **Author**: ANASS EL HARAZI
- **Email**:  [anaswins35@gmail.com](mailto:anaswins35@gmail.com)
- **GitHub**: [@RTHILAA](https://github.com/RTHILAA)
- **LinkedIn**: [ANASS EL HARAZI](https://www.linkedin.com/in/anasselharazi/)

---

**Enjoy playing Rock Paper Scissors!** 🎮✨
