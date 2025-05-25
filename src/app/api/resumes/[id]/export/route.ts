// Update all API routes to use the correct Next.js 15 handler signature with Promise-based params
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    
    // In a real app, we would fetch export options from the database
    return Response.json({
      formats: ['pdf', 'docx'],
      defaultFormat: 'pdf'
    });
  } catch (error) {
    console.error('Error fetching export options:', error);
    return Response.json({ error: 'Failed to fetch export options' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const body = await request.json();
    
    // In a real app, we would generate a PDF and return it
    return Response.json({
      url: `/api/resumes/${id}/export/download`,
      format: body.format || 'pdf',
      message: 'Export successful'
    });
  } catch (error) {
    console.error('Error exporting resume:', error);
    return Response.json({ error: 'Failed to export resume' }, { status: 500 });
  }
}
