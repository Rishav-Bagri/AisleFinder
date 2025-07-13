import { useEffect } from 'react';

export function useMapControls(controlsRef, product, isProductMarkerRendered) {
  useEffect(() => {
    const controls = controlsRef.current;
    if (product && isProductMarkerRendered && controls && typeof controls.zoomToElements === 'function') {
      // Use a timeout to ensure the DOM is fully painted before zooming
      const timer = setTimeout(() => {
        console.log('Attempting to zoom to #user-marker and #product-marker');
        controls.zoomToElements(['#user-marker', '#product-marker'], { scale: 0.9, margin: 30 });
      }, 50); // A small delay can make a big difference

      return () => clearTimeout(timer);
    }
  }, [controlsRef, product, isProductMarkerRendered]);
}
