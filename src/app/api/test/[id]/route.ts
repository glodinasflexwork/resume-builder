// Update test API route to use the correct Next.js 15 handler signature with Promise-based params
// and properly await the params before accessing properties
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  return Response.json({ id: id, message: 'Dynamic API is working' });
}
