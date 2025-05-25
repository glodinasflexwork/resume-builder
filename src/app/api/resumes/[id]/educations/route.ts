import { type NextRequest } from 'next/server'
import { prisma } from '@/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id
    
    const educations = await prisma.education.findMany({
      where: {
        resumeId: resumeId,
      },
      orderBy: {
        order: 'asc',
      },
    })
    
    return new Response(JSON.stringify(educations), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching educations:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch educations' }), {
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
    
    // Get the highest order value to add new education at the end
    const highestOrder = await prisma.education.findFirst({
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
    
    const education = await prisma.education.create({
      data: {
        resumeId: resumeId,
        institution: body.institution,
        degree: body.degree || '',
        field: body.field || '',
        location: body.location || '',
        startDate: new Date(body.startDate),
        endDate: body.endDate ? new Date(body.endDate) : null,
        current: body.current || false,
        description: body.description || '',
        order: newOrder,
      },
    })
    
    return new Response(JSON.stringify(education), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error creating education:', error)
    return new Response(JSON.stringify({ error: 'Failed to create education' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
