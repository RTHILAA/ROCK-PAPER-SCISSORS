# Rock Paper Scissors Game :

A classic Rock Paper Scissors game built with HTML, CSS, and JavaScript. Play against the computer and see who wins!

## 🎯 Live Demo : 

🔗 [Rock Paper Scissors](https://game-rock-paper-scissors1.netlify.app/)

We would appreciate it if you decide to use this project. Please include credit when using it. Thank you! 🙏 

## 🎮 Features :

- **Interactive Gameplay**: Click on your choice to play against the computer
- **Visual Feedback**: Images display both player and computer choices
- **Automatic Results**: Instant win/lose/draw determination
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Auto Restart**: Game automatically restarts after each round
- **Smooth Animations**: Hover effects and transitions for better user experience

## 🚀 How to Play :

1. Open `index.html` in your web browser
2. Click on one of the three choices at the bottom:
   - ✊ Rock
   - ✋ Paper
   - ✌️ Scissors
3. The computer will automatically make its choice
4. The result will be displayed in the center
5. The game will automatically restart after a few seconds

## 🏆 Game Rules :

- **Rock** beats **Scissors**
- **Scissors** beats **Paper**
- **Paper** beats **Rock**
- Same choices result in a **Draw**

## 📁 Project Structure :

```
rock-paper-scissors/
│
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── app.js             # Game logic and functionality
├── README.md          # Project documentation
│
└── images/            # Game assets
    ├── rock.png
    ├── paper.png
    └── scissors.png
```

## 🛠️ Technologies Used :

- **HTML5**: Structure and markup
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6)**: Game logic and interactivity
- **Google Fonts**: Poppins font family

## 💻 Installation & Setup :

1. **Clone or download** the project files
2. **Ensure all files** are in the same directory structure as shown above
3. **Add images**: Make sure you have the following images in an `images/` folder:
   - `rock.png`
   - `paper.png` 
   - `scissors.png`
4. **Open** `index.html` in any modern web browser

## 🎨 Customization :

### Styling :
- Modify `style.css` to change colors, fonts, or layout
- The current theme uses a blue gradient background
- Responsive breakpoints are set for 1000px, 700px, and 550px

### Game Logic :
- Adjust timing in `app.js`:
  - Change `700` (line 52) to modify dot animation speed
  - Change `2200` (line 55) to modify auto-restart delay
- Modify the `check()` function to change game rules

### Images :
- Replace images in the `images/` folder with your own
- Ensure images are named: `rock.png`, `paper.png`, `scissors.png`
- Recommended image size: 130x120 pixels

## 📱 Responsive Design :

The game is fully responsive and adapts to different screen sizes:

- **Desktop**: Full-sized interface with large images and text
- **Tablet** (≤1000px): Slightly adjusted container width
- **Mobile** (≤700px): Smaller images and optimized layout
- **Small Mobile** (≤550px): Compact design with adjusted font sizes

## 🐛 Known Issues :

- The game uses `location.reload()` for restarting, which might cause a brief flash
- Pointer events are disabled during result display to prevent multiple clicks

## 🔮 Future Enhancements :

- Add score tracking across multiple rounds
- Implement best-of-X game modes
- Add sound effects and animations
- Create difficulty levels with different AI strategies
- Add multiplayer functionality

## 🤝 Contributing :

Feel free to fork this project and submit pull requests for any improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🌐 Browser Support :

The project supports all modern browsers including:

- Chrome
- Firefox
- Safari
- Edge

## 📄 License :

This project is open-source and available under the [MIT License](LICENSE).

## 📞 Contact :

For inquiries, please reach out to:

- 👨🏻‍💻 **Name** : ANASS EL HARAZI
- 📧 **Email** : [anaswins35@gmail.com](mailto:anaswins35@gmail.com)

Thank you for visiting Rock Paper Scissors Game  ❤
