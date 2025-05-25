import React from 'react';
import { Metadata } from 'next';

// Update page component to use the correct Next.js 15 handler signature with Promise-based params
export default async function ExportPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Export Resume</h1>
      <p>Preparing export options for resume ID: {id}</p>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Export Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-4 hover:shadow-md cursor-pointer">
            <h3 className="font-bold">PDF</h3>
            <p>Export your resume as a PDF document</p>
          </div>
          <div className="border rounded p-4 hover:shadow-md cursor-pointer">
            <h3 className="font-bold">DOCX</h3>
            <p>Export your resume as a Word document</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Download
        </button>
      </div>
    </div>
  );
}
