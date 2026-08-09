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
    where: {
      id,
    },
    include: {
      category: true,
    },
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
  await prisma.product.create({
    data,
  });

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
    where: {
      id,
    },
    data,
  });

  revalidatePath("/admin/products");
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/products");
                  <tr
                  key={product.id}
                  className="border-t hover:bg-stone-50 transition"
                >

                  <td className="p-5">

                    <div className="flex items-center gap-4">

                      <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-stone-100">

                        {product.image ? (

                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />

                        ) : (

                          <div className="flex h-full w-full items-center justify-center">

                            <Package
                              size={26}
                              className="text-stone-400"
                            />

                          </div>

                        )}

                      </div>

                      <div>

                        <h2 className="font-bold">

                          {product.name}

                        </h2>

                        <p className="mt-1 text-sm text-stone-500">

                          {product.slug}

                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="p-5 text-center">

                    {product.category?.name}

                  </td>

                  <td className="p-5 text-center font-bold">

                    {product.price} ج.م

                  </td>

                  <td className="p-5 text-center">

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        product.stock > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >

                      {product.stock}

                    </span>

                  </td>

                  <td className="p-5 text-center">

                    {product.featured ? (

                      <Star
                        size={18}
                        className="mx-auto fill-yellow-400 text-yellow-400"
                      />

                    ) : (

                      "-"

                    )}

                  </td>

                  <td className="p-5">
                                       <div className="flex justify-center gap-3">

                      <Link
                        href={`/admin/products/${product.id}/edit`}
                        className="rounded-lg bg-green-100 p-2 text-green-700 transition hover:bg-green-200"
                      >

                        <Pencil size={18} />

                      </Link>

                      <button
                        className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-200"
                      >

                        <Trash2 size={18} />

                      </button>

                    </div>

                  </td>

                </tr>

              ))}

              {products.length === 0 && (

                <tr>

                  <td
                    colSpan={6}
                    className="py-20 text-center"
                  >

                    <Package
                      size={48}
                      className="mx-auto mb-4 text-stone-300"
                    />

                    <h2 className="text-xl font-bold text-stone-700">

                      لا توجد منتجات

                    </h2>

                    <p className="mt-2 text-stone-500">

                      ابدأ بإضافة أول منتج إلى المتجر.

                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>
                 </div>

    </main>
  );
}   
}
