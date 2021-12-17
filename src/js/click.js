import { Spinner } from "spin.js";

import { API_ROOT } from "./api";

import {
  button_to_select_start,
  button_to_select_end,
  button_to_find_route,
  button_is_selected,
  remove_selection_on_button,
} from "./dom";

let START_NODE = 0;
let END_NODE = 0;

const button_logic = (map) => {
  button_to_select_start.onclick = () => {
    if (button_is_selected(button_to_select_start)) {
      remove_selection_on_button(button_to_select_start);
    } else {
      button_to_select_start.classList.add("selected-button");
      remove_selection_on_button(button_to_select_end);
    }
  };

  button_to_select_end.onclick = () => {
    if (button_is_selected(button_to_select_end)) {
      remove_selection_on_button(button_to_select_end);
    } else {
      button_to_select_end.classList.add("selected-button");
      remove_selection_on_button(button_to_select_start);
    }
  };
  //   button_to_clear_tazs.onclick = () => {
  //     SELECTED_TAZS = [];
  //     map.setPaintProperty("destinations", "fill-opacity", 0);
  //     return_to_initial_state(map);
  //   };

  button_to_find_route.onclick = () => {
    remove_selection_on_button(button_to_select_start);
    remove_selection_on_button(button_to_select_end);
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
      color: "black", // CSS color or array of colors
      fadeColor: "transparent", // CSS color or array of colors
      top: "50%", // Top position relative to parent
      left: "50%", // Left position relative to parent
      shadow: "0 0 1px transparent", // Box-shadow for the lines
      zIndex: 2000000000, // The z-index (defaults to 2e9)
      className: "spinner", // The CSS class to assign to the spinner
      position: "absolute", // Element positioning
    };
    var target = document.getElementById("spinner");
    var spinner = new Spinner(opts).spin(target);
    let api_path =
      API_ROOT +
      "/route/?start=" +
      START_NODE.toString() +
      "&end=" +
      END_NODE.toString();

    var request = new XMLHttpRequest();
    request.open("GET", api_path, true);
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        var json = JSON.parse(this.response);
        map.getSource("route-src").setData(json);
        console.log("Updated");
        // map.setPaintProperty("destinations", "fill-opacity", 0.7);
        spinner.stop();
      }
    };
    request.send();
  };
};

const wire_mouse_click = (map) => {
  button_logic(map);

  map.on("click", "nodes", function (e) {
    let props = e.features[0].properties;
    console.log(props);
    let layername = "";
    if (button_is_selected(button_to_select_start)) {
      layername = "start";
      START_NODE = props.nodeid;
    } else if (button_is_selected(button_to_select_end)) {
      layername = "end";
      END_NODE = props.nodeid;
    }
    map.setFilter(layername, ["==", "nodeid", props.nodeid]);
  });
};

export { wire_mouse_click };
