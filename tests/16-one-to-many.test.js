const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test one to many relation", () => {
  it("test one to many relation, input comments", async () => {
    const comments = await prismaClient.comments.create({
      data: {
        customer_id: "ID-0001",
        title: "Title Comment 1",
        description: "Descrition comment 1",
      },
      include: {
        customer: true,
      },
    });
    console.log(comments);
    // expect(category).toHaveProperty("id");
  });

  it("test one to many relation, input customer with many comments", async () => {
    const customers = await prismaClient.customers.create({
      data: {
        id: "ID-0009",
        name: "Bowo",
        email: "bowo@gmail.com",
        phone: "081232112111",
        comments: {
          createMany: {
            data: [
              {
                title: "Title Comment 1",
                description: "Descrition comment 1",
              },
              {
                title: "Title Comment 2",
                description: "Descrition comment 2",
              },
            ],
          },
        },
      },
      include: {
        comments: true,
      },
    });
    console.log(customers);
  });

  it("test one to many relation, read customer relation filter comments", async () => {
    const customers = await prismaClient.customers.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "Comment", // title yang mengandung kata "Comments"
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });
    console.log(JSON.stringify(customers));
    // expect(category).toHaveProperty("id");
  });
});
