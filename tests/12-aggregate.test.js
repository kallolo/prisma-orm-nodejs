const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test aggregate", () => {
  it("test aggregate function", async () => {
    const result = await prismaClient.products.aggregate({
      _min: {
        price: true,
        stok: true,
      },
      _max: {
        price: true,
        stok: true,
      },
      _avg: {
        price: true,
        stok: true,
      },
    });
    console.log(result);
    expect(result._max.price).toBe(5000);
    expect(result._min.price).toBe(1000);
    expect(result._avg.price).toBe(3000);
  });

  it("test aggregate and group by", async () => {
    const result = await prismaClient.products.groupBy({
      by: ["category"],
      _min: {
        price: true,
        stok: true,
      },
      _max: {
        price: true,
        stok: true,
      },
      _avg: {
        price: true,
        stok: true,
      },
    });
    for (const item of result) {
      console.info(
        `Category : ${item.category} min price ${item._min.price} max price ${item._max.price} avg price ${item._avg.price}`
      );
    }
  });

  it("test aggregate and group by and having", async () => {
    const result = await prismaClient.products.groupBy({
      by: ["category"],
      _min: {
        price: true,
        stok: true,
      },
      _max: {
        price: true,
        stok: true,
      },
      _avg: {
        price: true,
        stok: true,
      },
      having: {
        price: {
          _avg: {
            gt: 1000,
          },
        },
      },
    });
    for (const item of result) {
      console.info(
        `Category : ${item.category} min price ${item._min.price} max price ${item._max.price} avg price ${item._avg.price}`
      );
    }
  });
});
