import React from 'react';
import './App.css';
import Header from './components/Header.js';
import ProjectCard from './components/ProjectCard.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="projects">
          <h2>Projects</h2>
          <ProjectCard 
            title="Personal Portfolio Website"
            description="A responsive portfolio to showcase my skills."
            tech="React, Vercel, GitHub Actions"
          />
        </section>
      </main>
    </div>
  );
}

export default App;