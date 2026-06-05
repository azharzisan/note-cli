import chalk from "chalk";
import Table from "cli-table3";

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    minute: "2-digit",
    hour: "2-digit",
  });
}

export function renderTable(notes) {
  const table = new Table({
    head: [
      chalk.cyan("ID"),
      chalk.cyan("Note"),
      chalk.cyan("Tag"),
      chalk.cyan("Added"),
    ],
    colWidths: [10, 60, 14, 20],
    wordWrap: true,
    style: {
      border: ["gray"],
    },
  });

  notes.forEach((note) => {
    table.push([
      chalk.white(note.id),
      chalk.white(note.text),
      note.tag ? chalk.magenta(note.tag) : chalk.gray("-"),
      chalk.white(formatDate(note.createdAt)),
    ]);
  });

  console.log(table.toString());
}

export function sucessMsg(msg) {
    console.log(chalk.green("✔︎" + ' ' + msg));
}

export function errorMsg(msg) {
    console.log(chalk.red("✘" + ' ' + msg));
}

export function emptyMsg(msg) {
    console.log(chalk.gray('🔍︎ No notes found. Run "note add <text>" to create one.'));
}