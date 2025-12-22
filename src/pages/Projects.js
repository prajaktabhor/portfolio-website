import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
      <p className="mt-2 text-gray-600">Selected work and demos.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </main>
  );
}
