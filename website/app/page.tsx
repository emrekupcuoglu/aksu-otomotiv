import Link from "next/link";
import { ArrowRight, Shield, Truck, Award, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/search-bar";
import { ProductCard } from "@/components/product-card";
import { getAllCategories, getFeaturedProducts } from "@/lib/apiProduct";

const features = [
  {
    icon: Shield,
    title: "Orijinal Parçalar",
    description: "Üretici garantili %100 orijinal OEM parçalar",
  },
  {
    icon: Truck,
    title: "Hızlı Teslimat",
    description: "Türkiye ve Avrupa genelinde hızlı sevkiyat",
  },
  {
    icon: Award,
    title: "Kalite Garantisi",
    description:
      "Her parça orijinal spesifikasyonlara uygunluk için test edilmiştir",
  },
  {
    icon: Wrench,
    title: "Uzman Desteği",
    description: "Renault uzmanlarından teknik yardım ve destek",
  },
];

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  const categories = await getAllCategories();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-secondary py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground tracking-tight text-balance">
              Aracınız İçin Kaliteli{" "}
              <span className="text-primary">Renault</span> Parçaları
            </h1>
            <p className="mt-6 text-lg text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
              Orijinal Renault yedek parçaları için güvenilir adresiniz. Geniş
              kataloğumuz ve uzman desteğimizle aracınız için mükemmel parçayı
              bulun.
            </p>
            <div className="mt-10 max-w-2xl mx-auto">
              <SearchBar
                variant="hero"
                placeholder="İsim veya OEM numarası ile parça ara..."
              />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/products">
                  Tüm Parçalara Göz At
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-card">
                <Link href="/contact">Bize Ulaşın</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Kategoriye Göre Alışveriş
            </h2>
            <p className="mt-4 text-muted-foreground">
              Geniş kataloğumuzdan ihtiyacınız olan parçayı tam olarak bulun
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.isim}`}
                className="group flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-muted group-hover:bg-primary/10 transition-colors mb-3">
                  <Wrench className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {category.isim}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Öne Çıkan Parçalar
              </h2>
              <p className="mt-2 text-muted-foreground">
                Renault araçları için popüler yedek parçalar
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/products">
                Tümünü Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary-foreground">
              Parça Bulmak İçin Yardıma mı İhtiyacınız Var?
            </h2>
            <p className="mt-4 text-secondary-foreground/80">
              Uzmanlarımız Renault aracınız için doğru parçayı bulmanıza
              yardımcı olmaya hazır. Hızlı destek için WhatsApp üzerinden
              bizimle iletişime geçin.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://wa.me/905365189389?text=Merhaba%2C%20yedek%20parça%20bulma%20konusunda%20yardıma%20ihtiyacım%20var."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp'tan Yazın
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
