import { type NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    
    // In a real app, we would fetch skills from the database
    return new Response(JSON.stringify({
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
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching skills:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch skills' }), {
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
    if (!body.name) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // In a real app, we would create a skill in the database
    return new Response(JSON.stringify({
      id: '4',
      resumeId: resumeId,
      name: body.name,
      level: body.level || 'Intermediate',
      order: body.order || 0
    }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating skill:', error);
    return new Response(JSON.stringify({ error: 'Failed to create skill' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
