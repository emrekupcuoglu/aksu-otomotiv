export interface Product {
  // id: string;
  // name: string;
  // oemNumber: string;
  // description: string;
  // category: string;
  // images: string[];
  // compatibility: string[];

  id: string;
  isim: string;
  oem: number;
  aciklama: string;
  foto: string[];
  stok: boolean;
  kategori: string;
  collectionName: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}
