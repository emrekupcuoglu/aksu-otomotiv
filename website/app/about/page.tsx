import {
  Shield,
  Users,
  Clock,
  Award,
  Target,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
  {
    icon: Shield,
    title: "Geniş Ürün Yelpazesi",
    description:
      "Renault ve Dacia gruplarında orijinal, ithal ve yerli üretim seçenekleriyle her bütçeye uygun kaliteli çözümler sunuyoruz.",
  },
  {
    icon: Award,
    title: "40+ Yıllık Deneyim",
    description:
      "1983'ten bugüne sektörde edindiğimiz derin tecrübe ile aracınız için en doğru parçayı en hızlı şekilde tespit ediyoruz.",
  },
  {
    icon: Users,
    title: "Uzman Kadro",
    description:
      "Otomotiv tutkunu ve teknik bilgiye sahip ekibimizle, sadece parça satışı değil, teknik destek ve danışmanlık da sağlıyoruz.",
  },
  {
    icon: CheckCircle2,
    title: "Sorunsuz Sürüş",
    description:
      "Temel önceliğimiz, tedarik ettiğimiz parçaların aracınızla tam uyum sağlaması ve sürüş güvenliğinizi en üst seviyede tutmasıdır.",
  },
];

const milestones = [
  {
    year: "1987",
    title: "Kuruluş ve İlk Adımlar",
    description:
      "Sektördeki yolculuğumuza Renault yedek parça uzmanlığı ile başladık.",
  },
  {
    year: "2000",
    title: "Ürün Çeşitliliği",
    description:
      "Yarım asra yaklaşan tecrübemizi modern teknolojiyle birleştirerek tüm Türkiye'ye ulaşıyoruz.",
  },
  {
    year: "Şimdi",
    title: "Dijital Dönüşüm",
    description:
      "Yarım asra yaklaşan tecrübemizi modern teknolojiyle birleştirerek tüm Türkiye'ye ulaşıyoruz.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                1983'ten Beri <br />
                <span className="text-primary">Güvenle Yol Alıyoruz</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Firmamız, 1983 yılından bu yana Renault ve Dacia marka araçlar
                için orijinal, ithal ve yerli üretim yedek parça tedariğinde
                sektörün öncü isimlerinden biri olmuştur. Otomotiv tutkumuzu,
                profesyonel hizmet anlayışımızla birleştiriyoruz.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/products">Ürünleri İncele</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Bize Ulaşın</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1669881241841-8342fd0d465a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Renault yedek parçaları"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Misyonumuz
                </span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Aracınızı sorunsuz bir şekilde kullanmanıza yardımcı oluyoruz.
              </h2>
              <p className="text-muted-foreground mb-4">
                Yılların getirdiği deneyim ve derin sektör bilgimizle, her
                müşterimizin ihtiyacına özel çözümler üretiyoruz. En yüksek
                kalitede yedek parça sağlamaya kararlı ekibimizle, sadece bir
                satıcı değil, yol arkadaşınız olmayı hedefliyoruz.
              </p>
              <p className="text-muted-foreground">
                Geniş envanterimizi, uzman bilgimizi ve müşteri odaklı
                yaklaşımımızı birleştirerek, Renault aracınız için tam olarak
                ihtiyacınız olanı bulmanızı kolaylaştırıyoruz.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
                  alt="Otomotiv atölyesi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Değerlerimiz
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Bizi Motive Eden Değerler
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Yolculuğumuz</h2>
            <p className="mt-4 text-muted-foreground">
              Mütevazı bir başlangıçtan tüm Avrupa'ya hizmet veren bir yapıya
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

              {/* Timeline items */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
                      {milestone.year}
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-foreground mb-4">
            Parçanızı Bulmaya Hazır mısınız?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Geniş kataloğumuza göz atın veya kişiselleştirilmiş destek için
            ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">Ürünlere Göz Atın</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-card">
              <Link href="/contact">Bize Ulaşın</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
