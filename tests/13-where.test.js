const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test where", () => {
  it("test using or operator", async () => {
    const products = await prismaClient.products.findMany({
      where: {
        OR: [
          {
            name: "A",
          },
          {
            name: "B",
          },
        ],
      },
      orderBy: [
        {
          name: "asc",
        },
      ],
    });
    console.table(products);
    expect(products.length).toBe(2);
    expect(products[0].name).toBe("A");
    expect(products[1].name).toBe("B");
  });
});

// ada banyak operator where yang bisa digunakan silahakn liaht disini
//www.prisma.io/docs/reference/api-reference/prisma-client-reference#filter-conditions-and-operators
