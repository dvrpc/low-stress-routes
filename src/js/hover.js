import { add_popup_to_map, clear_popups } from "./popups";

const use_pointer_when_hovering = (map, layername) => {
  /**
   * For the provided layername, set the cursor to use a
   * pointer when hovering, and return to normal cursor when
   * you move the mouse away
   *
   * @param {mapboxgl.Map} map - The map object for the page
   * @param {string} layername - The name of the layer to assign the functionality to
   */

  // change mouse tip to pointer finger
  map.on(
    "mouseenter",
    layername,
    () => (map.getCanvas().style.cursor = "pointer")
  );

  // change mouse tip upon leaving feature
  map.on("mouseleave", layername, function (e) {
    map.getCanvas().style.cursor = "";
  });
};

const add_popup_to_destination = (map) => {
  map.on("mousemove", "destinations", (e) => {
    clear_popups();
    let msg =
      "<h1> TAZ #" +
      e.features[0].properties.tazt +
      "</h1><hr><ul><li>" +
      e.features[0].properties.total_trips +
      " trips</li><li>" +
      e.features[0].properties.trip_density +
      " density</li></ul>";
    add_popup_to_map(map, msg, e);
  });
  map.on("mouseleave", "destinations", () => {
    clear_popups();
  });
};

const wire_mouse_hover = (map) => {
  /**
   * Show interactivity tooltip hints for all layers defined within
   *
   * @param {mapboxgl.Map} map - The map object for the page
   */
  var layers = ["taz-fill"];

  layers.forEach((lyr) => use_pointer_when_hovering(map, lyr));

  add_popup_to_destination(map);
};

export { wire_mouse_hover };
