import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume Preview - Resume Builder',
  description: 'Preview your resume before exporting.',
};

export default function Preview({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Resume Preview</h1>
          <div className="flex space-x-4">
            <a
              href={`/editor/${params.id}`}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Back to Editor
            </a>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Download PDF
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* This is a placeholder for the actual resume preview */}
          <div className="p-8 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">John Doe</h2>
              <p className="text-lg text-gray-600">Software Developer</p>
              <div className="mt-2 text-sm text-gray-500">
                <p>john.doe@example.com • +1 (555) 123-4567</p>
                <p>San Francisco, CA • United States</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 mb-3">Professional Summary</h3>
              <p className="text-gray-700">
                Experienced software developer with a strong background in web development and a passion for creating user-friendly applications. Skilled in JavaScript, React, and Node.js with a track record of delivering high-quality projects on time.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 mb-3">Experience</h3>
              <div className="mb-4">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Senior Developer</h4>
                    <p className="text-gray-600">Tech Solutions Inc.</p>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <p>Jan 2020 - Present</p>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
                <ul className="mt-2 text-gray-700 list-disc list-inside">
                  <li>Led a team of 5 developers in building a customer portal that increased user engagement by 40%</li>
                  <li>Implemented CI/CD pipelines that reduced deployment time by 60%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 mb-3">Education</h3>
              <div className="mb-4">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Bachelor of Science in Computer Science</h4>
                    <p className="text-gray-600">University of California, Berkeley</p>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <p>2012 - 2016</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Git</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 mb-3">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-900">English</p>
                  <p className="text-gray-600">Native</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Spanish</p>
                  <p className="text-gray-600">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
