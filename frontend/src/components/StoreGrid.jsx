import React, { useRef, useEffect } from 'react';
import { useMapControls } from '../hooks/useMapControls';
import PropTypes from 'prop-types';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Tile from './Tile';
import OverlayBlock from './OverlayBlock';
import User from './User';
import Controls from './Controls';
import Path from './Path';
import ProductMarker from './ProductMarker';

const COLS = 50;
const ROWS = 30;

// Add padding around the store for the background visuals
const PADDING_X = 50; // Tiles of padding on left/right
const PADDING_Y = 50; // Tiles of padding on top/bottom

const CANVAS_WIDTH = (COLS + PADDING_X * 2) * 32;
const CANVAS_HEIGHT = (ROWS + PADDING_Y * 2) * 32;

function InitialZoom({ zoomToElement }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (zoomToElement) {
        zoomToElement('user-marker', 1.2, 200, 'easeOutQuad');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [zoomToElement]);
  return null;
}

InitialZoom.propTypes = {
  zoomToElement: PropTypes.func.isRequired,
};

export default function StoreGrid({ userPosition, path, product, storeSections, onTileClick, isProductMarkerRendered, onProductMarkerRender, isMoveMode, onToggleMoveMode }) {
  const controlsRef = useRef(null);
  useMapControls(controlsRef, product, isProductMarkerRendered);

  return (
    <div className="flex-1 overflow-hidden bg-[#e6f4ea]">
      <TransformWrapper minScale={0.1} maxScale={10}>
        {({ zoomToElement, zoomToElements, ...rest }) => {
          controlsRef.current = { zoomToElement, zoomToElements, ...rest };
          return (
            <React.Fragment>
              <InitialZoom zoomToElement={zoomToElement} />
              <TransformComponent
                wrapperStyle={{ width: '100%', height: '100%' }}
                contentStyle={{
                  width: CANVAS_WIDTH,
                  height: CANVAS_HEIGHT,
                  backgroundColor: '#e6f4ea', // Google Maps-like light green
                }}
              >
                <div
                  className="absolute shadow-lg overflow-hidden"
                  style={{
                    left: PADDING_X * 32,
                    top: PADDING_Y * 32,
                    width: COLS * 32,
                    height: ROWS * 32,
                    backgroundColor: 'white',
                  }}
                >
                  <div
                    className="grid absolute inset-0"
                    style={{
                      gridTemplateColumns: `repeat(${COLS}, 32px)`,
                      gridTemplateRows: `repeat(${ROWS}, 32px)`,
                    }}
                  >
                    {Array.from({ length: ROWS * COLS }).map((_, i) => {
                      const x = i % COLS;
                      const y = Math.floor(i / COLS);
                      return (
                        <Tile
                          key={i}
                          onClick={() => {
                            if (isMoveMode) {
                              onTileClick(x, y);
                            }
                          }}
                        />
                      );
                    })}
                  </div>
                  {storeSections.map((section, idx) => (
                    <OverlayBlock key={idx} {...section} />
                  ))}
                  <Path points={path} />
                  <User position={userPosition} id="user-marker" />
                  {product && (
                    <ProductMarker product={product} onRender={onProductMarkerRender} />
                  )}
                </div>
              </TransformComponent>
              <Controls 
                onCenterView={() => zoomToElement('user-marker', 1.2, 200, 'easeOutQuad')} 
                onToggleMoveMode={onToggleMoveMode}
                isMoveMode={isMoveMode}
              />
            </React.Fragment>
          );
        }}
      </TransformWrapper>
    </div>
  );
}

StoreGrid.propTypes = {
  userPosition: PropTypes.object.isRequired,
  path: PropTypes.array,
  product: PropTypes.object,
  storeSections: PropTypes.array.isRequired,
  onTileClick: PropTypes.func.isRequired,
  isProductMarkerRendered: PropTypes.bool.isRequired,
  onProductMarkerRender: PropTypes.func.isRequired,
  isMoveMode: PropTypes.bool.isRequired,
  onToggleMoveMode: PropTypes.func.isRequired,
};
