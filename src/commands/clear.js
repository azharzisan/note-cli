import inquirer from "inquirer";
import { getNotes, clearNotes } from "../store.js";
import { sucessMsg, errorMsg } from "../display.js";

export async function clear() {
    const notes = getNotes()

    if(notes.length === 0) {
        errorMsg("Nothing to clear")
        return
    }

    const {confirm} = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirm',
            message: `Are you sure you want to delete all ${notes.length} notes?`,
            default: false
        }
    ])

    if(!confirm) {
        errorMsg("Cancelled")
        return
    }

    clearNotes()
    sucessMsg("All notes deleted sucessfully.")
}