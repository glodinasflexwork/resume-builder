// Update all API routes to use the correct Next.js 15 handler signature with Promise-based params
// and properly await the params before accessing properties
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    
    // In a real app, we would fetch the resume from the database
    return Response.json({
      id: id,
      title: 'Software Developer Resume',
      userId: 'user123',
      templateId: 'brussels',
      colorScheme: 'default',
      createdAt: '2025-05-20T10:00:00Z',
      updatedAt: '2025-05-25T10:00:00Z'
    });
  } catch (error) {
    console.error('Error fetching resume:', error);
    return Response.json({ error: 'Failed to fetch resume' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const body = await request.json();
    
    // In a real app, we would update the resume in the database
    return Response.json({
      id: id,
      title: body.title || 'Untitled Resume',
      userId: 'user123',
      templateId: body.templateId || 'brussels',
      colorScheme: body.colorScheme || 'default',
      createdAt: '2025-05-20T10:00:00Z',
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating resume:', error);
    return Response.json({ error: 'Failed to update resume' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    
    // In a real app, we would delete the resume from the database
    return Response.json({
      message: `Resume ${id} deleted successfully`
    });
  } catch (error) {
    console.error('Error deleting resume:', error);
    return Response.json({ error: 'Failed to delete resume' }, { status: 500 });
  }
}
