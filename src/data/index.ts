import { v4 as uuidv4 } from "uuid";
import type { IProduct } from "../interfaces";
import type { IFormInput } from "../interfaces";
import type { ICategory } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: "Nike Revolution 6 Nn Running Shoes",
    description:
      "Nike Revolution 6 Nn Running Shoes are designed for the modern athlete, offering a blend of comfort, durability, and versatile style for both running and casual wear.",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/3774131/2.jpg?9379",
    price: "2700",
    colors: [
      "#A31ACB",
      "#FF6E31",
      "#3C2A21",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#820000",
      "#13005A",
      "#1F8A70",
      "#84D2C5",
    ],
    category: {
      name: "Fashion",
      imageURL:
        "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/4774131/1.jpg?7204",
    },
  },
  {
    id: uuidv4(),
    title: "Lenovo IdeaPad 1 15IAU7 Laptop Intel",
    description:
      "Lenovo IdeaPad 1 15IAU7 Laptop Intel® Core™ I3-1215U, 8GB Ram, 256GB SSD, Integrated Intel® UHD, 15.6' HD, 82QD00HHED",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/2899231/1.jpg?0891",
    price: "670",
    colors: ["#000000", "#13005A"],
    category: {
      name: "Desktop",
      imageURL:
        "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/2899231/1.jpg?0891",
    },
  },
  {
    id: uuidv4(),
    title:
      "Sony PlayStation 5 Slim Console 1 TB SSD With 1 Wireless Controller",
    description:
      "Sony PlayStation 5 Slim Console is the ultimate gaming experience with a 1TB SSD, designed to enhance gameplay with speed and efficiency. This console comes with a DualSense Wireless Controller and offers a plethora of features that make it perfect for gamers of all ages.",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/476952/1.jpg?3425",
    price: "1200",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Gaming",
      imageURL:
        "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/476952/1.jpg?3425",
    },
  },
  {
    id: uuidv4(),
    title:
      "Honor X6c Dual SIM 4G Smartphone – 128GB Storage, 6GB RAM – Moonlight White",
    description:
      "Honor X6c Dual SIM 4G Smartphone is a robust and feature-packed mobile device designed for users who demand performance and durability in their everyday smartphone. With an impressive 128GB of storage and 6GB of RAM, this smartphone ensures that you can multitask efficiently while enjoying smooth visuals on its vibrant 6.61-inch display.",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/9031331/1.jpg?8733",
    price: "1500",
    colors: [],
    category: {
      name: "Phones & Tablets",
      imageURL:
        "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/9031331/1.jpg?8733",
    },
  },
  {
    id: uuidv4(),
    title:
      "X8+ Plus Ultra Smart Watch - 49MM Screen with Highest Resolution, Waterproof and Wireless Charging - Black",
    description:
      "X8+ Plus Ultra Smart Watch is the perfect blend of style and functionality, designed for tech-savvy individuals who desire a high-quality smartwatch experience. With its impressive 49MM screen, always-on display, and waterproof capabilities, this smartwatch is ready to accompany you through every moment of your day.",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/773483/1.jpg?0024",
    price: "150",
    colors: [
      "#A31ACB",
      "#FF6E31",
      "#3C2A21",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#820000",
      "#13005A",
      "#1F8A70",
      "#84D2C5",
    ],
    category: {
      name: "Phones & Tablets",
      imageURL:
        "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/9031331/1.jpg?8733",
    },
  },
  {
    id: uuidv4(),
    title: "Artistico Domino Fixed Chair - Gray",
    description:
      "The Artistico Domino Fixed Chair in Gray is a beautifully crafted seating solution that combines elegance with functionality, making it perfect for both home and office use.",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/170112/1.jpg?5626",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Home & Furniture",
      imageURL:
        "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/170112/1.jpg?5626",
    },
  },
  {
    id: uuidv4(),
    title: "DELL PC-7020-MT i3 12100 8G 512",
    description:
      "DELL PC-7020-MT i3 12100 8G 512 is a powerful tower PC designed for efficiency and performance, featuring the latest 12th Generation Intel Core i3 processor for seamless multitasking and enhanced productivity.",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/6904331/1.jpg?4043",
    price: "120000",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Desktop",
      imageURL:
        "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/2899231/1.jpg?0891",
    },
  },
  {
    id: uuidv4(),
    title: "Nike U Nk Df Tee Run Division Running Top for Men - Black",
    description:
      "Nike U Nk Df Tee Run Division is a premium running top designed for performance and comfort, perfect for men who enjoy running and athletic activities. This stylish tee features breathable polyester material that ensures ease of movement, making it an essential addition to your athletic apparel collection.",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/4774131/1.jpg?7204",
    price: "1500",
    colors: ["#3C2A21", "#820000", "#000000"],
    category: {
      name: "Fashion",
      imageURL:
        "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/4774131/1.jpg?7204",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84D2C5",
  "#13005A",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
];

export const categories: ICategory[] = [
  {
    id: uuidv4(),
    name: "Phones & Tablets",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/9031331/1.jpg?8733",
  },
  {
    id: uuidv4(),
    name: "Fashion",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/4774131/1.jpg?7204",
  },
  {
    id: uuidv4(),
    name: "Desktop",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/2899231/1.jpg?0891",
  },
  {
    id: uuidv4(),
    name: "Home & Furniture",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/170112/1.jpg?5626",
  },
  {
    id: uuidv4(),
    name: "Gaming",
    imageURL:
      "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/476952/1.jpg?3425",
  },
];
