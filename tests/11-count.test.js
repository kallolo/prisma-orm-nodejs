const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test count", () => {
  it("test count", async () => {
    const total = await prismaClient.customers.count({
      where: {
        name: "Bambang",
      },
    });
    expect(total).toBe(1);
  });
});
