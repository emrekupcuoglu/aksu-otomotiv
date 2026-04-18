import Link from "next/link";
import { Product } from "@/lib/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { getImages } from "@/lib/apiProduct";
import { RecordModel } from "pocketbase";

interface ProductCardProps {
  product: RecordModel;
}

export function ProductCard({ product }: ProductCardProps) {
  // const imageURL = pb.files.getURL(product, product.foto[i]);

  const images = getImages(product as any);
  const imageURL = images[0];

  const categories = product.expand?.kategori;

  // return <div></div>;
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={imageURL}
            alt={product.isim}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex gap-1 font-bold">
          {categories.map((category, i) => {
            if (i > 4) return null; // Sadece ilk 5 kategoriyi göster
            return (
              <Badge key={i} variant="secondary" className="mb-2 text-xs">
                {category.isim?.charAt(0).toUpperCase() +
                  category.isim?.slice(1)}
              </Badge>
            );
          })}
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {product.isim}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">OEM: {product.oem}</p>
        {/* <div className="mt-2 flex flex-wrap gap-1">
          {product.compatibility.slice(0, 2).map((model) => (
            <span
              key={model}
              className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
            >
              {model}
            </span>
          ))}
          {product.compatibility.length > 2 && (
            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
              +{product.compatibility.length - 2} daha fazla
            </span>
          )}
        </div> */}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant="outline">
          <Link href={`/products/${product.id}`}>
            Detayları Gör
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
