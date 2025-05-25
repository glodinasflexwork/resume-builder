import { type NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    
    // In a real app, we would fetch export options from the database
    return new Response(JSON.stringify({
      formats: ['pdf', 'docx'],
      defaultFormat: 'pdf'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching export options:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch export options' }), {
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
    
    // In a real app, we would generate a PDF and return it
    return new Response(JSON.stringify({
      url: `/api/resumes/${resumeId}/export/download`,
      format: body.format || 'pdf',
      message: 'Export successful'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error exporting resume:', error);
    return new Response(JSON.stringify({ error: 'Failed to export resume' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
