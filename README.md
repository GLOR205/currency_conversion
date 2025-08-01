:

🌐 Currency Conversion — Live Deployment
A full-stack currency converter application that provides real-time exchange rates and currency conversion functionality using the ExchangeRate-API.

🔗 Live Links
Frontend (Vercel): https://y-exj2fyas7-gloria-muhorakeyes-projects.vercel.app/

Backend (Render): https://currency-conversion-6686.onrender.com
Demo Live video
Youtube Link: 
📁 Project Structure
bash
Copy
Edit
currency-converter/
├── backend/
│   ├── server.js          # Express server with API endpoints
│   ├── package.json       # Backend dependencies and scripts
│   ├── .env               # Environment variables (API keys, etc.)
│   └── Dockerfile         # Docker configuration (optional)
├── frontend/
│   ├── index.html         # Main HTML file
│   ├── script.js          # Frontend JavaScript logic
│   ├── style.css          # Styling and responsive design
│   └── vercel.json        # Vercel deployment configuration
└── README.md              # Project documentation
🚀 Features
🌍 Real-time currency exchange rates from ExchangeRate-API

💱 Convert between 100+ currencies

🔄 Currency swap functionality

📱 Fully responsive (mobile-first)

⚡ Debounced input for smooth UX

📡 Offline/online status detection

🛠 Tech Stack
Backend
Node.js & Express.js

Axios

dotenv

CORS

Frontend
HTML5, CSS3, JavaScript (Vanilla)

Responsive Design (no framework)

🔧 API Endpoints
Endpoint	Method	Description
/api/currencies	GET	Get supported currency list
/api/convert	POST	Convert currency amounts

Example Payload:

json
Copy
Edit
{
  "amount": 100,
  "from": "USD",
  "to": "EUR"
}
🚀 Deployment Instructions
✅ Backend (Render)
URL: https://currency-conversion-6686.onrender.com

Setup:

Build command: npm install

Start command: npm start

Environment:

EXCHANGE_API_KEY=your_key

NODE_ENV=production

✅ Frontend (Vercel)
URL: https://y-exj2fyas7-gloria-muhorakeyes-projects.vercel.app/

Steps:

Update API_BASE_URL in script.js to your Render backend URL

Run vercel from the /frontend directory
