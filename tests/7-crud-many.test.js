const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test CRUD many", () => {
  it("test create many customer", async () => {
    const { count } = await prismaClient.customers.createMany({
      data: [
        {
          id: "ID-0007",
          name: "Bambang",
          email: "bambang@gmail.com",
          phone: "08123333333",
        },
        {
          id: "ID-0008",
          name: "Yono",
          email: "yono@gmail.com",
          phone: "08124444444",
        },
      ],
    });
    expect(count).toBe(2);
  });
  it("test update many customer", async () => {
    const { count } = await prismaClient.customers.updateMany({
      data: {
        email: "mustajib@gmail.com",
      },
      where: {
        name: "Mustajib",
      },
    });
    expect(count).toBe(1);
  });
  it("test delete many customer", async () => {
    const { count } = await prismaClient.customers.deleteMany({
      where: {
        name: "Yono",
      },
    });
    expect(count).toBe(1);
  });

  it("test read many customer", async () => {
    const customers = await prismaClient.customers.findMany({});
    console.log(customers);
    expect(customers.length).toBe(5);
  });
});
