import { prisma } from './prisma';
import { hash } from 'bcryptjs';

async function main() {
  try {
    // Clean up any existing test data
    await prisma.eventPreference.deleteMany();
    await prisma.match.deleteMany();
    await prisma.message.deleteMany();
    await prisma.review.deleteMany();
    await prisma.service.deleteMany();
    await prisma.vendorProfile.deleteMany();
    await prisma.event.deleteMany();
    await prisma.user.deleteMany();

    // Create a test customer
    const customerPassword = await hash('testpassword123', 12);
    const customer = await prisma.user.create({
      data: {
        email: 'customer@test.com',
        name: 'Test Customer',
        password: customerPassword,
        role: 'CUSTOMER',
      },
    });

    console.log('Created test customer:', customer);

    // Create a test vendor
    const vendorPassword = await hash('vendorpass123', 12);
    const vendor = await prisma.user.create({
      data: {
        email: 'vendor@test.com',
        name: 'Test Vendor',
        password: vendorPassword,
        role: 'VENDOR',
        vendorProfile: {
          create: {
            businessName: 'Test Flower Shop',
            description: 'We sell beautiful flowers for all occasions',
            location: 'San Francisco, CA',
            latitude: 37.7749,
            longitude: -122.4194,
            phone: '555-0123',
            website: 'www.testflowershop.com',
          },
        },
        services: {
          create: [
            {
              name: 'Wedding Bouquet',
              description: 'Beautiful custom wedding bouquets',
              category: 'flowers',
              price: 250.00,
            },
            {
              name: 'Event Decoration',
              description: 'Full venue flower decoration',
              category: 'flowers',
              price: 1000.00,
            },
          ],
        },
      },
      include: {
        vendorProfile: true,
        services: true,
      },
    });

    console.log('Created test vendor:', vendor);

    // Create a test event
    const event = await prisma.event.create({
      data: {
        userId: customer.id,
        title: 'My Wedding',
        description: 'A beautiful summer wedding',
        eventDate: new Date('2024-07-15'),
        location: 'San Francisco, CA',
        latitude: 37.7749,
        longitude: -122.4194,
        budget: 5000.00,
        preferences: {
          create: [
            {
              userId: customer.id,
              category: 'flowers',
              description: 'Looking for romantic and elegant flower arrangements',
              style: 'romantic',
            },
          ],
        },
      },
      include: {
        preferences: true,
      },
    });

    console.log('Created test event:', event);

    // Create a test match
    const match = await prisma.match.create({
      data: {
        eventId: event.id,
        vendorId: vendor.id,
        status: 'PENDING',
      },
    });

    console.log('Created test match:', match);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 