
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.8,
    reviews: 124,
    description: "High-quality wireless headphones with noise cancellation",
    inStock: true
  },
  {
    id: 2,
    name: "Smart Fitness Tracker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.7,
    reviews: 203,
    description: "Track your fitness goals with this smart wearable",
    inStock: true
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.4,
    reviews: 156,
    description: "Portable wireless speaker with premium sound",
    inStock: false
  },
  {
    id: 4,
    name: "4K Action Camera",
    price: 259.99,
    originalPrice: 329.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.6,
    reviews: 89,
    description: "Capture your adventures in stunning 4K quality",
    inStock: true
  },
  {
    id: 5,
    name: "Gaming Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.5,
    reviews: 167,
    description: "Mechanical gaming keyboard with RGB lighting",
    inStock: true
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.3,
    reviews: 234,
    description: "Ergonomic wireless mouse with precision tracking",
    inStock: true
  },
  {
    id: 7,
    name: "Smartphone Stand",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.2,
    reviews: 145,
    description: "Adjustable smartphone stand for desk use",
    inStock: true
  },
  {
    id: 8,
    name: "Bluetooth Earbuds",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.4,
    reviews: 189,
    description: "True wireless earbuds with charging case",
    inStock: true
  },

  // Accessories
  {
    id: 9,
    name: "Minimalist Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4.6,
    reviews: 89,
    description: "Elegant minimalist watch with leather strap",
    inStock: true
  },
  {
    id: 10,
    name: "Leather Backpack",
    price: 129.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4.5,
    reviews: 67,
    description: "Premium leather backpack for professionals",
    inStock: true
  },
  {
    id: 11,
    name: "Sunglasses",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4.3,
    reviews: 92,
    description: "Stylish sunglasses with UV protection",
    inStock: true
  },
  {
    id: 12,
    name: "Leather Wallet",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4.7,
    reviews: 156,
    description: "Genuine leather wallet with RFID protection",
    inStock: true
  },
  {
    id: 13,
    name: "Designer Belt",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4.4,
    reviews: 78,
    description: "Premium leather belt with metal buckle",
    inStock: true
  },
  {
    id: 14,
    name: "Travel Duffel Bag",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4.6,
    reviews: 134,
    description: "Spacious duffel bag perfect for travel",
    inStock: true
  },

  // Clothing
  {
    id: 15,
    name: "Classic T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4.5,
    reviews: 89,
    description: "Comfortable cotton t-shirt in classic fit",
    inStock: true
  },
  {
    id: 16,
    name: "Denim Jacket",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4.6,
    reviews: 145,
    description: "Classic denim jacket with modern fit",
    inStock: true
  },
  {
    id: 17,
    name: "Running Shoes",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4.8,
    reviews: 234,
    description: "Lightweight running shoes with superior comfort",
    inStock: true
  },
  {
    id: 18,
    name: "Casual Hoodie",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4.4,
    reviews: 167,
    description: "Soft cotton hoodie perfect for casual wear",
    inStock: true
  },
  {
    id: 19,
    name: "Formal Dress Shirt",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4.7,
    reviews: 98,
    description: "Professional dress shirt for business occasions",
    inStock: true
  },
  {
    id: 20,
    name: "Summer Dress",
    price: 119.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4.5,
    reviews: 123,
    description: "Elegant summer dress in floral pattern",
    inStock: true
  },

  // Home & Garden
  {
    id: 21,
    name: "Coffee Maker",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=500&h=500&fit=crop",
    category: "home",
    rating: 4.6,
    reviews: 189,
    description: "Programmable coffee maker with thermal carafe",
    inStock: true
  },
  {
    id: 22,
    name: "Table Lamp",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    category: "home",
    rating: 4.4,
    reviews: 76,
    description: "Modern table lamp with adjustable brightness",
    inStock: true
  },
  {
    id: 23,
    name: "Throw Pillow Set",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "home",
    rating: 4.3,
    reviews: 134,
    description: "Decorative throw pillows set of 2",
    inStock: true
  },
  {
    id: 24,
    name: "Wall Art Canvas",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop",
    category: "home",
    rating: 4.5,
    reviews: 98,
    description: "Abstract canvas wall art for modern homes",
    inStock: true
  },
  {
    id: 25,
    name: "Desk Organizer",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop",
    category: "home",
    rating: 4.2,
    reviews: 156,
    description: "Bamboo desk organizer with multiple compartments",
    inStock: true
  },

  // Sports & Outdoors
  {
    id: 26,
    name: "Yoga Mat",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
    category: "sports",
    rating: 4.7,
    reviews: 267,
    description: "Non-slip yoga mat with carrying strap",
    inStock: true
  },
  {
    id: 27,
    name: "Water Bottle",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    category: "sports",
    rating: 4.5,
    reviews: 189,
    description: "Insulated stainless steel water bottle",
    inStock: true
  },
  {
    id: 28,
    name: "Resistance Bands Set",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    category: "sports",
    rating: 4.4,
    reviews: 145,
    description: "Complete resistance bands set for home workouts",
    inStock: true
  },
  {
    id: 29,
    name: "Camping Tent",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=500&fit=crop",
    category: "sports",
    rating: 4.6,
    reviews: 89,
    description: "4-person waterproof camping tent",
    inStock: true
  },
  {
    id: 30,
    name: "Hiking Backpack",
    price: 179.99,
    originalPrice: 229.99,
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500&h=500&fit=crop",
    category: "sports",
    rating: 4.8,
    reviews: 123,
    description: "40L hiking backpack with multiple compartments",
    inStock: true
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "electronics", name: "Electronics" },
  { id: "accessories", name: "Accessories" },
  { id: "clothing", name: "Clothing" },
  { id: "home", name: "Home & Garden" },
  { id: "sports", name: "Sports & Outdoors" }
];
