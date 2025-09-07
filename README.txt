📖 Daily Grind Motivator

Daily Grind Motivator is a cross-platform desktop app built with React and Electron that delivers motivational quotes to keep you inspired throughout your day.

------------------------------------------------------------
🚀 Features
------------------------------------------------------------
- 🧘 Daily Motivation – Get uplifting quotes each time you open the app.
- ⚡ Cross-platform – Runs on Linux, Windows, and macOS.
- 🎨 Modern UI – Clean interface powered by React.
- 📦 Packaged with Electron – Easy installation as a desktop application.

------------------------------------------------------------
🛠️ Tech Stack
------------------------------------------------------------
- React – Frontend
- Electron – Desktop wrapper
- Electron Builder – Packaging & distribution

------------------------------------------------------------
📦 Installation
------------------------------------------------------------

From Source:

1. Clone the repository:
   git clone https://github.com/your-username/daily-grind-motivator.git
   cd daily-grind-motivator

2. Install dependencies:
   npm install

3. Run in development mode (React only):
   npm start

4. Launch Electron with the built React app:
   npm run electron

------------------------------------------------------------
🔨 Building the App
------------------------------------------------------------
To package the app into a distributable format:

1. Build the React frontend:
   npm run build

2. Package into an AppImage (Linux):
   npm run dist

The packaged .AppImage file will be located in the dist/ folder.

⚠️ For Windows/macOS, modify the package.json build section accordingly and run npm run dist.

------------------------------------------------------------
📁 Project Structure
------------------------------------------------------------
daily-grind-motivator/
├── build/              # React production build (after npm run build)
├── public/             # Static assets (app icon, manifest)
├── src/                # React source code
├── main.js             # Electron main process
├── package.json        # Dependencies & scripts
└── README.txt          # Project documentation

------------------------------------------------------------
🖼️ App Icon
------------------------------------------------------------
- Located at: public/icon.png
- Format: 512×512 PNG (required for packaging).

------------------------------------------------------------
👨‍💻 Author
------------------------------------------------------------
Created with ❤️ by Gift

------------------------------------------------------------
📜 License
------------------------------------------------------------
This project is licensed under the MIT License – feel free to use and modify it.
