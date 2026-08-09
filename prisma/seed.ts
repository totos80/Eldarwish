import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      {
        name: "الأعشاب",
        slug: "herbs",
      },
      {
        name: "التوابل",
        slug: "spices",
      },
      {
        name: "العسل",
        slug: "honey",
      },
      {
        name: "الزيوت",
        slug: "oils",
      },
    ],
  });

  console.log("Seed completed.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
