const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test one to one relation", () => {
  it("test one to one relation, input wallet customer", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "W-001",
        customer_id: "ID-0001",
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });
    console.log(wallet);
    // expect(category).toHaveProperty("id");
  });
  it("test one to one relation, input customer with wallet", async () => {
    const customers = await prismaClient.customers.create({
      data: {
        id: "ID-0008",
        name: "Joko",
        email: "joko@gmail.com",
        phone: "081232112312",
        wallet: {
          create: {
            id: "W-002",
            balance: 500000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });
    console.log(customers);
    // expect(category).toHaveProperty("id");
  });

  it("test one to one relation, read customer with wallet", async () => {
    const customers = await prismaClient.customers.findUnique({
      where: {
        id: "ID-0001",
      },
      include: {
        wallet: true,
      },
    });
    console.log(customers);
  });

  it("test one to one relation, read customer relation filter wallet not null", async () => {
    const customers = await prismaClient.customers.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });
    console.log(customers);
  });
});
