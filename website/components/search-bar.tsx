"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import Link from "next/link";
import { getImages, searchProducts } from "@/lib/apiProduct";

interface SearchBarProps {
  variant?: "default" | "hero";
  placeholder?: string;
}

export function SearchBar({
  variant = "default",
  placeholder = "İsim veya OEM numarası ile ara...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.length >= 2) {
        setIsLoading(true);
        const searchResults = await searchProducts(query);
        setResults(searchResults.items as any);
        setIsOpen(true);
        setIsLoading(false);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Search
            className={`absolute left-3 text-muted-foreground ${
              variant === "hero" ? "h-5 w-5" : "h-4 w-4"
            }`}
          />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className={`${
              variant === "hero"
                ? "h-14 pl-12 pr-24 text-lg bg-card border-border shadow-lg"
                : "h-10 pl-10 pr-16 bg-card border-border"
            } w-full rounded-lg`}
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={clearSearch}
              className={`absolute ${
                variant === "hero" ? "right-20" : "right-12"
              } h-8 w-8`}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          <Button
            type="submit"
            className={`absolute right-1.5 ${
              variant === "hero" ? "h-11 px-6" : "h-7 px-3 text-sm"
            }`}
          >
            Ara
          </Button>
        </div>
      </form>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-muted-foreground">
              Aranıyor...
            </div>
          ) : results.length > 0 ? (
            <ul className="py-2">
              {results.map((product) => {
                const imageURL = getImages(product)[0];

                return (
                  <li key={product.id}>
                    <Link
                      href={`/products/${product.id}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-4 py-3 hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 bg-muted rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={imageURL}
                          alt={product.isim}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">
                          {product.isim}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          OEM: {product.oem}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
              <li className="border-t border-border mt-2 pt-2 px-4 pb-2">
                <Link
                  href={`/products?search=${encodeURIComponent(query)}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-primary hover:underline"
                >
                  &quot;{query}&quot; için tüm sonuçları gör
                </Link>
              </li>
            </ul>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              &quot;{query}&quot; için ürün bulunamadı
            </div>
          )}
        </div>
      )}
    </div>
  );
}
