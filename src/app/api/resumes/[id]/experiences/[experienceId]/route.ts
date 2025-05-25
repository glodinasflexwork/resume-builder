import { type NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string, experienceId: string } }
) {
  try {
    const resumeId = params.id;
    const experienceId = params.experienceId;
    
    // In a real app, we would fetch the experience from the database
    return new Response(JSON.stringify({
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
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching experience:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch experience' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string, experienceId: string } }
) {
  try {
    const resumeId = params.id;
    const experienceId = params.experienceId;
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
    
    // In a real app, we would update the experience in the database
    return new Response(JSON.stringify({
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
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error updating experience:', error);
    return new Response(JSON.stringify({ error: 'Failed to update experience' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string, experienceId: string } }
) {
  try {
    const resumeId = params.id;
    const experienceId = params.experienceId;
    
    // In a real app, we would delete the experience from the database
    return new Response(JSON.stringify({
      message: `Experience ${experienceId} deleted successfully`
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error deleting experience:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete experience' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
