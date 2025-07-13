import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import StoreGrid from './components/StoreGrid';
import Notification from './components/Notification';
import { storeSections } from './data/storeSections';
import { productLocations } from './data/productLocations';
import { createGrid, findPath } from './utils/pathfinder';

function App() {
  const [userPosition, setUserPosition] = useState({ x: 41, y: 25 });
  const [animatedPath, setAnimatedPath] = useState([]);
  const [product, setProduct] = useState(null);
  const [isProductMarkerRendered, setIsProductMarkerRendered] = useState(false);
  const [isMoveMode, setIsMoveMode] = useState(false); // New state for move mode

  const handleProductMarkerRender = () => {
    setIsProductMarkerRendered(true);
  };

  const toggleMoveMode = () => {
    setIsMoveMode(prev => !prev);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState('');

  const handleSearch = (query) => {
    setIsProductMarkerRendered(false); // Reset on new search
    if (isLoading) return;

    setIsLoading(true);
    setNotification('');
    setAnimatedPath([]);

    // A timeout simulates a network request.
    setTimeout(() => {
      const foundProduct = productLocations[query];
      if (foundProduct) {
        const grid = createGrid(storeSections);
        const newPath = findPath(grid, userPosition, foundProduct.access);
        // Only animate and set the product if a valid path is found.
        if (newPath && newPath.length > 0) {
          animatePath(newPath);
          // Setting the product will trigger the zoom effect inside StoreGrid.
          setProduct(foundProduct);
        } else {
          setProduct(null); // Clear product if no path is found
          setNotification('Could not find a path to the product.');
        }
      } else {
        setProduct(null); // Clear product if not found
        setNotification('Product not found. Please try another search.');
      }
      setIsLoading(false);
    }, 300);
  };

  const animatePath = (path) => {
    if (!path) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < path.length) {
        setAnimatedPath(prev => [...prev, path[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 15);
  };

  const handleSetUserPosition = (x, y) => {
    const grid = createGrid(storeSections);
    if (grid.isWalkableAt(x, y)) {
      setUserPosition({ x, y });
      if (product) {
        const newPath = findPath(grid, { x, y }, product.access);
        setAnimatedPath([]);
        animatePath(newPath);
      }
    } else {
      setNotification('Cannot place user on an obstacle.');
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 font-sans">
      <header>
        <SearchBar
          onSearch={handleSearch}
          isLoading={isLoading}
          productKeys={Object.keys(productLocations)}
        />
      </header>
      <main className="flex-1 flex flex-col overflow-hidden">
        <StoreGrid
          isProductMarkerRendered={isProductMarkerRendered}
          onProductMarkerRender={handleProductMarkerRender}
          userPosition={userPosition}
          path={animatedPath}
          product={product}
          storeSections={storeSections}
          onTileClick={handleSetUserPosition}
          isMoveMode={isMoveMode}
          onToggleMoveMode={toggleMoveMode}
        />
      </main>
      <Notification message={notification} />
    </div>
  );
}

export default App;
