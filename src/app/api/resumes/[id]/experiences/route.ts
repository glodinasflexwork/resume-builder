// Update all API routes to use the correct Next.js 15 handler signature
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    
    // In a real app, we would fetch experiences from the database
    return Response.json({
      experiences: [
        {
          id: '1',
          resumeId: resumeId,
          position: 'Senior Developer',
          company: 'Tech Solutions Inc.',
          location: 'San Francisco, CA',
          startDate: '2020-01-01',
          endDate: null,
          current: true,
          description: 'Leading development team and implementing new features.',
          order: 0
        }
      ]
    });
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return Response.json({ error: 'Failed to fetch experiences' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    const body = await request.json();
    
    // Validate required fields
    if (!body.position || !body.company) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // In a real app, we would create an experience in the database
    return Response.json({
      id: '2',
      resumeId: resumeId,
      position: body.position,
      company: body.company,
      location: body.location || '',
      startDate: body.startDate || null,
      endDate: body.endDate || null,
      current: body.current || false,
      description: body.description || '',
      order: body.order || 0
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating experience:', error);
    return Response.json({ error: 'Failed to create experience' }, { status: 500 });
  }
}
