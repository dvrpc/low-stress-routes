const paint_props = {
  /**
   * This is where scale-driven paint properties are defined.
   *
   * Each entry requires the layer id, attribute name, and style expression.
   */
  all_pois: {
    id: "nodes",
    attribute: "circle-radius",
    style: ["interpolate", ["linear"], ["zoom"], 9.5, 1, 18, 6],
  },
};

export { paint_props };
