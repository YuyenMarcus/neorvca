import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  try {
    // Create admin user
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await prisma.user.create({
      data: {
        email: "admin@nesd.com",
        name: "Admin",
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    // Create sample racing categories
    const categories = [
      {
        name: "4x4 Street Trucks",
        description: "Street-legal 4x4 trucks competing in drag racing.",
      },
      {
        name: "ATV Top Racing",
        description: "High-performance ATV racing for experienced riders.",
      },
      {
        name: "ATV Trail",
        description: "Entry-level ATV racing class for beginners.",
      },
      {
        name: "Junior Racing",
        description: "Racing class for young enthusiasts aged 12-16.",
      },
      {
        name: "PeeWee Racing",
        description: "Introductory racing class for kids under 12.",
      },
    ];

    for (const category of categories) {
      await prisma.racingCategory.create({
        data: category,
      });
    }

    // Create sample events
    const events = [
      {
        title: "Summer Sand Drag Showdown",
        startDate: new Date("2024-08-15"),
        description: "Join us for an exciting day of sand drag racing! Gates open at 8:00 AM. Multiple racing categories available.",
        location: "New England Sand Drags Track",
      },
      {
        title: "Night Racing Special",
        startDate: new Date("2024-09-01"),
        description: "Experience the thrill of sand drag racing under the lights! Special evening event with food vendors and entertainment.",
        location: "New England Sand Drags Track",
      },
    ];

    for (const event of events) {
      await prisma.event.create({
        data: event,
      });
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 