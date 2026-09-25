import { useEffect, useRef } from 'react';
import { globalPresence } from '@/content/tier1/company.js';

const WIDTH = 1614;
const HEIGHT = 689;

// The supplied dot map uses an equirectangular 360-degree horizontal span.
// Latitude 85 is at its top edge. The pin tip uses that same image scale.
//
// The artwork is stylised rather than a true projection, so latitude and
// longitude alone can land a pin visibly off its coastline (North America is
// stretched vertically — the Gulf coast is drawn ~20px lower than the maths
// puts it). A location can pin itself exactly with `map: { x, y }`, given in
// pixels of the 1614x689 map image; that wins over the calculated position.
function project(latitude, longitude, map) {
  if (map) {
    return {
      left: `${(map.x / WIDTH) * 100}%`,
      top: `${(map.y / HEIGHT) * 100}%`,
    };
  }
  return {
    left: `${((longitude + 180) / 360) * 100}%`,
    top: `${(((85 - latitude) * WIDTH / 360) / HEIGHT) * 100}%`,
  };
}

export default function WorldMap({ active }) {
  const locations = globalPresence.locations;
  const viewportRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || window.matchMedia('(min-width: 641px)').matches) return;
    // Start the narrow viewport over Europe, Asia and Australia. The visitor
    // can pan west to the USA and across the complete world map.
    viewport.scrollLeft = Math.max(0, viewport.scrollWidth * 0.72 - viewport.clientWidth * 0.55);
  }, []);

  return (
    <div className={`co-map${active ? ' is-active' : ''}`}>
      <div className="co-map-viewport" ref={viewportRef}>
        <div className="co-map-stage" role="group" aria-label="Map of ITG presence">
          <img
            className="co-map-land"
            src="/assets/world-dot-map.png"
            alt=""
            draggable="false"
          />

          {locations.map((location, index) => (
            <button
              key={location.name}
              className="co-map-pin"
              type="button"
              style={{ ...project(location.latitude, location.longitude, location.map), '--pin-index': index }}
              aria-label={`${location.name} location`}
              title={location.name}
            >
              <span className="co-map-pin-pulse" aria-hidden="true" />
              <span className="co-map-pin-body" aria-hidden="true">
                <svg viewBox="0 0 26 36" focusable="false">
                  <path d="M13 1C6.37 1 1 6.37 1 13c0 9.05 12 22 12 22s12-12.95 12-22C25 6.37 19.63 1 13 1Z" />
                  <circle className="co-map-pin-core" cx="13" cy="13" r="6.5" />
                  <circle className="co-map-pin-center" cx="13" cy="13" r="2.1" />
                </svg>
              </span>
              <span className="co-map-pin-label" aria-hidden="true">{location.name}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="co-map-swipe-hint">Swipe to explore the full map</p>
    </div>
  );
}
