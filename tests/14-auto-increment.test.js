const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test auto-increment", () => {
  it("test create auto-increment", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Food",
      },
    });
    console.log(category);
    expect(category).toHaveProperty("id");
  });
});
