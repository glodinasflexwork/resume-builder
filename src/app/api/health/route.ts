import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({
    status: 'success',
    message: 'API is working correctly',
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
