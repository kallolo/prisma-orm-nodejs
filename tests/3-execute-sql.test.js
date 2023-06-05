const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test execute sql", () => {
  it("execute sql", async () => {
    const id = 1;
    const name = "Mustajib";

    const impacted =
      await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name});`;
    expect(impacted).toBe(1);
  });
});
