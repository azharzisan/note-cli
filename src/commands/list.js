import { getNotes } from "../store.js";
import { renderTable, emptyMsg } from "../display.js";

export function list(option) {
  let notes = getNotes();

  if (option.tag) {
    notes = notes.filter((i) => i.tag === option.tag);
  }

  if (notes.length === 0) {
    emptyMsg();
    return;
  }

  renderTable(notes);
}
