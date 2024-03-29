import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products : Product[] = [
    {
      id: 1,
      title: "iPhone 9",
      isAvailable: true,
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "/assets/images/product1.jpg",
      images: [
        "/assets/images/product1.jpg"
      ]
    },
    {
      id: 2,
      title: "iPhone X",
      isAvailable: true,
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "/assets/images/product2.jpg",
      images: [
        "/assets/images/product2.jpg"
      ]
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      isAvailable: true,
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 0,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "/assets/images/product3.jpg",
      images: [
        "/assets/images/product3.jpg"
      ]
    },
    {
      id: 4,
      title: "OPPOF19",
      isAvailable: false,
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "/assets/images/product4.jpg",
      images: [
        "/assets/images/product4.jpg"
      ]
    },
    {
      id: 5,
      title: "Huawei P30",
      isAvailable: true,
      description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "/assets/images/product5.jpg",
      images: [
        "/assets/images/product5.jpg"
      ]
    },
    {
      id: 6,
      title: "MacBook Pro",
      isAvailable: true,
      description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: "Apple",
      category: "laptops",
      thumbnail: "/assets/images/product6.jpg",
      images: [
        "/assets/images/product6.jpg"
      ]
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      isAvailable: true,
      description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "/assets/images/product7.jpg",
      images: [
        "/assets/images/product7.jpg"
      ]
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      isAvailable: true,
      description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "/assets/images/product8.jpg",
      images: [
        "/assets/images/product8.jpg"
      ]
    },
    {
      id: 9,
      title: "Infinix INBOOK",
      isAvailable: true,
      description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      brand: "Infinix",
      category: "laptops",
      thumbnail: "/assets/images/product9.jpg",
      images: [
        "/assets/images/product9.jpg"
      ]
    },
    {
      id: 10,
      title: "HP Pavilion 15-DK1056WM",
      isAvailable: true,
      description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      price: 1099,
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      brand: "HP Pavilion",
      category: "laptops",
      thumbnail: "/assets/images/product10.jpg",
      images: [
        "/assets/images/product10.jpg"
      ]
    },
    {
      id: 11,
      title: "perfume Oil",
      isAvailable: true,
      description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      price: 13,
      discountPercentage: 8.4,
      rating: 4.26,
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "fragrances",
      thumbnail: "/assets/images/product11.jpg",
      images: [
        "/assets/images/product11.jpg"
      ]
    },
    {
      id: 12,
      title: "Brown Perfume",
      isAvailable: true,
      description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      price: 40,
      discountPercentage: 15.66,
      rating: 4,
      stock: 52,
      brand: "Royal_Mirage",
      category: "fragrances",
      thumbnail: "/assets/images/product12.jpg",
      images: [
        "/assets/images/product12.jpg"
      ]
    },
    {
      id: 13,
      title: "Fog Scent Xpressio Perfume",
      isAvailable: true,
      description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      price: 13,
      discountPercentage: 8.14,
      rating: 4.59,
      stock: 61,
      brand: "Fog Scent Xpressio",
      category: "fragrances",
      thumbnail: "/assets/images/product13.jpg",
      images: [
        "/assets/images/product13.jpg"
      ]
    },
    {
      id: 14,
      title: "Non-Alcoholic Concentrated Perfume Oil",
      isAvailable: true,
      description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      price: 120,
      discountPercentage: 15.6,
      rating: 4.21,
      stock: 114,
      brand: "Al Munakh",
      category: "fragrances",
      thumbnail: "/assets/images/product14.jpg",
      images: [
        "/assets/images/product14.jpg"
      ]
    },
    {
      id: 15,
      title: "Eau De Perfume Spray",
      isAvailable: true,
      description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      price: 30,
      discountPercentage: 10.99,
      rating: 4.7,
      stock: 105,
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      thumbnail: "/assets/images/product15.jpg",
      images: [
        "/assets/images/product15.jpg"
      ]
    },
    {
      id: 16,
      title: "Hyaluronic Acid Serum",
      isAvailable: true,
      description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      price: 19,
      discountPercentage: 13.31,
      rating: 4.83,
      stock: 110,
      brand: "L'Oreal Paris",
      category: "skincare",
      thumbnail: "/assets/images/product16.jpg",
      images: [
        "/assets/images/product16.jpg"
      ]
    },
    {
      id: 17,
      title: "Tree Oil 30ml",
      isAvailable: true,
      description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      price: 12,
      discountPercentage: 4.09,
      rating: 4.52,
      stock: 78,
      brand: "Hemani Tea",
      category: "skincare",
      thumbnail: "/assets/images/product17.jpg",
      images: [
        "/assets/images/product17.jpg"
      ]
    },
    {
      id: 18,
      title: "Oil Free Moisturizer 100ml",
      isAvailable: true,
      description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      price: 40,
      discountPercentage: 13.1,
      rating: 4.56,
      stock: 88,
      brand: "Dermive",
      category: "skincare",
      thumbnail: "/assets/images/product18.jpg",
      images: [
        "/assets/images/product18.jpg"
      ]
    },
    {
      id: 19,
      title: "Skin Beauty Serum.",
      isAvailable: true,
      description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      price: 46,
      discountPercentage: 10.68,
      rating: 4.42,
      stock: 54,
      brand: "ROREC White Rice",
      category: "skincare",
      thumbnail: "/assets/images/product19.jpg",
      images: [
        "/assets/images/product19.jpg"
      ]
    },
    {
      id: 20,
      title: "Freckle Treatment Cream- 15gm",
      isAvailable: true,
      description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      price: 70,
      discountPercentage: 16.99,
      rating: 4.06,
      stock: 140,
      brand: "Fair & Clear",
      category: "skincare",
      thumbnail: "/assets/images/product20.jpg",
      images: [
        "/assets/images/product20.jpg"
      ]
    },
    {
      id: 21,
      title: "- Daal Masoor 500 grams",
      isAvailable: true,
      description: "Fine quality Branded Product Keep in a cool and dry place",
      price: 20,
      discountPercentage: 4.81,
      rating: 4.44,
      stock: 133,
      brand: "Saaf & Khaas",
      category: "groceries",
      thumbnail: "/assets/images/product21.jpg",
      images: [
        "/assets/images/product21.jpg"
      ]
    },
    {
      id: 22,
      title: "Elbow Macaroni - 400 gm",
      isAvailable: true,
      description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      price: 14,
      discountPercentage: 15.58,
      rating: 4.57,
      stock: 146,
      brand: "Bake Parlor Big",
      category: "groceries",
      thumbnail: "/assets/images/product22.jpg",
      images: [
        "/assets/images/product22.jpg"
      ]
    },
    {
      id: 23,
      title: "Orange Essence Food Flavou",
      isAvailable: true,
      description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      price: 14,
      discountPercentage: 8.04,
      rating: 4.85,
      stock: 26,
      brand: "Baking Food Items",
      category: "groceries",
      thumbnail: "/assets/images/product23.jpg",
      images: [
        "/assets/images/product23.jpg"
      ]
    },
    {
      id: 24,
      title: "cereals muesli fruit nuts",
      isAvailable: true,
      description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      price: 46,
      discountPercentage: 16.8,
      rating: 4.94,
      stock: 113,
      brand: "fauji",
      category: "groceries",
      thumbnail: "/assets/images/product24.jpg",
      images: [
        "/assets/images/product24.jpg"
      ]
    },
    {
      id: 25,
      title: "Gulab Powder 50 Gram",
      isAvailable: true,
      description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      price: 70,
      discountPercentage: 13.58,
      rating: 4.87,
      stock: 47,
      brand: "Dry Rose",
      category: "groceries",
      thumbnail: "/assets/images/product25.jpg",
      images: [
        "/assets/images/product25.jpg"
      ]
    },
    {
      id: 26,
      title: "Plant Hanger For Home",
      isAvailable: true,
      description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      price: 41,
      discountPercentage: 17.86,
      rating: 4.08,
      stock: 131,
      brand: "Boho Decor",
      category: "home-decoration",
      thumbnail: "/assets/images/product26.jpg",
      images: [
        "/assets/images/product26.jpg"
      ]
    },
    {
      id: 27,
      title: "Flying Wooden Bird",
      isAvailable: true,
      description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      price: 51,
      discountPercentage: 15.58,
      rating: 4.41,
      stock: 17,
      brand: "Flying Wooden",
      category: "home-decoration",
      thumbnail: "/assets/images/product27.jpg",
      images: [
        "/assets/images/product27.jpg"
      ]
    },
    {
      id: 28,
      title: "3D Embellishment Art Lamp",
      isAvailable: true,
      description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
      price: 20,
      discountPercentage: 16.49,
      rating: 4.82,
      stock: 54,
      brand: "LED Lights",
      category: "home-decoration",
      thumbnail: "/assets/images/product28.jpg",
      images: [
        "/assets/images/product28.jpg"
      ]
    },
    {
      id: 30,
      title: "Key Holder",
      isAvailable: true,
      description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      price: 30,
      discountPercentage: 0,
      rating: 4.92,
      stock: 54,
      brand: "Golden",
      category: "home-decoration",
      thumbnail: "/assets/images/product2.jpg",
      images: [
        "/assets/images/product2.jpg"
      ]
    }
  ];

  totalInStock = this.products.filter(p => p.isAvailable == true).length
  totalOutOfStock = this.products.filter(p => p.isAvailable == false).length
  selectedFilter: string = 'all';
  
  productList = this.products;
  
  selectedProduct: Product;

  @Input()
    searchText: string = "";

  ngOnChanges(changes: SimpleChanges){
    if(changes['searchText']){
      this.productList = this.products.filter(p => this.searchText == '' || 
                                            this.searchText == null ||
                                            p.title.toLocaleLowerCase().includes(this.searchText));
    }
  }
  
  filterChanged(value: string){
    // this.selectedFilter = value;
    this.productList = this.products.filter(p => p.isAvailable.toString() === value || value === 'all')
  }
}
