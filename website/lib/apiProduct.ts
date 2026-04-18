import pb from "./pocketbase";
import { Product } from "./types";

export async function getProductById(id: string) {
  return await pb.collection("yedek_parca").getOne(id, { expand: "kategori" });
}

export async function getAllProducts() {
  return await pb.collection("yedek_parca").getFullList({ expand: "kategori" });
}

export async function getRelatedProducts(category: string) {
  return await pb
    .collection("yedek_parca")
    .getList(1, 5, { filter: `kategori="${category}"` });
}

export function getImages(product: Product) {
  const imageURL = pb.files.getURL(product, product.foto[0]);

  const photos: string[] = [];
  for (let i = 0; i < product.foto.length; i++) {
    const imageURL = pb.files.getURL(product, product.foto[i]);
    photos.push(imageURL);
  }

  return photos;
}

export async function searchProducts(
  searchQuery: string | number,
  category?: string,
) {
  let filter = `(isim ~ "${searchQuery}" || oem ~ "${searchQuery}")`;

  if (category && category.length > 0)
    filter += ` && kategori.isim ?= "${category}"`;

  // filter = `kategori = "motor"`;
  const data = await pb.collection("yedek_parca").getList(1, 100, {
    filter,
    expand: "kategori",
  });

  return data;
}

export async function getFeaturedProducts() {
  return await pb
    .collection("yedek_parca")
    .getList(1, 5, { expand: "kategori" });
}

export async function getAllCategories() {
  return await pb.collection("kategoriler").getFullList();
}
