const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test CRUD", () => {
  it("test create customer", async () => {
    const customer = await prismaClient.customers.create({
      data: {
        id: "ID-0001",
        name: "Mustajib",
        email: "mustajib@sambu.co.id",
        phone: "08123456789",
      },
    });
    expect(customer.id).toBe("ID-0001");
    expect(customer.name).toBe("Mustajib");
    expect(customer.email).toBe("mustajib@sambu.co.id");
    expect(customer.phone).toBe("08123456789");
  });

  it("test update customer", async () => {
    const customer = await prismaClient.customers.update({
      data: {
        name: "Mustajib Aja",
      },
      where: {
        id: "ID-0001",
      },
    });

    expect(customer.id).toBe("ID-0001");
    expect(customer.name).toBe("Mustajib Aja");
    expect(customer.email).toBe("mustajib@sambu.co.id");
    expect(customer.phone).toBe("08123456789");
  });

  it("test read customer", async () => {
    const customer = await prismaClient.customers.findUnique({
      where: {
        id: "ID-0001",
      },
    });

    expect(customer.id).toBe("ID-0001");
    expect(customer.name).toBe("Mustajib Aja");
    expect(customer.email).toBe("mustajib@sambu.co.id");
    expect(customer.phone).toBe("08123456789");
  });

  it("test delete customer", async () => {
    const customer = await prismaClient.customers.delete({
      where: {
        id: "ID-0001",
      },
    });

    expect(customer.id).toBe("ID-0001");
    expect(customer.name).toBe("Mustajib Aja");
    expect(customer.email).toBe("mustajib@sambu.co.id");
    expect(customer.phone).toBe("08123456789");
  });
});
