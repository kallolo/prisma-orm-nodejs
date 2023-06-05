const { PrismaClient } = require("@prisma/client");

describe("Prisma client", () => {
  it("connect to database", async () => {
    const prisma = new PrismaClient();
    await prisma.$connect();

    // do something

    await prisma.$disconnect();
  });
});
