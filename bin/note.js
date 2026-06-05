#!/usr/bin/env node

import { program } from "commander";
import { add } from "../src/commands/add.js";
import { list } from "../src/commands/list.js";
import { search } from "../src/commands/search.js";
import { del } from "../src/commands/delete.js";
import { clear } from "../src/commands/clear.js";

const command = process.argv[2];

switch (command) {
  case "add":
    console.log("Adding notes...");
    break;
  case "clear":
    console.log("Clearing notes...");
    break;
  case "list":
    console.log("Listing notes...");
    break;
  case "find":
    console.log("Searching notes...");
    break;
  case "rm":
    console.log("Deleting note...");
    break;
  default:
    console.log("Unknown command");
}

program
  .command("add <text>")
  .description("Add new note")
  .option("--tag <tag>", "Tag the note")
  .action(add);

program
  .command("list")
  .description("List all notes")
  .option("--tag <tag>", "Filter by tag")
  .action(list);

program
  .command("find <keyword>")
  .description("Search by keyword")
  .action(search);

program
  .command("rm <Id>")
  .description("Deleted note by Id")
  .action(del);

program
  .command("clear")
  .description("Clear all notes")
  .action(clear);

program.parse();
