import { Suspense } from "react";
import ProductsContent from "./ProductContent";
import { getAllCategories, searchProducts } from "@/lib/apiProduct";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { search, category } = await searchParams;

  const categories = await getAllCategories();

  if (typeof search === "object") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-destructive">
          Geçersiz arama sorgusu. Lütfen tek bir arama terimi girin.
        </div>
      </div>
    );
  }

  if (typeof category === "object") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-destructive">
          Geçersiz kategori. Lütfen tek bir kategori seçin.
        </div>
      </div>
    );
  }

  const products = await searchProducts(search || "", category);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-muted-foreground">Ürünler yükleniyor...</div>
        </div>
      }
    >
      <ProductsContent products={products.items} categories={categories} />
    </Suspense>
  );
}
