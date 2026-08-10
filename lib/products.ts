"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getProducts() {
  return await prisma.product.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getProduct(id: string) {
  return await prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });
}

export async function createProduct(data: {
  name: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  featured: boolean;
  categoryId: string;
}) {
  await prisma.product.create({ data });
  revalidatePath("/admin/products");
}

export async function updateProduct(
  id: string,
  data: {
    name: string;
    slug: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    featured: boolean;
    categoryId: string;
  }
) {
  await prisma.product.update({
    where: { id },
    data,
  });
  revalidatePath("/admin/products");
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id },
  });
  revalidatePath("/admin/products");
}
