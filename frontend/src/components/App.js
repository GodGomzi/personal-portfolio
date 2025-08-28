// src/App.js
import React from 'react';
import './components/App.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I am a passionate developer eager to build and deploy modern web applications. 
            This portfolio was built to showcase my skills in React, Node.js, AWS, and DevOps practices.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-list">
            {/* This is the project you are talking about in the interview! */}
            <ProjectCard 
              title="Personal Portfolio Website"
              description="Designed and deployed a responsive portfolio website to showcase projects and skills."
              tech="React, Node.js, AWS S3 & EC2, Docker, GitHub Actions"
            />
            {/* Add more ProjectCard components here as you build more projects */}
            <ProjectCard 
              title="Future Project 1"
              description="A brief description of another project you plan to build."
              tech="Example: Python, Flask, PostgreSQL"
            />
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js & Express</li>
            <li>HTML & CSS</li>
            <li>AWS (S3, EC2)</li>
            <li>Docker</li>
            <li>CI/CD (GitHub Actions)</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>You can reach me at: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
        </section>
      </main>

      <footer>
        <p>© 2025 Your Name</p>
      </footer>
    </div>
  );
}

export default App;