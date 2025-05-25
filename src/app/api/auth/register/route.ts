import { type NextRequest } from 'next/server'
import { prisma } from '@/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.email || !body.password || !body.name) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    })
    
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'User already exists' }), {
        status: 409,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    
    // In a real app, we would hash the password here
    // For demo purposes, we're storing it as plain text
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password, // In production, this should be hashed
      },
    })
    
    // Remove password from response
    const { password, ...userWithoutPassword } = user
    
    return new Response(JSON.stringify(userWithoutPassword), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error creating user:', error)
    return new Response(JSON.stringify({ error: 'Failed to create user' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
