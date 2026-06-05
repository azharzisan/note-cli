import fs from "fs";
import path from "path";
import os from "os";
import { nanoid } from "nanoid";

const NOTES_FILE = path.join(process.cwd(), "notes.json");

export function getNotes() {
  if (fs.existsSync(NOTES_FILE)) return [];

  const data = fs.readFileSync(NOTES_FILE, "utf-8");
  return JSON.parse(data);
}

export function writeNotes(notes) {
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
}

export function addNotes(text, tag = null) {
    const notes = getNotes()

    const newNote = {
        id: nanoid(5),
        text,
        tag,
        createdAt: new Date().toISOString()
    }

    notes.push(newNote)
    writeNotes(notes)
    return newNote
}

export function deleteNote(Id) {
    const notes = getNotes()
    const filtered = notes.filter((i) => i.id !== Id)

    if(filtered.length === notes.length) return false
    writeNotes(filtered)
    return true
}

export function searchNotes(keyword) {
    const notes = getNotes()
    return notes.filter((i) => i.text.toLowerCase().includes(keyword.toLowerCase()))
}

export function clearNotes() {
    writeNotes([])
}