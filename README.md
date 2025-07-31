Currency Converter App
Overview
This is a currency converter web application that fetches real-time exchange rates from an external API and allows users to convert amounts between different currencies. The app is designed to serve a practical purpose by providing accurate and up-to-date currency conversion, improving user experience with sorting and filtering features.

The application is built with HTML, CSS, and JavaScript (originally developed on CodePen) and deployed using Docker containers with load balancing on two web servers (web01 and web02) behind an HAProxy load balancer (lb-01).

Features
Fetches live exchange rates using an external currency exchange API.

User-friendly interface with currency selection and amount input.

Error handling for API failures or invalid input.

Deployed on two web servers for reliability and scalability.

HAProxy load balancer distributes incoming traffic evenly between servers.

Technologies Used
Frontend: HTML, CSS, JavaScript

External API: Specify the currency API you used, e.g., ExchangeRate-API

Web server: Nginx (inside Docker container)

Containerization: Docker

Load Balancer: HAProxy

Setup & Deployment Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/GLOR205/currency_conversion.git
cd currency_conversion
2. Build Docker image locally
bash
Copy
Edit
docker build -t gloria992/currency-app:v1 .
3. Run locally for testing
bash
Copy
Edit
docker run -p 8080:8080 gloria992/currency-app:v1
Open browser at http://localhost:8080

4. Push Docker image to Docker Hub
bash
Copy
Edit
docker login
docker push gloria992/currency-app:v1
5. Deploy on Web Servers
SSH into web01 (3.83.217.96) and web02 (52.202.74.153), then run:

bash
Copy
Edit
docker pull gloria992/currency-app:v1
docker run -d --name currency-app --restart unless-stopped -p 8080:8080 gloria992/currency-app:v1
6. Configure HAProxy on Load Balancer (lb-01)
Edit /etc/haproxy/haproxy.cfg to include:

haproxy
Copy
Edit
frontend http_front
    bind *:80
    default_backend webapps

backend webapps
    balance roundrobin
    server web01 3.83.217.96:8080 check
    server web02 52.202.74.153:8080 check
Reload HAProxy:

bash
Copy
Edit
docker exec -it lb-01 sh -c 'haproxy -sf $(pidof haproxy) -f /etc/haproxy/haproxy.cfg'
Testing Load Balancer
From your local machine or another terminal, run:

bash
Copy
Edit
curl http://<lb-01-IP>
Repeat several times; you should see responses alternating between web01 and web02.

Handling API Keys and Security
API keys are stored in environment variables (do not hardcode in code).

For deployment, sensitive keys are passed via Docker environment variables or Docker secrets.

Ensure .gitignore excludes files containing secrets.

Challenges Faced
Ensuring the container listens on the configurable port 8080.

Configuring HAProxy to balance traffic correctly between the two web servers.

Handling API rate limits and ensuring robust error handling for failed API calls.

Credits
Currency exchange rates API by ExchangeRate-API

Docker and HAProxy official documentation for deployment setup.

Demo Video
Watch the demo showcasing the local app functionality and load-balanced deployment here:
[]

