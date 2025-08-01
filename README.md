💱 Currency Conversion


A full-stack currency converter that provides real-time exchange rates and currency conversion functionality using the ExchangeRate-API.

🌐 Live Demo

Frontend (Vercel)
🔗 https://y-exj2fyas7-gloria-muhorakeyes-projects.vercel.app/

Backend (Render)
🔗 https://currency-conversion-6686.onrender.com

🗂️ Project Structure

bash
Copy
Edit
currency-converter/
├── backend/
│   ├── server.js          # Express server with API endpoints
│   ├── package.json       # Backend dependencies and scripts
│   ├── .env               # Environment variables
│   └── Dockerfile         # Docker config (optional)
├── frontend/
│   ├── index.html         # Main HTML file
│   ├── script.js          # JavaScript logic
│   ├── style.css          # Styles and responsiveness
│   └── vercel.json        # Vercel deployment config
└── README.md              # Documentation


🚀 Features
🌍 Real-time exchange rates from ExchangeRate-API

💱 Convert between 100+ currencies

🔄 Currency swap functionality

⚡ Debounced input for smooth conversion

📱 Mobile-responsive design

📡 Detects online/offline status



🛠️ Tech Stack
Backend
Node.js & Express.js – API server

Axios – HTTP client

CORS – Cross-origin support

dotenv – Environment configuration



Frontend
HTML5 / CSS3 / JavaScript (Vanilla)

Responsive and mobile-first layout



📡 API Endpoints
Endpoint	Method	Description
/api/currencies	GET	Get list of supported currencies
/api/convert	POST	Convert currency amount


Example Payload:

json
Copy
Edit
{
  "amount": 100,
  "from": "USD",
  "to": "EUR"
}


🧪 Getting Started Locally
✅ Backend Setup
Clone the repo and install dependencies:

bash
Copy
Edit
git clone <repository-url>
cd currency-converter/backend
npm install
Create a .env file:

ini
Copy
Edit
PORT=3000
EXCHANGE_API_KEY=your_exchangerate_api_key
NODE_ENV=development
Start the server:

bash
Copy
Edit
npm start        # or npm run dev
✅ Frontend Setup
Navigate to the frontend folder:

bash
Copy
Edit
cd ../frontend
Open index.html in your browser, or serve using a local dev server.

🚀 Deployment Guide
🔧 Backend (Render)
Connect your GitHub repo to Render

Add environment variables:

ini
Copy
Edit
EXCHANGE_API_KEY=your_key
NODE_ENV=production
Set:

Build Command: npm install

Start Command: npm start

🎯 Frontend (Vercel)
Update API_BASE_URL in script.js to point to your Render backend.

Deploy with Vercel CLI:

bash
Copy
Edit
cd frontend
vercel


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
Built with ❤️ using ExchangeRate-API, Express.js, and pure JavaScript.

