// Update all API routes to use the correct Next.js 15 handler signature
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    
    // In a real app, we would fetch skills from the database
    return Response.json({
      skills: [
        {
          id: '1',
          resumeId: resumeId,
          name: 'JavaScript',
          level: 'Expert',
          order: 0
        },
        {
          id: '2',
          resumeId: resumeId,
          name: 'React',
          level: 'Expert',
          order: 1
        },
        {
          id: '3',
          resumeId: resumeId,
          name: 'Node.js',
          level: 'Advanced',
          order: 2
        }
      ]
    });
  } catch (error) {
    console.error('Error fetching skills:', error);
    return Response.json({ error: 'Failed to fetch skills' }, { status: 500 });
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
    if (!body.name) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // In a real app, we would create a skill in the database
    return Response.json({
      id: '4',
      resumeId: resumeId,
      name: body.name,
      level: body.level || 'Intermediate',
      order: body.order || 0
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating skill:', error);
    return Response.json({ error: 'Failed to create skill' }, { status: 500 });
  }
}
