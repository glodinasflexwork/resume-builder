import { type NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    
    // In a real app, we would fetch languages from the database
    return new Response(JSON.stringify({
      languages: [
        {
          id: '1',
          resumeId: resumeId,
          name: 'English',
          proficiency: 'Native',
          order: 0
        },
        {
          id: '2',
          resumeId: resumeId,
          name: 'Spanish',
          proficiency: 'Intermediate',
          order: 1
        }
      ]
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching languages:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch languages' }), {
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
    if (!body.name || !body.proficiency) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // In a real app, we would create a language in the database
    return new Response(JSON.stringify({
      id: '3',
      resumeId: resumeId,
      name: body.name,
      proficiency: body.proficiency,
      order: body.order || 0
    }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating language:', error);
    return new Response(JSON.stringify({ error: 'Failed to create language' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
