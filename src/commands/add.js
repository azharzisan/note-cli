import {addNotes} from '../store.js'
import { sucessMsg, errorMsg } from '../display.js'

export function add(text, option) {
    const tag = option.tag || null

    if(!text || text.trim() === "") {
        errorMsg("Note can't be empty")
        return
    }

    const note = addNotes(text.trim(), tag)
    sucessMsg(`Noted added → "${note.text}"`);
}