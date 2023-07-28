import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Laptop",
    description: "A powerful laptop with high-performance processors and a sleek design.",
    price: 1200,
    image: "https://wallpapers.com/images/high/asus-pictures-uz0e6vqsqndny8zb.webp",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "The latest smartphone with advanced camera technology and fast processing.",
    price: 800,
    image: "https://www.lifewire.com/thmb/xISTCeGlBI8wuyJQJcRbeaZ73Og=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iphone-d54f4bc39e0e48d58c7a7f5fafd3bd0a.jpg",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise-cancelling feature for immersive sound.",
    price: 150,
    image: "https://hips.hearstapps.com/hmg-prod/images/wireless-headphone-display-in-the-store-royalty-free-image-1678138342.jpg",
  },
  {
    id: 4,
    name: "Gaming PC",
    description: "A gaming PC with top-of-the-line graphics and performance for a smooth gaming experience.",
    price: 2000,
    image: "https://wallpapers.com/images/high/gaming-pc-setup-2000-x-1333-wallpaper-6w1lo2kjif41zpeb.webp",
  },
  {
    id: 5,
    name: "External Hard Drive",
    description: "An external hard drive with large storage capacity for data backup and transfer.",
    price: 100,
    image: "https://wallpapers.com/images/high/computer-hard-drive-on-compact-discs-12kh5el7v4m4u8xr.webp",
  },
  {
    id: 6,
    name: "Wireless Router",
    description: "A high-speed wireless router with wide coverage for seamless internet connectivity.",
    price: 80,
    image: "https://wallpapers.com/images/high/ethernet-3200-x-2129-wallpaper-stzhjmrdq33si5im.webp",
  },
  {
    id: 7,
    name: "Smartwatch",
    description: "A smartwatch with fitness tracking and health monitoring features.",
    price: 250,
    image: "https://wallpapers.com/images/high/apple-smartwatch-for-fitness-07eb2oe3w8m9poa7.webp",
  },
  {
    id: 8,
    name: "Monitor",
    description: "A high-resolution monitor with adjustable stand for ergonomic viewing.",
    price: 300,
    image: "https://wallpapers.com/images/high/stock-pictures-r4y2zggxfkynqiui.webp",
  },
  {
    id: 9,
    name: "Graphics Card",
    description: "A powerful graphics card for smooth rendering and gaming performance.",
    price: 500,
    image: "https://wallpapers.com/images/high/4k-graphics-cards-3055-x-2034-wallpaper-rdpih8xz9007dlzq.webp",
  },
  {
    id: 10,
    name: "Mechanical Keyboard",
    description: "A mechanical keyboard with customizable RGB lighting and responsive keys.",
    price: 120,
    image: "https://wallpapers.com/images/high/logitech-black-keyboard-iasnk6x1nozttdhr.webp",
  }
  
];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return { ...state, filter: action.payload };
    },
    setSortBy: (state, action) => {
      return { ...state, sortBy: action.payload };
    },
  },
});

export const { setFilter, setSortBy } = itemsSlice.actions;
export default itemsSlice.reducer;
