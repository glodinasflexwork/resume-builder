// Update all API routes to use the correct Next.js 15 handler signature with Promise-based params
// and properly await the params before accessing properties
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    
    // In a real app, we would generate a PDF export of the resume
    return Response.json({
      id: id,
      url: `/exports/resume-${id}.pdf`,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error exporting resume:', error);
    return Response.json({ error: 'Failed to export resume' }, { status: 500 });
  }
}
