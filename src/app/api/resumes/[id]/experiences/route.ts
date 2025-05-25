import { type NextRequest } from 'next/server'
import { prisma } from '@/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id
    
    const experiences = await prisma.experience.findMany({
      where: {
        resumeId: resumeId,
      },
      orderBy: {
        order: 'asc',
      },
    })
    
    return new Response(JSON.stringify(experiences), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch experiences' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id
    const body = await request.json()
    
    // Get the highest order value to add new experience at the end
    const highestOrder = await prisma.experience.findFirst({
      where: {
        resumeId: resumeId,
      },
      orderBy: {
        order: 'desc',
      },
      select: {
        order: true,
      },
    })
    
    const newOrder = highestOrder ? highestOrder.order + 1 : 0
    
    const experience = await prisma.experience.create({
      data: {
        resumeId: resumeId,
        position: body.position,
        company: body.company,
        location: body.location || '',
        startDate: new Date(body.startDate),
        endDate: body.endDate ? new Date(body.endDate) : null,
        current: body.current || false,
        description: body.description || '',
        order: newOrder,
      },
    })
    
    return new Response(JSON.stringify(experience), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error creating experience:', error)
    return new Response(JSON.stringify({ error: 'Failed to create experience' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
