.

💱 Currency Conversion
Hi! I’m Gloria, and this is my full-stack currency converter app. It lets you convert between over 100 currencies in real time using the ExchangeRate-API. I built this project from scratch to learn and demonstrate how frontend and backend services can work together.

🌐 Live Demo
Here’s where you can check it out live:

Frontend (Vercel):
🔗 https://y-exj2fyas7-gloria-muhorakeyes-projects.vercel.app/

Backend (Render):
🔗 https://currency-conversion-6686.onrender.com

🎥 Walkthrough Video
If you want to see how it works, here's a short demo video I made:
https://youtu.be/nQT-U7X6cBQ


📁 Project Structure
Copy
Edit
currency-converter/
├── backend/
│   ├── server.js          # Express server with API endpoints
│   ├── package.json       # Dependencies and scripts
│   ├── .env               # Environment variables
│   └── Dockerfile         # Docker config (optional)
├── frontend/
│   ├── index.html         # HTML structure
│   ├── script.js          # JS logic for currency conversion
│   ├── style.css          # Styling and responsiveness
│   └── vercel.json        # Vercel deployment config
└── README.md              # Project documentation
✨ Features
🌍 Real-time exchange rates

💱 Convert between 100+ currencies

🔄 One-click currency swap

⚡ Debounced input (auto-converts smoothly)

📱 Fully responsive (works on mobile and desktop)

📡 Offline/online detection so users are aware of connectivity

🧰 Tech Stack
Backend
Node.js + Express

Axios for making API requests

dotenv for handling environment variables

CORS for cross-origin support

Frontend
HTML, CSS, JavaScript (vanilla)

Responsive design (no frameworks)

🔌 API Endpoints
Endpoint	Method	Description
/api/currencies	GET	List all supported currencies
/api/convert	POST	Convert currency based on amount

Here’s an example of the JSON payload for conversion:

json
Copy
Edit
{
  "amount": 100,
  "from": "USD",
  "to": "EUR"
}
🚀 How to Run It Locally
🖥 Backend
Clone the project and install dependencies:

bash
Copy
Edit
git clone <repository-url>
cd currency-converter/backend
npm install
Create a .env file in the backend folder and add:

ini
Copy
Edit
PORT=3000
EXCHANGE_API_KEY=your_api_key_here
NODE_ENV=development
Start the server:

bash
Copy
Edit
npm start
or for development
npm run dev


🌐 Frontend
Go to the frontend folder:

bash
Copy
Edit
cd ../frontend
You can just open index.html in your browser or use a live server like VS Code Live Server.

🌍 Deployment
🔧 Backend (Render)
I deployed the backend to Render and set up the environment variables there.

Build command: npm install

Start command: npm start

🎯 Frontend (Vercel)
I updated the API URL in script.js to point to my Render backend.

Then deployed the frontend to Vercel using the Vercel CLI.

📦 Dependencies
json
Copy
Edit
"dependencies": {
  "axios": "^1.7.7",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.21.2"
},
"devDependencies": {
  "nodemon": "^3.1.10"
}
📄 License
MIT License
 HEAD
Built with ❤️ using ExchangeRate-API, Express.js, and pure JavaScript.


Thanks for checking out my project! 😊
If you have feedback or suggestions, feel free to reach out.
