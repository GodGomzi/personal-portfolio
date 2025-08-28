Personal Portfolio Website
A clean, responsive, and fully containerized personal portfolio website built with React and Node.js. This project is automatically deployed to Vercel using a CI/CD pipeline established with GitHub Actions.

Description
This project is a comprehensive single-page application designed to showcase my skills and projects. It serves as a practical demonstration of modern web development concepts, including component-based frontend architecture, backend server setup, containerization with Docker, and automated deployment workflows. The entire development and deployment process was a valuable learning experience in troubleshooting real-world issues, particularly regarding file pathing and case-sensitivity in different operating environments.

Key Features

Component-Based: Built with reusable React components for a modular and maintainable codebase.

Containerized: A multi-stage Dockerfile creates a lightweight, production-ready image.

Automated CI/CD: Every push to the main branch automatically triggers a new deployment to Vercel via GitHub Actions.

Tech Stack
Frontend: React, HTML5, CSS3

Backend: Node.js, Express

DevOps: Docker, GitHub Actions

Deployment: Vercel

Getting Started Locally
To get a local copy up and running, follow these simple steps.

Prerequisites
You need to have Node.js and npm installed on your machine.

Node.js

Installation & Setup
Clone the repository:
Bash
git clone [(https://github.com/GodGomzi/personal-portfolio.git)]

Navigate to the project directory:
Bash
cd personal-portfolio

Install Frontend Dependencies:
Bash
cd frontend
npm install

Run the Frontend Development Server:
Bash
npm start
This will open the application in your browser at http://localhost:3000.

Acknowledgements
Create React App
Vercel for seamless hosting.
The open-source community for the actions and packages used.
