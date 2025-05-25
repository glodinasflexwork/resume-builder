import { type NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    
    // In a real app, we would fetch the resume from the database
    return new Response(JSON.stringify({
      id: resumeId,
      title: 'Software Developer Resume',
      userId: 'user123',
      templateId: 'brussels',
      colorScheme: 'default',
      createdAt: '2025-05-20T10:00:00Z',
      updatedAt: '2025-05-25T10:00:00Z'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching resume:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch resume' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    const body = await request.json();
    
    // In a real app, we would update the resume in the database
    return new Response(JSON.stringify({
      id: resumeId,
      title: body.title || 'Untitled Resume',
      userId: 'user123',
      templateId: body.templateId || 'brussels',
      colorScheme: body.colorScheme || 'default',
      createdAt: '2025-05-20T10:00:00Z',
      updatedAt: new Date().toISOString()
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error updating resume:', error);
    return new Response(JSON.stringify({ error: 'Failed to update resume' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    
    // In a real app, we would delete the resume from the database
    return new Response(JSON.stringify({
      message: `Resume ${resumeId} deleted successfully`
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error deleting resume:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete resume' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
