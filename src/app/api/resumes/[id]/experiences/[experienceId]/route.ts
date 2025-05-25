// Update all API routes to use the correct Next.js 15 handler signature
export async function GET(
  request: Request,
  { params }: { params: { id: string, experienceId: string } }
) {
  try {
    const resumeId = params.id;
    const experienceId = params.experienceId;
    
    // In a real app, we would fetch the experience from the database
    return Response.json({
      id: experienceId,
      resumeId: resumeId,
      position: 'Senior Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      startDate: '2020-01-01',
      endDate: null,
      current: true,
      description: 'Leading development team and implementing new features.',
      order: 0
    });
  } catch (error) {
    console.error('Error fetching experience:', error);
    return Response.json({ error: 'Failed to fetch experience' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string, experienceId: string } }
) {
  try {
    const resumeId = params.id;
    const experienceId = params.experienceId;
    const body = await request.json();
    
    // Validate required fields
    if (!body.position || !body.company) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // In a real app, we would update the experience in the database
    return Response.json({
      id: experienceId,
      resumeId: resumeId,
      position: body.position,
      company: body.company,
      location: body.location || '',
      startDate: body.startDate || null,
      endDate: body.endDate || null,
      current: body.current || false,
      description: body.description || '',
      order: body.order || 0
    });
  } catch (error) {
    console.error('Error updating experience:', error);
    return Response.json({ error: 'Failed to update experience' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string, experienceId: string } }
) {
  try {
    const resumeId = params.id;
    const experienceId = params.experienceId;
    
    // In a real app, we would delete the experience from the database
    return Response.json({
      message: `Experience ${experienceId} deleted successfully`
    });
  } catch (error) {
    console.error('Error deleting experience:', error);
    return Response.json({ error: 'Failed to delete experience' }, { status: 500 });
  }
}
