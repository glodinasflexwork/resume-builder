// Update all API routes to use the correct Next.js 15 handler signature with Promise-based params
// and properly await the params before accessing properties
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    
    // In a real app, we would fetch educations from the database
    return Response.json({
      educations: [
        {
          id: '1',
          resumeId: id,
          institution: 'University of California',
          degree: 'Bachelor of Science',
          field: 'Computer Science',
          location: 'Berkeley, CA',
          startDate: '2012-09-01',
          endDate: '2016-05-31',
          current: false,
          description: 'Graduated with honors.',
          order: 0
        }
      ]
    });
  } catch (error) {
    console.error('Error fetching educations:', error);
    return Response.json({ error: 'Failed to fetch educations' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const body = await request.json();
    
    // Validate required fields
    if (!body.institution || !body.degree) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // In a real app, we would create an education in the database
    return Response.json({
      id: '2',
      resumeId: id,
      institution: body.institution,
      degree: body.degree,
      field: body.field || '',
      location: body.location || '',
      startDate: body.startDate || null,
      endDate: body.endDate || null,
      current: body.current || false,
      description: body.description || '',
      order: body.order || 0
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating education:', error);
    return Response.json({ error: 'Failed to create education' }, { status: 500 });
  }
}
