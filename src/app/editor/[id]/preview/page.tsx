import React from 'react';

// Update page component to use the correct Next.js 15 handler signature with Promise-based params
export default async function PreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resume Preview</h1>
      <p>Previewing resume ID: {id}</p>
      
      <div className="mt-8 border rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">John Doe</h2>
          <div>
            <p>john.doe@example.com</p>
            <p>+1234567890</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold">Summary</h3>
          <p>Experienced software developer with a passion for creating user-friendly applications.</p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold">Experience</h3>
          <div className="ml-4">
            <p className="font-medium">Senior Developer - Tech Solutions Inc.</p>
            <p className="text-sm">Jan 2020 - Present</p>
            <p>Leading development team and implementing new features.</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold">Education</h3>
          <div className="ml-4">
            <p className="font-medium">Bachelor of Science in Computer Science</p>
            <p className="text-sm">University of California, Berkeley</p>
            <p className="text-sm">2012 - 2016</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2 ml-4">
            <span className="bg-gray-200 px-2 py-1 rounded">JavaScript</span>
            <span className="bg-gray-200 px-2 py-1 rounded">React</span>
            <span className="bg-gray-200 px-2 py-1 rounded">Node.js</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Edit Resume
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Export PDF
        </button>
      </div>
    </div>
  );
}
