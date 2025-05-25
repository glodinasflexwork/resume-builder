import { type NextRequest } from 'next/server'
import { prisma } from '@/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id
    
    const languages = await prisma.language.findMany({
      where: {
        resumeId: resumeId,
      },
      orderBy: {
        order: 'asc',
      },
    })
    
    return new Response(JSON.stringify(languages), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching languages:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch languages' }), {
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
    
    // Get the highest order value to add new language at the end
    const highestOrder = await prisma.language.findFirst({
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
    
    const language = await prisma.language.create({
      data: {
        resumeId: resumeId,
        name: body.name,
        level: body.level || '',
        order: newOrder,
      },
    })
    
    return new Response(JSON.stringify(language), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error creating language:', error)
    return new Response(JSON.stringify({ error: 'Failed to create language' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
