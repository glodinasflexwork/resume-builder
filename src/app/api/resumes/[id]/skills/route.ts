import { type NextRequest } from 'next/server'
import { prisma } from '@/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id
    
    const skills = await prisma.skill.findMany({
      where: {
        resumeId: resumeId,
      },
      orderBy: {
        order: 'asc',
      },
    })
    
    return new Response(JSON.stringify(skills), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching skills:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch skills' }), {
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
    
    // Get the highest order value to add new skill at the end
    const highestOrder = await prisma.skill.findFirst({
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
    
    const skill = await prisma.skill.create({
      data: {
        resumeId: resumeId,
        name: body.name,
        level: body.level || '',
        order: newOrder,
      },
    })
    
    return new Response(JSON.stringify(skill), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error creating skill:', error)
    return new Response(JSON.stringify({ error: 'Failed to create skill' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
