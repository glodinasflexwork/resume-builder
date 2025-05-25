// Test script for resume builder functionality
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testDatabaseConnection() {
  try {
    // Test database connection
    const templates = await prisma.template.findMany();
    console.log('Database connection successful');
    console.log(`Found ${templates.length} templates`);
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}

async function testUserAuthentication() {
  try {
    // Test user registration
    const testUser = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    };
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: testUser.email }
    });
    
    if (existingUser) {
      console.log('Test user already exists, skipping creation');
    } else {
      const newUser = await prisma.user.create({
        data: testUser
      });
      console.log('User registration successful:', newUser.id);
    }
    
    // Test user login
    const user = await prisma.user.findUnique({
      where: { email: testUser.email }
    });
    
    if (user && user.password === testUser.password) {
      console.log('User login successful');
      return true;
    } else {
      console.error('User login failed');
      return false;
    }
  } catch (error) {
    console.error('User authentication test failed:', error);
    return false;
  }
}

async function testResumeCreation() {
  try {
    // Get test user
    const user = await prisma.user.findUnique({
      where: { email: 'test@example.com' }
    });
    
    if (!user) {
      console.error('Test user not found');
      return false;
    }
    
    // Get a template
    const template = await prisma.template.findFirst();
    
    if (!template) {
      console.error('No templates found');
      return false;
    }
    
    // Create a test resume
    const resume = await prisma.resume.create({
      data: {
        title: 'Test Resume',
        userId: user.id,
        templateId: template.id,
        colorScheme: 'default'
      }
    });
    
    console.log('Resume creation successful:', resume.id);
    
    // Add personal details
    const personalDetails = await prisma.personalDetails.create({
      data: {
        resumeId: resume.id,
        firstName: 'John',
        lastName: 'Doe',
        jobTitle: 'Software Developer',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        address: '123 Main St',
        city: 'San Francisco',
        country: 'USA',
        zipCode: '94105',
        summary: 'Experienced software developer with a passion for creating user-friendly applications.'
      }
    });
    
    console.log('Personal details added successfully');
    
    // Add experience
    const experience = await prisma.experience.create({
      data: {
        resumeId: resume.id,
        position: 'Senior Developer',
        company: 'Tech Solutions Inc.',
        location: 'San Francisco, CA',
        startDate: new Date('2020-01-01'),
        endDate: null,
        current: true,
        description: 'Leading development team and implementing new features.',
        order: 0
      }
    });
    
    console.log('Experience added successfully');
    
    // Add education
    const education = await prisma.education.create({
      data: {
        resumeId: resume.id,
        institution: 'University of California',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        location: 'Berkeley, CA',
        startDate: new Date('2012-09-01'),
        endDate: new Date('2016-05-31'),
        current: false,
        description: 'Graduated with honors.',
        order: 0
      }
    });
    
    console.log('Education added successfully');
    
    // Add skills
    const skill1 = await prisma.skill.create({
      data: {
        resumeId: resume.id,
        name: 'JavaScript',
        level: 'Expert',
        order: 0
      }
    });
    
    const skill2 = await prisma.skill.create({
      data: {
        resumeId: resume.id,
        name: 'React',
        level: 'Expert',
        order: 1
      }
    });
    
    console.log('Skills added successfully');
    
    return true;
  } catch (error) {
    console.error('Resume creation test failed:', error);
    return false;
  }
}

async function runTests() {
  console.log('Starting tests...');
  
  const dbConnectionSuccess = await testDatabaseConnection();
  if (!dbConnectionSuccess) {
    console.error('Database connection test failed, aborting further tests');
    return;
  }
  
  const authSuccess = await testUserAuthentication();
  if (!authSuccess) {
    console.error('Authentication test failed, aborting further tests');
    return;
  }
  
  const resumeSuccess = await testResumeCreation();
  if (!resumeSuccess) {
    console.error('Resume creation test failed');
    return;
  }
  
  console.log('All tests completed successfully!');
}

// Run the tests
runTests().catch(console.error);
