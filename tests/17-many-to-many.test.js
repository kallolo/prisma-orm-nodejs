const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test many to many relation", () => {
  it("test many to many relation, input like product", async () => {
    const likes = await prismaClient.likes.create({
      data: {
        customer_id: "ID-0009",
        product_id: "P0002",
      },
      include: {
        customer: true,
        product: true,
      },
    });
    console.log(likes);
  });

  it("test many to many relation, read customer relation likes product ", async () => {
    const customers = await prismaClient.customers.findUnique({
      where: {
        id: "ID-0009",
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });
    console.log(JSON.stringify(customers));
  });

  it("test many to many relation, read customer relation likes product containts A ", async () => {
    const customers = await prismaClient.customers.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "A",
              },
            },
          },
        },
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });
    console.log(JSON.stringify(customers));
  });

  it("test many to many relation, input relation impilict relation likes product", async () => {
    const customers = await prismaClient.customers.update({
      where: {
        id: "ID-0005",
      },
      data: {
        loves: {
          connect: [{ id: "P0003" }, { id: "P0004" }],
        },
      },
      include: {
        loves: true,
      },
    });
    console.log(JSON.stringify(customers));
  });

  it("test many to many relation, find many relation impilict relation likes product", async () => {
    const customers = await prismaClient.customers.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: "A",
            },
          },
        },
      },
      include: {
        loves: true,
      },
    });
    console.log(JSON.stringify(customers));
  });
});
