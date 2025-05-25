// Update all API routes to use the correct Next.js 15 handler signature with Promise-based params
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    
    // In a real app, we would fetch personal details from the database
    return Response.json({
      id: '1',
      resumeId: id,
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
    });
  } catch (error) {
    console.error('Error fetching personal details:', error);
    return Response.json({ error: 'Failed to fetch personal details' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const body = await request.json();
    
    // In a real app, we would update personal details in the database
    return Response.json({
      id: '1',
      resumeId: id,
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
    });
  } catch (error) {
    console.error('Error updating personal details:', error);
    return Response.json({ error: 'Failed to update personal details' }, { status: 500 });
  }
}
