import { type NextRequest } from 'next/server'
import { prisma } from '@/db'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id
    const body = await request.json()
    
    const personalDetails = await prisma.personalDetails.upsert({
      where: {
        resumeId: resumeId,
      },
      update: {
        firstName: body.firstName,
        lastName: body.lastName,
        jobTitle: body.jobTitle,
        email: body.email,
        phone: body.phone,
        address: body.address,
        city: body.city,
        country: body.country,
        zipCode: body.zipCode,
        summary: body.summary,
        photo: body.photo,
      },
      create: {
        resumeId: resumeId,
        firstName: body.firstName,
        lastName: body.lastName,
        jobTitle: body.jobTitle || '',
        email: body.email || '',
        phone: body.phone || '',
        address: body.address || '',
        city: body.city || '',
        country: body.country || '',
        zipCode: body.zipCode || '',
        summary: body.summary || '',
        photo: body.photo || '',
      },
    })
    
    return new Response(JSON.stringify(personalDetails), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error updating personal details:', error)
    return new Response(JSON.stringify({ error: 'Failed to update personal details' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
