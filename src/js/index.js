// import { colors } from "./colors";
// import { update_graph_with_api_data, makeGraph } from "./graphs";
import { data_sources } from "./sources";
// import { urlRoot } from "./api";
import { makeMap } from "./map";
// import {
//   wire_up_dropdown_selector,
//   add_map_hover_styles,
//   add_map_click_actions,
// } from "./user_interaction";
import { map_layers } from "./layers";

const map = makeMap();

map.on("load", function () {
  // Add map data sources and layer styling
  for (const src in data_sources) map.addSource(src, data_sources[src]);
  for (const lyr in map_layers) map.addLayer(map_layers[lyr]);
});
