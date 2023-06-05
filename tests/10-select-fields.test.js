const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test select field", () => {
  it("test create and select fields", async () => {
    const customer = await prismaClient.customers.create({
      data: {
        id: "ID-0001",
        name: "Mustajib",
        email: "mustajib@sambu.co.id",
        phone: "08123456789",
      },
      select: {
        id: true,
        name: true,
      },
    });
    expect(customer.id).toBe("ID-0001");
    expect(customer.name).toBe("Mustajib");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it("test select fields", async () => {
    const customers = await prismaClient.customers.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (let customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
