import React from 'react';

export default function ProjectCard({ project }) {
  
  return (
    <article className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{project.description}</p>
      <div className="mt-4 flex gap-3">
        <a
          href={project.live}
          className="text-sm text-blue-600 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Live
        </a>
        <a
          href={project.repo}
          className="text-sm text-gray-700 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Repo
        </a>
      </div>
    </article>
  );
}
