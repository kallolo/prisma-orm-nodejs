const { prismaClient } = require("../src/config/prisma-client");

describe("Prisma client test transaction", () => {
  it("sequential transaction", async () => {
    const [dzaky, budi] = await prismaClient.$transaction([
      prismaClient.customers.create({
        data: {
          id: "ID-0003",
          name: "dzaky mushaffar",
          email: "dzaky@gmail.com",
          phone: "081222112233",
        },
      }),
      prismaClient.customers.create({
        data: {
          id: "ID-0004",
          name: "budi gunawan",
          email: "budi@gmail.com",
          phone: "08122222222",
        },
      }),
    ]);
    expect(dzaky.name).toBe("dzaky mushaffar");
    expect(budi.name).toBe("budi gunawan");
  });
  it("interactive transaction", async () => {
    const [mega, joko] = await prismaClient.$transaction(
      async (prisma) => {
        const mega = await prisma.customers.create({
          data: {
            id: "ID-0005",
            name: "Mega Mendung",
            email: "megamendung@gmail.com",
            phone: "081211111111",
          },
        });
        const joko = await prisma.customers.create({
          data: {
            id: "ID-0006",
            name: "Joko dodo",
            email: "jokododo@gmail.com",
            phone: "081233333333",
          },
        });

        return [mega, joko];
      },
      {
        timeout: 5,
      }
    );
    expect(mega.name).toBe("Mega Mendung");
    expect(joko.name).toBe("Joko dodo");
  });
});
