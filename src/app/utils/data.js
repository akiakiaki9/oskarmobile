// utils/data.js

export const products = [
  // Смартфоны iPhone
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "smartphones",
    price: 119990,
    oldPrice: 129990,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
    rating: 4.9,
    reviews: 245,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#f5e7d3"],
    memory: ["256GB", "512GB", "1TB"]
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "smartphones",
    price: 99990,
    oldPrice: 109990,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg",
    rating: 4.8,
    reviews: 189,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#f5e7d3"],
    memory: ["128GB", "256GB", "512GB"]
  },
  {
    id: 3,
    name: "iPhone 15 Plus",
    brand: "Apple",
    category: "smartphones",
    price: 89990,
    oldPrice: 94990,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-plus-1.jpg",
    rating: 4.7,
    reviews: 134,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#ffe5d9"],
    memory: ["128GB", "256GB"]
  },
  {
    id: 4,
    name: "iPhone 15",
    brand: "Apple",
    category: "smartphones",
    price: 79990,
    oldPrice: 84990,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#ffe5d9"],
    memory: ["128GB", "256GB"]
  },
  {
    id: 5,
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    category: "smartphones",
    price: 109990,
    oldPrice: 119990,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    rating: 4.8,
    reviews: 312,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#8b6b4d"],
    memory: ["256GB", "512GB", "1TB"]
  },
  {
    id: 6,
    name: "iPhone 14 Pro",
    brand: "Apple",
    category: "smartphones",
    price: 99990,
    oldPrice: 109990,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-1.jpg",
    rating: 4.8,
    reviews: 267,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#8b6b4d"],
    memory: ["128GB", "256GB", "512GB"]
  },
  {
    id: 7,
    name: "iPhone 14",
    brand: "Apple",
    category: "smartphones",
    price: 74990,
    oldPrice: 79990,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-1.jpg",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#ffe5d9"],
    memory: ["128GB", "256GB"]
  },
  {
    id: 8,
    name: "iPhone SE (2023)",
    brand: "Apple",
    category: "smartphones",
    price: 54990,
    oldPrice: 59990,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-2022-1.jpg",
    rating: 4.5,
    reviews: 98,
    inStock: true,
    colors: ["#000000", "#ffffff", "#ff4d4d"],
    memory: ["64GB", "128GB", "256GB"]
  },

  // Смартфоны Samsung
  {
    id: 9,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "smartphones",
    price: 109990,
    oldPrice: 119990,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg",
    rating: 4.8,
    reviews: 134,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#8b6b4d"],
    memory: ["256GB", "512GB", "1TB"]
  },
  {
    id: 10,
    name: "Samsung Galaxy S24+",
    brand: "Samsung",
    category: "smartphones",
    price: 89990,
    oldPrice: 99990,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-plus-5g-sm-s926-1.jpg",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#8b6b4d"],
    memory: ["256GB", "512GB"]
  },
  {
    id: 11,
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    category: "smartphones",
    price: 74990,
    oldPrice: 79990,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-5g-sm-s921-1.jpg",
    rating: 4.6,
    reviews: 112,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#ffff00"],
    memory: ["128GB", "256GB"]
  },
  {
    id: 12,
    name: "Samsung Galaxy Z Fold5",
    brand: "Samsung",
    category: "smartphones",
    price: 139990,
    oldPrice: 149990,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold5-1.jpg",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#8b6b4d"],
    memory: ["256GB", "512GB"]
  },
  {
    id: 13,
    name: "Samsung Galaxy Z Flip5",
    brand: "Samsung",
    category: "smartphones",
    price: 99990,
    oldPrice: 109990,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip5-1.jpg",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#98ff98"],
    memory: ["256GB", "512GB"]
  },
  {
    id: 14,
    name: "Samsung Galaxy A55",
    brand: "Samsung",
    category: "smartphones",
    price: 39990,
    oldPrice: 44990,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a55-5g-sm-a556-1.jpg",
    rating: 4.5,
    reviews: 245,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#32cd32"],
    memory: ["128GB", "256GB"]
  },
  {
    id: 15,
    name: "Samsung Galaxy A35",
    brand: "Samsung",
    category: "smartphones",
    price: 29990,
    oldPrice: 32990,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a35-5g-sm-a356-1.jpg",
    rating: 4.4,
    reviews: 178,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#4169e1"],
    memory: ["128GB", "256GB"]
  },
  {
    id: 16,
    name: "Samsung Galaxy A15",
    brand: "Samsung",
    category: "smartphones",
    price: 19990,
    oldPrice: 22990,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a15-4g-sm-a155-1.jpg",
    rating: 4.3,
    reviews: 234,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#4169e1"],
    memory: ["128GB"]
  },

  // Xiaomi
  {
    id: 17,
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    category: "smartphones",
    price: 89990,
    oldPrice: 99990,
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-ultra-1.jpg",
    rating: 4.7,
    reviews: 67,
    inStock: true,
    colors: ["#000000", "#ffffff", "#8b6b4d"],
    memory: ["256GB", "512GB"]
  },
  {
    id: 18,
    name: "Xiaomi 14",
    brand: "Xiaomi",
    category: "smartphones",
    price: 69990,
    oldPrice: 74990,
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-1.jpg",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    colors: ["#000000", "#ffffff", "#8b6b4d"],
    memory: ["256GB", "512GB"]
  },
  {
    id: 19,
    name: "Xiaomi 13T Pro",
    brand: "Xiaomi",
    category: "smartphones",
    price: 59990,
    oldPrice: 64990,
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-13t-pro-1.jpg",
    rating: 4.6,
    reviews: 123,
    inStock: true,
    colors: ["#000000", "#00008b", "#32cd32"],
    memory: ["256GB", "512GB"]
  },
  {
    id: 20,
    name: "POCO X6 Pro",
    brand: "Xiaomi",
    category: "smartphones",
    price: 32990,
    oldPrice: 35990,
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/poco-x6-pro-5g-1.jpg",
    rating: 4.6,
    reviews: 178,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#ffd700"],
    memory: ["256GB", "512GB"]
  },
  {
    id: 21,
    name: "POCO F6",
    brand: "Xiaomi",
    category: "smartphones",
    price: 39990,
    oldPrice: 42990,
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/poco-f6-1.jpg",
    rating: 4.7,
    reviews: 92,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#ff69b4"],
    memory: ["256GB", "512GB"]
  },
  {
    id: 22,
    name: "Redmi Note 13 Pro+",
    brand: "Xiaomi",
    category: "smartphones",
    price: 34990,
    oldPrice: 37990,
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-plus-5g-1.jpg",
    rating: 4.5,
    reviews: 267,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#8a2be2"],
    memory: ["256GB", "512GB"]
  },
  {
    id: 23,
    name: "Redmi Note 13",
    brand: "Xiaomi",
    category: "smartphones",
    price: 22990,
    oldPrice: 24990,
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-4g-1.jpg",
    rating: 4.4,
    reviews: 345,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#32cd32"],
    memory: ["128GB", "256GB"]
  },
  {
    id: 24,
    name: "Redmi 13C",
    brand: "Xiaomi",
    category: "smartphones",
    price: 14990,
    oldPrice: 16990,
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-13c-1.jpg",
    rating: 4.3,
    reviews: 456,
    inStock: true,
    colors: ["#000000", "#9b9b9b", "#32cd32"],
    memory: ["128GB", "256GB"]
  },

  // Аксессуары
  {
    id: 25,
    name: "Чехол Apple Silicone Case",
    brand: "Apple",
    category: "accessories",
    type: "case",
    price: 4990,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWNY3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1661450406691",
    rating: 4.5,
    reviews: 345,
    inStock: true,
    colors: ["#AE5328", "#000000", "#ffffff", "#ff69b4"],
    compatible: ["iPhone 15", "iPhone 15 Pro", "iPhone 15 Pro Max"]
  },
  {
    id: 26,
    name: "Защитное стекло Spigen",
    brand: "Spigen",
    category: "accessories",
    type: "glass",
    price: 1290,
    image: "https://www.spigen.ru/upload/iblock/c95/8v6kt3kqba7s9dx3y8cy4q9a70oohb3q/GLAS_TR_NZ_SGP10425_1.jpg",
    rating: 4.3,
    reviews: 567,
    inStock: true,
    compatible: ["iPhone 15", "Samsung S24", "Xiaomi 14"]
  },
  {
    id: 27,
    name: "Беспроводная зарядка Samsung",
    brand: "Samsung",
    category: "accessories",
    type: "charger",
    price: 3990,
    oldPrice: 4990,
    image: "https://cdn.comfy.ua/media/catalog/product/cache/4/image/600x/0dc2d03fe217f8c83829496872af24a0/e/p/ep-p2400tbrgru_001_front_black_samsung.jpg",
    rating: 4.6,
    reviews: 123,
    inStock: true,
  },
  {
    id: 28,
    name: "Наушники AirPods Pro 2",
    brand: "Apple",
    category: "accessories",
    type: "audio",
    price: 18990,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
    rating: 4.9,
    reviews: 890,
    inStock: true,
    colors: ["#ffffff"]
  },
  {
    id: 29,
    name: "Наушники Galaxy Buds2 Pro",
    brand: "Samsung",
    category: "accessories",
    type: "audio",
    price: 12990,
    oldPrice: 14990,
    image: "https://cdn.comfy.ua/media/catalog/product/cache/4/image/600x/0dc2d03fe217f8c83829496872af24a0/s/m/sm-r510nlvaruu_001_front_burgundy_samsung.jpg",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    colors: ["#8b6b4d", "#ffffff", "#800080"]
  },
  {
    id: 30,
    name: "Power Bank Xiaomi 20000mAh",
    brand: "Xiaomi",
    category: "accessories",
    type: "powerbank",
    price: 2990,
    image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1632742324.23626966.jpg",
    rating: 4.5,
    reviews: 234,
    inStock: true,
    colors: ["#ffffff", "#000000"]
  }
];

// Функция для фильтрации по категориям
export const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
};

// Функция для поиска товаров
export const searchProducts = (query) => {
    const searchTerm = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
    );
};

// Получить уникальные бренды
export const getBrands = () => {
    const brands = products.map(product => product.brand);
    return [...new Set(brands)];
};

// Получить товары по бренду
export const getProductsByBrand = (brand) => {
    return products.filter(product => product.brand === brand);
};

// Категории для навигации
export const categories = [
    { id: 'smartphones', name: 'Смартфоны', icon: '📱' },
    { id: 'accessories', name: 'Аксессуары', icon: '🎧' },
    { id: 'cases', name: 'Чехлы', icon: '📦' },
    { id: 'audio', name: 'Аудио', icon: '🎵' },
    { id: 'chargers', name: 'Зарядки', icon: '⚡' }
];