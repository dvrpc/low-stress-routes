const map_layers = {
  "taz-fill": {
    id: "taz-fill",
    type: "fill",
    source: "taz-tiles",
    "source-layer": "TAZ_2010",
    layout: {},
    paint: {
      "fill-opacity": 0,
      "fill-color": "black",
    },
  },
  "taz-outline": {
    id: "taz-outline",
    type: "line",
    source: "taz-tiles",
    "source-layer": "TAZ_2010",
    layout: {},
    paint: {
      "line-width": 0.8,
      "line-opacity": 0.2,
      "line-color": "black",
    },
  },
  "selected-taz": {
    id: "selected-taz",
    type: "fill",
    source: "taz-tiles",
    "source-layer": "TAZ_2010",
    layout: {},
    paint: {
      "fill-opacity": 0.2,
      "fill-color": "yellow",
    },
    filter: ["==", "tazt", "-1"],
  },
  "rr-lines": {
    id: "rr-lines",
    type: "line",
    source: "rr-lines-src",
    layout: {},
    paint: {
      "line-width": 4,
      "line-opacity": 0.4,
      "line-color": "blue",
    },
  },
  "rr-stops": {
    id: "rr-stops",
    type: "circle",
    source: "rr-stops-src",
    layout: {},
    paint: {
      "circle-radius": 6,
      "circle-opacity": 0.7,
      "circle-color": "red",
    },
  },
};

export { map_layers };
