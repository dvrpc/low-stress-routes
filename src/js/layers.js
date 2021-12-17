const map_layers = {
  nodes: {
    id: "nodes",
    type: "circle",
    source: "node-tiles",
    "source-layer": "lts_nodes",
    layout: {},
    paint: {
      "circle-opacity": 0.7,
      "circle-color": "pink",
      "circle-radius": 3,
    },
    minzoom: 9.5,
  },
  start: {
    id: "start",
    type: "circle",
    source: "node-tiles",
    "source-layer": "lts_nodes",
    layout: {},
    paint: {
      "circle-opacity": 0.7,
      "circle-color": "green",
      "circle-radius": 10,
    },
    filter: ["==", "nodeid", "-1"],
  },
  end: {
    id: "end",
    type: "circle",
    source: "node-tiles",
    "source-layer": "lts_nodes",
    layout: {},
    paint: {
      "circle-opacity": 0.7,
      "circle-color": "red",
      "circle-radius": 10,
    },
    filter: ["==", "nodeid", "-1"],
  },
  route: {
    id: "route",
    type: "line",
    source: "route-src",
    layout: {},
    paint: {
      "line-opacity": 0.7,
      "line-color": "green",
      "line-width": 6,
    },
  },
};

export { map_layers };
