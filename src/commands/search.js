import { searchNotes } from "../store.js";
import { emptyMsg, renderTable } from "../display.js";

export function search(keyword) {
    let notes = searchNotes(keyword)

    if(notes.length === 0) {
        emptyMsg()
        return
    }

    renderTable(notes)
}