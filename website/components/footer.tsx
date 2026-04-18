import Link from "next/link";
import { Car, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Filtreler", href: "/products?category=filters" },
    { name: "Fren Sistemleri", href: "/products?category=brakes" },
    { name: "Motor Parçaları", href: "/products?category=engine" },
    { name: "Aydınlatma", href: "/products?category=lighting" },
  ],
  company: [
    { name: "Hakkımızda", href: "/about" },
    { name: "İletişim", href: "/contact" },
    { name: "Ürünler", href: "/products" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">RenaultParts</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Orijinal Renault yedek parçaları için güvenilir adresiniz.
              Kaliteli parçalar, rekabetçi fiyatlar ve uzman hizmet.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Ürünler</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Bize Ulaşın</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Phone className="h-4 w-4 text-primary" />
                <span>+90 536 518 9389</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Mail className="h-4 w-4 text-primary" />
                <span>alperaksuu@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} RenaultParts. Tüm hakları
            saklıdır.
          </p>
          <p className="text-sm text-secondary-foreground/60">
            Renault Aracınız İçin Kaliteli Parçalar
          </p>
        </div>
      </div>
    </footer>
  );
}
