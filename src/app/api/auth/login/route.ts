import { type NextRequest } from 'next/server'
import { prisma } from '@/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.email || !body.password) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: body.email },
    })
    
    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    
    // In a real app, we would compare hashed passwords
    // For demo purposes, we're comparing plain text
    if (user.password !== body.password) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    
    // Remove password from response
    const { password, ...userWithoutPassword } = user
    
    return new Response(JSON.stringify({
      user: userWithoutPassword,
      message: 'Login successful'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error logging in:', error)
    return new Response(JSON.stringify({ error: 'Failed to login' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
