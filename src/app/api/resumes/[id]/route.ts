import { type NextRequest } from 'next/server'
import { prisma } from '@/db'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const resumeId = params.id
    
    const resume = await prisma.resume.findUnique({
      where: { id: resumeId },
      include: {
        personalDetails: true,
        experiences: { orderBy: { order: 'asc' } },
        educations: { orderBy: { order: 'asc' } },
        skills: { orderBy: { order: 'asc' } },
        languages: { orderBy: { order: 'asc' } },
        courses: { orderBy: { order: 'asc' } },
        activities: { orderBy: { order: 'asc' } },
        hobbies: { orderBy: { order: 'asc' } },
        references: { orderBy: { order: 'asc' } },
        websites: { orderBy: { order: 'asc' } },
        template: true,
      },
    })
    
    if (!resume) {
      return new Response(JSON.stringify({ error: 'Resume not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    
    return new Response(JSON.stringify(resume), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching resume:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch resume' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
