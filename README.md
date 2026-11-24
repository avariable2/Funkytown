# Funkytown

[Repository](https://github.com/avariable2/Funkytown)

**Funkytown** is a browser-based arcade game built with Angular and Phaser 3. Guide your character through a vibrant cityscape, collect tokens, and avoid obstacles to achieve the highest score!

---

## 🎮 Features

- **Engaging Gameplay**
  - Move your character with arrow keys (desktop) or swipe/touch (mobile)
  - Collect tokens and power-ups across multiple levels
- **Scoring System**
  - Real-time score display
  - High-score tracking using localStorage
- **Level Progression**
  - Increasing difficulty with new obstacles and faster pace
- **Responsive Design**
  - Optimized for both desktop and mobile screens

---

## 🛠 Technology Stack

- **Angular 12** – SPA framework
- **Phaser 3** – Game engine
- **TypeScript**, **HTML5**, **SCSS**
- **RxJS** – Reactive programming
- **jQuery** – DOM utilities

---

## ⚙️ Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/avariable2/funkytown.git
   cd funkytown

2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Launch in development mode**

   ```bash
   ng serve
   ```
4. **Play the game**
   Open your browser at: `http://localhost:4200/game`

---

## 🚀 Production Build

```bash
ng build --configuration production
```

Compiled files are output to `dist/funkytown`.

You can serve this folder on any static hosting provider.

---

## 📂 Project Structure

```text
funkytown/
├── src/
│   ├── app/
│   │   ├── game/        # Phaser game component and assets
│   │   └── ...          # Other features
│   ├── assets/          # Images, spritesheets, audio
│   ├── environments/    # Dev/prod configurations
│   └── index.html       # Entry point
├── angular.json         # Angular CLI settings
├── package.json         # NPM scripts & dependencies
└── README.md            # This file
```

---

## 🎲 How to Play

1. Start the game and wait for assets to load.
2. Use **arrow keys** or **touch controls** to move.
3. Collect **tokens** while dodging obstacles.
4. Aim for a new **high score**!

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.


[Repository](https://github.com/avariable2/Funkytown)


