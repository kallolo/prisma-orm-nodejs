const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test query sql", () => {
  it("query sql", async () => {
    const id = 1;

    const samples =
      await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;

    for (const sample of samples) {
      console.info(`Result sample id : ${sample.id} and name ${sample.name}`);
    }
  });
});
