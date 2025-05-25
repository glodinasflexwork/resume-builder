// Simple test API route with dynamic parameter to verify Next.js 15 compatibility
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return Response.json({ id: params.id, message: 'Dynamic API is working' });
}
