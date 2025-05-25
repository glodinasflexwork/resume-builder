import { type NextRequest } from 'next/server'
import { prisma } from '@/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string, experienceId: string } }
) {
  try {
    const { id: resumeId, experienceId } = params
    
    const experience = await prisma.experience.findUnique({
      where: {
        id: experienceId,
        resumeId: resumeId,
      },
    })
    
    if (!experience) {
      return new Response(JSON.stringify({ error: 'Experience not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    
    return new Response(JSON.stringify(experience), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching experience:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch experience' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string, experienceId: string } }
) {
  try {
    const { id: resumeId, experienceId } = params
    const body = await request.json()
    
    const experience = await prisma.experience.update({
      where: {
        id: experienceId,
        resumeId: resumeId,
      },
      data: {
        position: body.position,
        company: body.company,
        location: body.location || '',
        startDate: new Date(body.startDate),
        endDate: body.endDate ? new Date(body.endDate) : null,
        current: body.current || false,
        description: body.description || '',
        order: body.order !== undefined ? body.order : undefined,
      },
    })
    
    return new Response(JSON.stringify(experience), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error updating experience:', error)
    return new Response(JSON.stringify({ error: 'Failed to update experience' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string, experienceId: string } }
) {
  try {
    const { id: resumeId, experienceId } = params
    
    await prisma.experience.delete({
      where: {
        id: experienceId,
        resumeId: resumeId,
      },
    })
    
    return new Response(null, {
      status: 204,
    })
  } catch (error) {
    console.error('Error deleting experience:', error)
    return new Response(JSON.stringify({ error: 'Failed to delete experience' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
