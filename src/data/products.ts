export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: 'clothing' | 'accessories' | 'music' | 'posters';
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Eternal Echo Tour T-Shirt",
    price: 29.99,
    description: "Official Zhou Shen 2024 'Eternal Echo' Tour T-shirt featuring album artwork on the front and tour dates on the back. Made from 100% cotton for maximum comfort.",
    images: ["/images/products/tshirt1.jpg"],
    category: "clothing",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Signed Tour Poster",
    price: 24.99,
    description: "Limited edition 'Eternal Echo' tour poster with Zhou Shen's digital signature. This 18\" x 24\" poster is printed on high-quality glossy paper.",
    images: ["/images/products/poster1.jpg"],
    category: "posters",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Eternal Echo Vinyl Record",
    price: 34.99,
    description: "Zhou Shen's latest album 'Eternal Echo' on vinyl. Experience the richness of these tracks in the warmth of analog sound.",
    images: ["/images/products/vinyl1.jpg"],
    category: "music",
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Zhou Shen Logo Cap",
    price: 19.99,
    description: "Stylish black cap featuring Zhou Shen's logo embroidered on the front. One size fits most with adjustable strap.",
    images: ["/images/products/cap1.jpg"],
    category: "clothing",
    inStock: true
  },
  {
    id: 5,
    name: "Concert Photobook",
    price: 39.99,
    description: "Exclusive photobook capturing memorable moments from Zhou Shen's recent concerts. Features 64 pages of high-quality photographs.",
    images: ["/images/products/photobook1.jpg"],
    category: "accessories",
    inStock: true
  },
  {
    id: 6,
    name: "Zhou Shen Tote Bag",
    price: 14.99,
    description: "Eco-friendly canvas tote bag featuring Zhou Shen's 'Eternal Echo' album artwork. Perfect for carrying your everyday essentials.",
    images: ["/images/products/totebag1.jpg"],
    category: "accessories",
    inStock: true
  },
  {
    id: 7,
    name: "Complete Discography CD Set",
    price: 79.99,
    description: "The complete collection of Zhou Shen's studio albums on CD, including rare bonus tracks. Perfect for any dedicated fan.",
    images: ["/images/products/cdset1.jpg"],
    category: "music",
    inStock: false
  },
  {
    id: 8,
    name: "Zhou Shen Bracelet",
    price: 12.99,
    description: "Elegant bracelet with Zhou Shen's initials charm. Adjustable size suitable for all wrists.",
    images: ["/images/products/bracelet1.jpg"],
    category: "accessories",
    inStock: true
  }
]; 