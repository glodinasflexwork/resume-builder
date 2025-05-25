import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume Builder - Create Professional Resumes',
  description: 'Build and customize your professional resume with our easy-to-use resume builder.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Create professional resumes in minutes
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Our resume builder helps you create a professional resume that showcases your skills and experience.
                Choose from multiple templates and customize every detail to make your resume stand out.
              </p>
              <div className="mt-8">
                <a
                  href="/templates"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Choose a Template
                </a>
                <a
                  href="/dashboard"
                  className="ml-4 inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  My Resumes
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-4 text-center">Resume Preview</div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900">Features</h3>
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-blue-600 text-xl mb-2">Professional Templates</div>
                <p className="text-gray-600">
                  Choose from a variety of professional templates designed to impress employers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-blue-600 text-xl mb-2">Easy Customization</div>
                <p className="text-gray-600">
                  Customize every section of your resume to highlight your unique skills and experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-blue-600 text-xl mb-2">PDF Export</div>
                <p className="text-gray-600">
                  Download your resume as a PDF file ready to be sent to potential employers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Resume Builder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
