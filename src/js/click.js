let SELECTED_TAZS = [];

const button_to_select_tazs = document.getElementById("button-to-select-tazs");
const button_to_clear_tazs = document.getElementById("button-to-clear-tazs");
const button_to_analyze_tazs = document.getElementById(
  "button-to-analyze-tazs"
);

const return_to_initial_state = () => {
  button_to_select_tazs.classList.remove("selected-button");
  button_to_clear_tazs.style.setProperty("display", "none");
  button_to_analyze_tazs.style.setProperty("display", "none");
};

const wire_mouse_click = (map) => {
  button_to_select_tazs.onclick = () => {
    if (button_to_select_tazs.classList.contains("selected-button")) {
      return_to_initial_state();
    } else {
      button_to_select_tazs.classList.add("selected-button");
      button_to_clear_tazs.style.setProperty("display", "inline");
      button_to_analyze_tazs.style.setProperty("display", "inline");
    }
  };

  button_to_clear_tazs.onclick = () => {
    SELECTED_TAZS = [];

    map.setFilter("selected-taz", ["in", "tazt", "-1"]);
    return_to_initial_state();
  };

  map.on("click", "taz-fill", function (e) {
    if (button_to_select_tazs.classList.contains("selected-button")) {
      let props = e.features[0].properties;
      SELECTED_TAZS.push(props.tazt);
      map.setFilter("selected-taz", ["in", "tazt", ...SELECTED_TAZS]);
    }
  });
};

export { wire_mouse_click };
