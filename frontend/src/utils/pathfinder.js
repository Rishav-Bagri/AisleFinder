import { Grid, AStarFinder } from 'pathfinding';

const COLS = 50;
const ROWS = 30;

/**
 * Creates a binary grid from the store layout.
 * 0 represents a walkable tile, 1 is a wall/obstacle.
 * @param {Array} sections - The array of store section objects.
 * @returns {Grid} A pathfinding-js Grid object.
 */
export function createGrid(sections) {
  const grid = new Grid(COLS, ROWS);

  // Mark all section areas as unwalkable
  sections.forEach(section => {
    for (let y = section.position.y; y < section.position.y + section.size.h; y++) {
      for (let x = section.position.x; x < section.position.x + section.size.w; x++) {
        if (grid.isInside(x, y)) {
          grid.setWalkableAt(x, y, false);
        }
      }
    }
  });

  return grid;
}

/**
 * Finds the shortest path between two points on the grid.
 * @param {Grid} grid - The pathfinding grid.
 * @param {{x, y}} startPos - The starting coordinates.
 * @param {{x, y}} endPos - The ending coordinates.
 * @returns {Array} An array of [x, y] coordinates representing the path.
 */
export function findPath(grid, startPos, endPos) {
  const gridClone = grid.clone(); // Clone the grid to avoid modifying the original
  const finder = new AStarFinder({
    allowDiagonal: false, // Only allow horizontal/vertical movement
  });

  const path = finder.findPath(startPos.x, startPos.y, endPos.x, endPos.y, gridClone);
  // Convert the path from [x, y] arrays to {x, y} objects for easier use in components.
  return path.map(p => ({ x: p[0], y: p[1] }));
}
