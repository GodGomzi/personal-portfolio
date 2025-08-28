// src/components/ProjectCard.js
import React from 'react';

// This is a reusable component for showcasing each project.
// It takes 'title', 'description', and 'tech' as props.
function ProjectCard({ title, description, tech }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Technologies:</strong> {tech}</p>
    </div>
  );
}

export default ProjectCard;