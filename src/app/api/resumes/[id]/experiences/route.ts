import { type NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    
    // In a real app, we would fetch experiences from the database
    return new Response(JSON.stringify({
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
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch experiences' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    const body = await request.json();
    
    // Validate required fields
    if (!body.position || !body.company) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // In a real app, we would create an experience in the database
    return new Response(JSON.stringify({
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
    }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating experience:', error);
    return new Response(JSON.stringify({ error: 'Failed to create experience' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
