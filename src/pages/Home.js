import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="inline-block text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">WELCOME TO MY WORLD</p>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Hi, I'm <span className="text-blue-600">Prajakta Bhor</span> Frontend Web Developer.
Based in India..
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            I design and build responsive user interfaces with a focus on performance and accessibility. My stack: React, Tailwind CSS, and modern web tooling.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
            >
              View projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              Contact me
            </a>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700">Skills</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {['React','Tailwind CSS','HTML','CSS','Accessibility','Performance'].map((s) => (
                <li key={s} className="px-3 py-1 bg-white rounded-lg text-sm shadow-sm">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-white shadow-lg flex items-center justify-center">
            <img src="/prajaktapic.jpg" alt="Prajakta" className="w-48 h-48 object-cover rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Selected projects</h2>
        <p className="mt-2 text-gray-600">A few highlights — click through for details.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 bg-gradient-to-r from-white to-gray-50 p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Want to work together?</h3>
            <p className="text-gray-600">I'm available for freelance or full-time roles — let's build something great.</p>
          </div>
          <div>
            <a href="/contact" className="inline-flex px-5 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">Get in touch</a>
          </div>
        </div>
      </section>
    </main>
  );
}
