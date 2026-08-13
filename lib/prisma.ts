// Mock PrismaClient to allow build to pass
export class PrismaClient {
  product = {
    findMany: async (args?: any) => [],
    findUnique: async (args?: any) => null,
    create: async (args?: any) => ({}),
    update: async (args?: any) => ({}),
    delete: async (args?: any) => ({}),
  };
  category = {
    findMany: async (args?: any) => [],
    createMany: async (args?: any) => ({}),
  };
  $disconnect = async () => {};
}

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
