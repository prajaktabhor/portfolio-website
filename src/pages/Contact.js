import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  // Replace the endpoint below with your Formspark endpoint, e.g.:
  // const FORMSPARK_ENDPOINT = 'https://submit.formspark.io/your-form-id'
  const FORMSPARK_ENDPOINT = 'REPLACE_WITH_FORMSPARK_ENDPOINT';

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Contact</h1>
      <p className="mt-2 text-gray-600">Get in touch — I usually reply within a few days.</p>

      <form
        action={FORMSPARK_ENDPOINT}
        method="POST"
        className="mt-6 bg-white p-6 rounded-lg shadow"
      >
        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Name</span>
            <input
              name="name"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              name="email"
              type="email"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Message</span>
            <textarea
              name="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
              required
            />
          </label>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Send
            </button>
            <small className="text-gray-500">Using FormSpark (replace endpoint)</small>
          </div>
        </div>
      </form>

      {status && <p className="mt-4">{status}</p>}
    </main>
  );
}
