import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({
    templates: [
      {
        id: 'brussels',
        name: 'Brussels',
        description: 'A clean and professional template with a sidebar for key information.',
        thumbnail: '/images/templates/brussels.png',
      },
      {
        id: 'prague',
        name: 'Prague',
        description: 'A modern template with a focus on skills and experience.',
        thumbnail: '/images/templates/prague.png',
      },
      {
        id: 'shanghai',
        name: 'Shanghai',
        description: 'A minimalist template with a traditional layout.',
        thumbnail: '/images/templates/shanghai.png',
      },
    ]
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
