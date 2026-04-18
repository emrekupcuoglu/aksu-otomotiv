"use client";
import { useTransition } from "react"; // SPA hissi için
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Filter, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { RecordModel } from "pocketbase";

export default function ProductsContent({
  products,
  categories, // Sunucudan istemciye kategorileri aktar
}: {
  products: RecordModel[];
  categories: any[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // URL'den mevcut değerler
  const currentSearch = searchParams.get("search") || "";
  const currentCategory = searchParams.get("category") || "";

  const updateFilters = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // "SPA sihri" kısmı
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  const clearFilters = () => {
    startTransition(() => {
      router.push(pathname, { scroll: false });
    });
  };

  const hasActiveFilters = !!currentSearch || !!currentCategory;

  return (
    <div
      className={`min-h-screen bg-background transition-opacity ${isPending ? "opacity-50" : "opacity-100"}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Yükleme Göstergeli Başlık */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold">
              {currentSearch
                ? `"${currentSearch}" için sonuçlar`
                : "Tüm Ürünler"}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {products.length} ürün bulundu
            </p>
          </div>
          {isPending && <Loader2 className="animate-spin text-primary" />}
        </div>

        <div className="flex flex-col lg:row gap-8 lg:flex-row">
          {/* Yan Menü */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-card border rounded-xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold">Filtreler</h2>
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Tümünü temizle
                  </Button>
                )}
              </div>

              <h3 className="text-sm font-medium mb-3">Kategoriler</h3>
              <div className="space-y-2">
                <button
                  onClick={() => updateFilters("category", null)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    !currentCategory
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  Tüm Kategoriler
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => updateFilters("category", category.isim)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      currentCategory === category.isim
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {category.isim
                      .trim()
                      .toLowerCase()
                      .charAt(0)
                      .toUpperCase() + category.isim.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Izgara Görünümü */}
          <div className="flex-1">
            {/* Aktif Filtre Rozetleri */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {currentSearch && (
                  <Badge variant="secondary">Arama: {currentSearch}</Badge>
                )}
                {currentCategory && (
                  <Badge variant="secondary" className="gap-1">
                    {categories.find((c) => c.id === currentCategory)?.isim ||
                      currentCategory}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => updateFilters("category", null)}
                    />
                  </Badge>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
