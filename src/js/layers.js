const map_layers = {
  //   // Show existing bike facilities with thin transparent green line
  //   "bike-lanes": {
  //     id: "bike-lanes",
  //     type: "line",
  //     source: "traffic-stress-tiles",
  //     "source-layer": "existing_conditions_lts",
  //     layout: {},
  //     paint: {
  //       "line-width": 4,
  //       "line-opacity": 0.4,
  //       "line-color": "green",
  //     },
  //     filter: ["!=", "bikefacili", "No Accomodation"],
  //   },
  "rr-lines": {
    id: "rr-lines",
    type: "line",
    source: "rr-lines-src",
    // "source-layer": "existing_conditions_lts",
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
    // "source-layer": "existing_conditions_lts",
    layout: {},
    paint: {
      "circle-radius": 10,
      "circle-opacity": 0.7,
      "circle-color": "red",
    },
  },
};

export { map_layers };
