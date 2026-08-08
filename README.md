# 📖 Quote Generator

A beautiful, full-featured quote generator app built with **React Native** and **Expo**.  
Browse inspirational quotes, save your favorites, copy to clipboard, and share with friends – all with a clean dark/light theme and persistent storage.

<p align="center">
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/AsyncStorage-0078D4?style=for-the-badge&logo=javascript&logoColor=white" />
</p>

---

## ✨ Features

- 🎲 **Random Quotes** – Get a new quote with a single tap.
- 📂 **Category Filter** – Browse quotes by topics like *Inspiration, Motivation, Wisdom, Love, Life, Success*.
- ❤️ **Favorites** – Save quotes you love; they persist across app restarts using `AsyncStorage`.
- 🌗 **Dark / Light Theme** – Toggle between themes; your preference is saved locally.
- 📋 **Copy to Clipboard** – Copy any quote with one tap.
- 📤 **Share** – Share quotes via SMS, email, or any app using the native share sheet.
- 💬 **Toast Notifications** – Instant feedback for every action.
- 📱 **Expo Go Ready** – Runs flawlessly on both iOS and Android via Expo Go.
- 🧩 **Modular Code** – Cleanly separated components, hooks, and utilities for easy maintenance.

---

## 📸 Screenshots

| Light Mode | Dark Mode | Favorites Modal |
|------------|-----------|-----------------|
| ![Light](https://via.placeholder.com/300x600?text=Light+Mode) | ![Dark](https://via.placeholder.com/300x600?text=Dark+Mode) | ![Favorites](https://via.placeholder.com/300x600?text=Favorites) |

*(Replace placeholder images with actual screenshots)*

---

## 🛠️ Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Expo CLI** (installed globally or use `npx`)
- **Expo Go** app on your physical device ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

---

## 🚀 Installation & Setup

1. **Clone the repository** (or create the project from scratch):
   ```bash
   git clone https://github.com/yourusername/QuoteGenerator.git
   cd QuoteGenerator

   Install dependencies:

bash
npm install
Install Expo‑specific packages:

bash
npx expo install @react-native-async-storage/async-storage expo-clipboard @expo/vector-icons
Start the development server:

bash
npx expo start
Run on your device:

Android: Scan the QR code with the Expo Go app.

iOS: Scan the QR code with the Camera app, or open Expo Go and scan.

📁 Project Structure
text
QuoteGenerator/
├── App.js                     # Main entry point
├── app.json                   # Expo configuration
├── package.json               # Dependencies and scripts
├── src/
│   ├── components/
│   │   ├── QuoteCard.js       # Quote display + actions
│   │   ├── CategoryFilter.js  # Horizontal category buttons
│   │   ├── FavoritesModal.js  # Modal showing favorite quotes
│   │   └── Toast.js           # Animated toast notifications
│   ├── hooks/
│   │   └── useStorage.js      # Custom hook for AsyncStorage
│   ├── data/
│   │   └── quotes.js          # All quote data
│   ├── styles/
│   │   └── theme.js           # Light and dark theme definitions
│   └── utils/
│       └── helpers.js         # Filter and random helpers
└── README.md                  # This file
🧪 Technologies Used
React Native – Core UI framework

Expo – Development toolchain and runtime

AsyncStorage – Persistent local storage for favorites & theme

Expo Clipboard – Copy quotes to system clipboard

Expo Vector Icons – Beautiful icon set

React Native Share – Native sharing capabilities

🧰 Available Scripts
Command	Description
npx expo start	Starts the Metro bundler and Expo dev server.
npx expo start --android	Opens on Android emulator or connected device.
npx expo start --ios	Opens on iOS simulator or connected device.
npx expo start --web	Opens in web browser (experimental).
npx expo build:android	Builds an Android APK/AAB.
npx expo build:ios	Builds an iOS IPA.
🤝 Contributing
Contributions are welcome!
If you have ideas for new features, bug fixes, or improvements:

Fork the repository.

Create your feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📄 License
Distributed under the MIT License. See LICENSE for more information.

🙏 Acknowledgements
Quotes sourced from various public domains and curated for inspiration.

Built with ❤️ using Expo and React Native.

📬 Contact
Your Name – @yourtwitter – email@example.com
Project Link: https://github.com/yourusername/QuoteGenerator
