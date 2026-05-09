export type MenuItem = {
  name: string;
  price: string;
  category: Category;
  image: string;
  desc?: string;
};

export type Category =
  | "Biryani"
  | "Fried Rice"
  | "Pizza"
  | "Burger & Sandwich"
  | "Thakali Set"
  | "Saadheko";

export const categories: Category[] = [
  "Biryani",
  "Fried Rice",
  "Pizza",
  "Burger & Sandwich",
  "Thakali Set",
  "Saadheko",
];

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const menu: MenuItem[] = [
  { name: "Chicken Dum Biryani", price: "Rs. 320", category: "Biryani", image: u("photo-1633945274405-b6c8069047b0"), desc: "Slow-cooked basmati, saffron & tender chicken" },
  { name: "Mutton Biryani", price: "Rs. 420", category: "Biryani", image: u("photo-1589302168068-964664d93dc0"), desc: "Aromatic spices with succulent mutton" },
  { name: "Veg Biryani", price: "Rs. 260", category: "Biryani", image: u("photo-1596797038530-2c107229654b"), desc: "Garden vegetables, ghee & whole spices" },

  { name: "Chicken Fried Rice", price: "Rs. 240", category: "Fried Rice", image: u("photo-1603133872878-684f208fb84b"), desc: "Wok-tossed with chilli & spring onion" },
  { name: "Mix Fried Rice", price: "Rs. 280", category: "Fried Rice", image: u("photo-1512058564366-18510be2db19"), desc: "Chicken, prawn & egg signature blend" },
  { name: "Veg Fried Rice", price: "Rs. 200", category: "Fried Rice", image: u("photo-1567337710282-00832b415979"), desc: "Crisp vegetables, soy & sesame" },

  { name: "Margherita Pizza", price: "Rs. 380", category: "Pizza", image: u("photo-1574071318508-1cdbab80d002"), desc: "San Marzano, mozzarella, basil" },
  { name: "BBQ Chicken Pizza", price: "Rs. 520", category: "Pizza", image: u("photo-1565299624946-b28f40a0ae38"), desc: "Smoky BBQ glaze & roasted chicken" },
  { name: "Pepperoni Pizza", price: "Rs. 560", category: "Pizza", image: u("photo-1628840042765-356cda07504e"), desc: "Cured pepperoni & melted mozzarella" },

  { name: "Classic Beef Burger", price: "Rs. 340", category: "Burger & Sandwich", image: u("photo-1568901346375-23c9450c58cd"), desc: "House patty, cheddar, smoked aioli" },
  { name: "Crispy Chicken Burger", price: "Rs. 300", category: "Burger & Sandwich", image: u("photo-1606131731446-5568d87113aa"), desc: "Buttermilk fried chicken, slaw" },
  { name: "Club Sandwich", price: "Rs. 260", category: "Burger & Sandwich", image: u("photo-1528735602780-2552fd46c7af"), desc: "Triple-stack, egg, bacon, fries" },

  { name: "Chicken Thakali Set", price: "Rs. 480", category: "Thakali Set", image: u("photo-1567337710282-00832b415979"), desc: "Dal, bhat, tarkari, achar, masu" },
  { name: "Mutton Thakali Set", price: "Rs. 580", category: "Thakali Set", image: u("photo-1631452180519-c014fe946bc7"), desc: "Traditional Nepali platter, mutton curry" },
  { name: "Veg Thakali Set", price: "Rs. 360", category: "Thakali Set", image: u("photo-1585937421612-70a008356fbe"), desc: "Seasonal greens, gundruk, dal" },

  { name: "Chicken Saadheko", price: "Rs. 280", category: "Saadheko", image: u("photo-1606756790138-261d2b21cd75"), desc: "Spiced shredded chicken, mustard oil" },
  { name: "Bhatmas Saadheko", price: "Rs. 180", category: "Saadheko", image: u("photo-1625944525533-473f1b3d9684"), desc: "Crunchy soybeans, onion, chilli" },
  { name: "Wai-Wai Saadheko", price: "Rs. 160", category: "Saadheko", image: u("photo-1626804475297-41608ea09aeb"), desc: "Crushed noodles, tangy spices" },
];

export const galleryImages = [
  u("photo-1517248135467-4c7edcad34c4"),
  u("photo-1559925393-8be0ec4767c8"),
  u("photo-1504674900247-0877df9cc836"),
  u("photo-1414235077428-338989a2e8c0"),
  u("photo-1555396273-367ea4eb4db5"),
  u("photo-1481833761820-0509d3217039"),
  u("photo-1525610553991-2bede1a236e2"),
  u("photo-1495474472287-4d71bcdd2085"),
  u("photo-1521017432531-fbd92d768814"),
];
