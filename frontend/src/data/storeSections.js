// src/data/storeSections.js
// Data-driven definition of store sections for the SmartAisle indoor map

/**
 * Each section has:
 * - name: display label
 * - position: top-left grid cell (x, y)
 * - size: width and height in grid cells
 * - color: Tailwind color class for background
 * - access: (optional) array of { x, y } for pickup points
 */

export const storeSections = [
  // --- COLORS ---
  // Department (Clothing, Home, etc.): #a7f3d0 (emerald-200)
  // Aisles/Shelves: #f5f5d4 (a light beige)
  // Food/Produce: #fef08a (yellow-200)
  // Services/Front: #fecaca (red-200)
  // Special: #c7d2fe (indigo-200)

  // --- LEFT WALL (REFRIGERATED) ---
  { name: "Deli", position: { x: 1, y: 1 }, size: { w: 2, h: 7 }, color: "#fef08a" },
  { name: "Meat", position: { x: 1, y: 9 }, size: { w: 2, h: 7 }, color: "#fef08a" },
  { name: "Cheese", position: { x: 1, y: 17 }, size: { w: 2, h: 7 }, color: "#fef08a" },

  // --- TOP WALL ---
  { name: "Dairy", position: { x: 4, y: 1 }, size: { w: 4, h: 2 }, color: "#fef08a" },
  { name: "Milk", position: { x: 9, y: 1 }, size: { w: 5, h: 2 }, color: "#fef08a" },
  { name: "Soda & Water", position: { x: 15, y: 1 }, size: { w: 4, h: 2 }, color: "#fef08a" },
  { name: "Beer & Wine", position: { x: 20, y: 1 }, size: { w: 5, h: 2 }, color: "#fef08a" },

  // --- RIGHT WALL ---
  { name: "Home Decor", position: { x: 47, y: 1 }, size: { w: 2, h: 8 }, color: "#a7f3d0" },
  { name: "Fabric & Crafts", position: { x: 47, y: 10 }, size: { w: 2, h: 6 }, color: "#a7f3d0" },
  { name: "Garden Center", position: { x: 47, y: 17 }, size: { w: 2, h: 12 }, color: "#a7f3d0" },

  // --- GROCERY AISLES (2-tile wide shelves, 1-tile wide paths) ---
  // Aisle 1
  { name: "Cereal & Breakfast", position: { x: 5, y: 4 }, size: { w: 2, h: 18 }, color: "#f5f5d4" },
  { name: "Coffee & Tea", position: { x: 8, y: 4 }, size: { w: 2, h: 18 }, color: "#f5f5d4" },
  // Aisle 2
  { name: "Pasta & Sauces", position: { x: 12, y: 4 }, size: { w: 2, h: 18 }, color: "#f5f5d4" },
  { name: "Canned Goods", position: { x: 15, y: 4 }, size: { w: 2, h: 18 }, color: "#f5f5d4" },
  // Aisle 3
  { name: "Snacks & Cookies", position: { x: 19, y: 4 }, size: { w: 2, h: 18 }, color: "#f5f5d4" },
  { name: "Baking Supplies", position: { x: 22, y: 4 }, size: { w: 2, h: 18 }, color: "#f5f5d4" },

  // --- CENTER DEPARTMENTS (Shifted for wider aisles) ---
  { name: "Infants & Toddlers", position: { x: 26, y: 4 }, size: { w: 4, h: 8 }, color: "#a7f3d0" },
  { name: "Ladies Wear", position: { x: 26, y: 13 }, size: { w: 4, h: 8 }, color: "#a7f3d0" },

  { name: "Jewelry & Photo", position: { x: 31, y: 4 }, size: { w: 4, h: 8 }, color: "#a7f3d0" },
  { name: "Men's Wear", position: { x: 31, y: 13 }, size: { w: 4, h: 8 }, color: "#a7f3d0" },

  { name: "Hardware & Paint", position: { x: 36, y: 4 }, size: { w: 4, h: 8 }, color: "#a7f3d0" },
  { name: "Housewares", position: { x: 36, y: 13 }, size: { w: 4, h: 8 }, color: "#a7f3d0" },

  { name: "Electronics", position: { x: 41, y: 4 }, size: { w: 3, h: 8 }, color: "#a7f3d0" },
  { name: "Toys & Sporting Goods", position: { x: 41, y: 13 }, size: { w: 3, h: 8 }, color: "#a7f3d0" },

  // --- BOTTOM SECTIONS ---
  { name: "Produce", position: { x: 1, y: 25 }, size: { w: 5, h: 4 }, color: "#fef08a" },
  { name: "Bakery", position: { x: 7, y: 27 }, size: { w: 5, h: 2 }, color: "#fef08a" },
  { name: "Candy & Magazines", position: { x: 13, y: 24 }, size: { w: 15, h: 1 }, color: "#fecaca" },

  // --- FRONT OF STORE ---
  { name: "ENTRANCE", position: { x: 37, y: 27 }, size: { w: 9, h: 2 }, color: "#e5e7eb" },
  { name: "EXIT", position: { x: 28, y: 27 }, size: { w: 8, h: 2 }, color: "#e5e7eb" },
  
  // Cashiers (2x1 with 1-tile gap)
  { name: "Cashier", position: { x: 13, y: 27 }, size: { w: 2, h: 1 }, color: "#fecaca" },
  { name: "Cashier", position: { x: 16, y: 27 }, size: { w: 2, h: 1 }, color: "#fecaca" },
  { name: "Cashier", position: { x: 19, y: 27 }, size: { w: 2, h: 1 }, color: "#fecaca" },
  { name: "Cashier", position: { x: 22, y: 27 }, size: { w: 2, h: 1 }, color: "#fecaca" },
  { name: "Cashier", position: { x: 25, y: 27 }, size: { w: 2, h: 1 }, color: "#fecaca" },
];
