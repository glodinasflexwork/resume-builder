import { type NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    
    // In a real app, we would fetch educations from the database
    return new Response(JSON.stringify({
      educations: [
        {
          id: '1',
          resumeId: resumeId,
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
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching educations:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch educations' }), {
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
    if (!body.institution || !body.degree) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // In a real app, we would create an education in the database
    return new Response(JSON.stringify({
      id: '2',
      resumeId: resumeId,
      institution: body.institution,
      degree: body.degree,
      field: body.field || '',
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
    console.error('Error creating education:', error);
    return new Response(JSON.stringify({ error: 'Failed to create education' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
