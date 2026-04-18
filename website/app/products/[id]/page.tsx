import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, Check, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCarousel } from "@/components/image-carousel";
import { ProductCard } from "@/components/product-card";
import {
  getImages,
  getProductById,
  getRelatedProducts,
} from "@/lib/apiProduct";
import { generateWhatsAppLink } from "@/lib/data";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(id);
  // const categories = await getCategories(product.kategori);

  if (!product) {
    notFound();
  }

  console.log("product", product);

  const whatsappLink = generateWhatsAppLink(product.isim);

  // İlgili ürünleri getir (aynı kategori, mevcut ürün hariç)
  const relatedProducts = (await getRelatedProducts(product.kategori)).items;

  const images = getImages(product as any);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb / Geri Dönüş */}
        <nav className="mb-8">
          <Button
            asChild
            variant="ghost"
            className="pl-0 hover:pl-2 transition-all"
          >
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ürünlere Geri Dön
            </Link>
          </Button>
        </nav>

        {/* Ürün Detayları */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Görsel Karusel */}
          <div>
            <ImageCarousel images={images} productName={product.isim} />
          </div>

          {/* Ürün Bilgisi */}
          <div className="flex flex-col">
            <div className="flex gap-2">
              {product.expand?.kategori.map((category) => (
                <Badge
                  key={category.id}
                  variant="secondary"
                  className="w-fit mb-3 p-2 font-bold"
                >
                  {category.isim.charAt(0).toUpperCase() +
                    category.isim.slice(1)}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {product.isim}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="px-4 py-2 bg-muted rounded-lg">
                <span className="text-sm text-muted-foreground">
                  OEM Numarası
                </span>
                <p className="font-semibold text-foreground">{product.oem}</p>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-muted-foreground mb-8">
              <p>{product.aciklama}</p>
            </div>

            {/* Teklif Al CTA */}
            <div className="bg-card border border-border rounded-xl p-6 mt-auto">
              <p className="text-lg font-semibold text-foreground mb-2">
                Bu parçayla ilgileniyor musunuz?
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Bu ürün için size özel teklif almak üzere bizimle WhatsApp
                üzerinden iletişime geçin.
              </p>
              <Button asChild size="lg" className="w-full">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Teklif Al
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* İlgili Ürünler */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 lg:mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              İlgili Ürünler
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product as any} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
