const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test sorting", () => {
  it("test sorting", async () => {
    const customers = await prismaClient.customers.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: "desc",
        },
        {
          email: "asc",
        },
      ],
    });
    console.info(customers);
    expect(customers.length).toBe(10);
  });
});
