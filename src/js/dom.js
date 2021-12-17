const button_to_select_start = document.getElementById(
  "button-to-select-start"
);
const button_to_select_end = document.getElementById("button-to-select-end");
const button_to_find_route = document.getElementById("button-to-find-route");

const button_is_selected = (button) => {
  return button.classList.contains("selected-button");
};

const remove_selection_on_button = (button) => {
  if (button_is_selected(button)) {
    button.classList.remove("selected-button");
  }
};
export {
  button_to_select_start,
  button_to_select_end,
  button_to_find_route,
  remove_selection_on_button,
  button_is_selected,
};
