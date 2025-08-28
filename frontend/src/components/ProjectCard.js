import React from 'react';

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