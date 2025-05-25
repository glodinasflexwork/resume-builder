import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Resume Builder',
  description: 'Manage your resumes',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">My Resumes</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Your saved resumes</h2>
              <p className="text-sm text-gray-500">Create, edit, and manage your resumes</p>
            </div>
            <a
              href="/templates"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Create New Resume
            </a>
          </div>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {/* Example resume item */}
              <li>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-xs text-gray-500">PDF</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600 truncate">Software Developer Resume</p>
                        <p className="text-sm text-gray-500">Last edited: May 20, 2025</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href="/editor/1"
                        className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Edit
                      </a>
                      <a
                        href="/editor/1/preview"
                        className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Preview
                      </a>
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              
              {/* Empty state */}
              <li className="hidden">
                <div className="px-4 py-12 sm:px-6 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No resumes</h3>
                  <p className="mt-1 text-sm text-gray-500">Get started by creating a new resume.</p>
                  <div className="mt-6">
                    <a
                      href="/templates"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Create your first resume
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
