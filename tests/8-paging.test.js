const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test paging", () => {
  it("test paging", async () => {
    const page1 = await prismaClient.customers.findMany({
      skip: 0,
      take: 1,
    });
    expect(page1.length).toBe(1);
    const page2 = await prismaClient.customers.findMany({
      skip: 1,
      take: 1,
    });
    expect(page2.length).toBe(1);
    const page3 = await prismaClient.customers.findMany({
      skip: 2,
      take: 1,
    });
    expect(page3.length).toBe(1);
  });
});
