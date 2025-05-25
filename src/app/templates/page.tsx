import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Templates - Resume Builder',
  description: 'Choose a template for your resume',
};

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Choose a Template</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Template 1 - Brussels */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-4">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">Brussels Template</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">Brussels</h3>
                  <p className="mt-1 text-sm text-gray-500">A clean and professional template with a sidebar for key information.</p>
                  <div className="mt-4">
                    <a
                      href="/editor/new?template=brussels"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Use this template
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Template 2 - Prague */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-4">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">Prague Template</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">Prague</h3>
                  <p className="mt-1 text-sm text-gray-500">A modern template with a focus on skills and experience.</p>
                  <div className="mt-4">
                    <a
                      href="/editor/new?template=prague"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Use this template
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Template 3 - Shanghai */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-4">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">Shanghai Template</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">Shanghai</h3>
                  <p className="mt-1 text-sm text-gray-500">A minimalist template with a traditional layout.</p>
                  <div className="mt-4">
                    <a
                      href="/editor/new?template=shanghai"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Use this template
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
