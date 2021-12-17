import { API_ROOT } from "./api";

const data_sources = {
  "node-tiles": {
    type: "vector",
    url: "https://tiles.dvrpc.org/data/lts-nodes.json",
    minzoom: 8,
  },
  "route-src": {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          id: "0",
          type: "Feature",
          properties: { id: 349428, seq: 1 },
          geometry: {
            type: "MultiLineString",
            coordinates: [
              [
                [-74.91728499979, 39.795013999595604],
                [-74.91628399994785, 39.795174999945274],
              ],
            ],
          },
        },
      ],
    },
  },
};

export { data_sources };
