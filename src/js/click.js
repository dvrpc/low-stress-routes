import { API_ROOT } from "./api";
import { Spinner } from "spin.js";
let SELECTED_TAZS = [];

const button_to_select_tazs = document.getElementById("button-to-select-tazs");
const button_to_clear_tazs = document.getElementById("button-to-clear-tazs");
const button_to_analyze_tazs = document.getElementById(
  "button-to-analyze-tazs"
);

const return_to_initial_state = (map) => {
  button_to_select_tazs.classList.remove("selected-button");
  button_to_clear_tazs.style.setProperty("display", "none");
  button_to_analyze_tazs.style.setProperty("display", "none");
  map.setPaintProperty("destinations", "fill-opacity", 0);
  map.setFilter("selected-taz", ["in", "tazt", ...SELECTED_TAZS]);
};

const button_logic = (map) => {
  button_to_select_tazs.onclick = () => {
    if (button_to_select_tazs.classList.contains("selected-button")) {
      return_to_initial_state(map);
    } else {
      button_to_select_tazs.classList.add("selected-button");
      button_to_clear_tazs.style.setProperty("display", "inline");
      button_to_analyze_tazs.style.setProperty("display", "inline");
    }
  };

  button_to_clear_tazs.onclick = () => {
    SELECTED_TAZS = [];
    map.setPaintProperty("destinations", "fill-opacity", 0);
    return_to_initial_state(map);
  };

  button_to_analyze_tazs.onclick = () => {
    var opts = {
      lines: 13, // The number of lines to draw
      length: 38, // The length of each line
      width: 17, // The line thickness
      radius: 45, // The radius of the inner circle
      scale: 1, // Scales overall size of the spinner
      corners: 1, // Corner roundness (0..1)
      speed: 1, // Rounds per second
      rotate: 0, // The rotation offset
      animation: "spinner-line-fade-quick", // The CSS animation name for the lines
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: "#ffffff", // CSS color or array of colors
      fadeColor: "transparent", // CSS color or array of colors
      top: "50%", // Top position relative to parent
      left: "50%", // Left position relative to parent
      shadow: "0 0 1px transparent", // Box-shadow for the lines
      zIndex: 2000000000, // The z-index (defaults to 2e9)
      className: "spinner", // The CSS class to assign to the spinner
      position: "absolute", // Element positioning
    };
    var target = document.getElementById("foo");
    var spinner = new Spinner(opts).spin(target);
    let api_path = API_ROOT + "/flows/?q=" + SELECTED_TAZS.join("&q=");

    var request = new XMLHttpRequest();
    request.open("GET", api_path, true);
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        var json = JSON.parse(this.response);
        map.getSource("destination-geojson").setData(json);
        console.log("Updated");
        map.setPaintProperty("destinations", "fill-opacity", 0.7);
        spinner.stop();
      }
    };
    request.send();
  };
};

const wire_mouse_click = (map) => {
  button_logic(map);

  map.on("click", "taz-fill", function (e) {
    if (button_to_select_tazs.classList.contains("selected-button")) {
      let props = e.features[0].properties;
      SELECTED_TAZS.push(props.tazt);
      map.setFilter("selected-taz", ["in", "tazt", ...SELECTED_TAZS]);
    }
  });
};

export { wire_mouse_click };
