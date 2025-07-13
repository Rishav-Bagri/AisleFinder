/**
 * A mock database mapping product names to their locations.
 * 'real' is the physical location on the shelf.
 * 'access' is the walkable tile in front of the product for pathfinding.
 */
export const productLocations = {
  'cereal': {
    name: 'Cereal & Breakfast',
    real: { x: 5, y: 8 },
    access: { x: 4 , y: 8 },
  },
  'coffee': {
    name: 'Coffee & Tea',
    real: { x: 8, y: 12 },
    access: { x: 7, y: 12 },
  },
  'pasta': {
    name: 'Pasta & Sauces',
    real: { x: 12, y: 15 },
    access: { x: 11, y: 15 },
  },
  'snacks': {
    name: 'Snacks & Cookies',
    real: { x: 19, y: 10 },
    access: { x: 18, y: 10 },
  },
  'milk': {
    name: 'Milk',
    real: { x: 10, y: 2 },
    access: { x: 10, y: 3 },
  },
  'soda': {
    name: 'Soda & Water',
    real: { x: 16, y: 2 },
    access: { x: 16, y: 3 },
  },
};
