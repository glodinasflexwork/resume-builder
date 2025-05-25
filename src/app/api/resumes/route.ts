import { type NextRequest } from 'next/server'
import { prisma } from '@/db'

export async function GET(request: NextRequest) {
  try {
    // Get user ID from session (will be implemented with auth)
    // For now, we'll return all resumes
    const resumes = await prisma.resume.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
        updatedAt: true,
        templateId: true,
        template: {
          select: {
            name: true,
            thumbnail: true,
          },
        },
        personalDetails: {
          select: {
            firstName: true,
            lastName: true,
            jobTitle: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    })
    
    return new Response(JSON.stringify(resumes), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching resumes:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch resumes' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Get user ID from session (will be implemented with auth)
    // For now, we'll use a placeholder
    const userId = 'placeholder-user-id'
    
    // Create a new resume with default template
    const resume = await prisma.resume.create({
      data: {
        title: body.title || 'Untitled Resume',
        userId,
        templateId: body.templateId,
        user: {
          connectOrCreate: {
            where: { id: userId },
            create: {
              id: userId,
              email: 'placeholder@example.com',
            },
          },
        },
        template: {
          connectOrCreate: {
            where: { id: body.templateId || 'default-template' },
            create: {
              id: body.templateId || 'default-template',
              name: 'Default Template',
            },
          },
        },
      },
    })
    
    return new Response(JSON.stringify(resume), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error creating resume:', error)
    return new Response(JSON.stringify({ error: 'Failed to create resume' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
