import { API_ROOT } from "./api";
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
  map.setFilter("destinations", ["in", "tazt", "-1"]);
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
    map.setFilter("selected-taz", ["in", "tazt", "-1"]);
    return_to_initial_state(map);
  };

  button_to_analyze_tazs.onclick = () => {
    let api_path = API_ROOT + "/flows/?q=" + SELECTED_TAZS.join("&q=");

    var request = new XMLHttpRequest();
    request.open("GET", api_path, true);
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        var json = JSON.parse(this.response);
        map.getSource("destination-geojson").setData(json);
        console.log("Updated");
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
