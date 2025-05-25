import { type NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    
    // In a real app, we would fetch personal details from the database
    return new Response(JSON.stringify({
      id: '1',
      resumeId: resumeId,
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Software Developer',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      address: '123 Main St',
      city: 'San Francisco',
      country: 'USA',
      zipCode: '94105',
      summary: 'Experienced software developer with a passion for creating user-friendly applications.'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching personal details:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch personal details' }), {
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
    
    // In a real app, we would update personal details in the database
    return new Response(JSON.stringify({
      id: '1',
      resumeId: resumeId,
      firstName: body.firstName || '',
      lastName: body.lastName || '',
      jobTitle: body.jobTitle || '',
      email: body.email || '',
      phone: body.phone || '',
      address: body.address || '',
      city: body.city || '',
      country: body.country || '',
      zipCode: body.zipCode || '',
      summary: body.summary || ''
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error updating personal details:', error);
    return new Response(JSON.stringify({ error: 'Failed to update personal details' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
