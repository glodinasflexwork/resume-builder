// Seed script for resume templates
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedTemplates() {
  try {
    // Check if templates already exist
    const templatesCount = await prisma.template.count();
    
    if (templatesCount > 0) {
      console.log(`${templatesCount} templates already exist, skipping seeding.`);
      return;
    }
    
    // Create default templates
    const templates = await prisma.template.createMany({
      data: [
        {
          id: 'brussels',
          name: 'Brussels',
          description: 'A clean and professional template with a sidebar for key information.',
          thumbnail: '/images/templates/brussels.png',
        },
        {
          id: 'prague',
          name: 'Prague',
          description: 'A modern template with a focus on skills and experience.',
          thumbnail: '/images/templates/prague.png',
        },
        {
          id: 'shanghai',
          name: 'Shanghai',
          description: 'A minimalist template with a traditional layout.',
          thumbnail: '/images/templates/shanghai.png',
        },
      ],
    });
    
    console.log(`Created ${templates.count} templates successfully.`);
  } catch (error) {
    console.error('Error seeding templates:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedTemplates();
