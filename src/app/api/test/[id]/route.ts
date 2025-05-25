// Update test API route to use the correct Next.js 15 handler signature with Promise-based params
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    return Response.json({
      id: id,
      message: "Dynamic API is working"
    });
  } catch (error) {
    console.error('Error in test API:', error);
    return Response.json({ error: 'Test API failed' }, { status: 500 });
  }
}
