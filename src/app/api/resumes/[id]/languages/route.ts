// Update all API routes to use the correct Next.js 15 handler signature with Promise-based params
// and properly await the params before accessing properties
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    
    // In a real app, we would fetch languages from the database
    return Response.json({
      languages: [
        {
          id: '1',
          resumeId: id,
          name: 'English',
          proficiency: 'Native',
          order: 0
        },
        {
          id: '2',
          resumeId: id,
          name: 'Spanish',
          proficiency: 'Intermediate',
          order: 1
        }
      ]
    });
  } catch (error) {
    console.error('Error fetching languages:', error);
    return Response.json({ error: 'Failed to fetch languages' }, { status: 500 });
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
    if (!body.name || !body.proficiency) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // In a real app, we would create a language in the database
    return Response.json({
      id: '3',
      resumeId: id,
      name: body.name,
      proficiency: body.proficiency,
      order: body.order || 0
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating language:', error);
    return Response.json({ error: 'Failed to create language' }, { status: 500 });
  }
}
