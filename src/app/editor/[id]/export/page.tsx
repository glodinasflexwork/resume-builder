import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PDF Export - Resume Builder',
  description: 'Export your resume to PDF.',
};

export default function ExportPDF({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Export Resume</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden p-6">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="mt-2 text-lg font-medium text-gray-900">Your resume is ready!</h2>
            <p className="mt-1 text-sm text-gray-500">
              Your resume has been successfully generated and is ready for download.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Download PDF
              </button>
              <a
                href={`/editor/${params.id}`}
                className="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Back to Editor
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
