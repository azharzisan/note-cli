import { deleteNote } from "../store.js";
import { errorMsg, sucessMsg } from "../display.js";

export function del(Id) {
  let notes = deleteNote(Id);

  if (!notes) {
    errorMsg(`Note "${Id}" is not found`)
    return
  }

  sucessMsg(`Note ${Id} is sucessfully deleted`)
}
