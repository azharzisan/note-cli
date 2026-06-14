# 📒 Note CLI

![JavaScript](https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=f0db4f&labelColor=121212)
![Node.js](https://img.shields.io/badge/Node.js-3C873A?style=for-the-badge&logo=node.js&logoColor=3C873A&labelColor=121212)
![NPM](https://img.shields.io/badge/NPM-CC3534?style=for-the-badge&logo=npm&logoColor=CC3534&labelColor=121212)
![STATUS](https://img.shields.io/badge/Status-beta-FF758F?style=for-the-badge&logo=&logoColor=CC3534&labelColor=121212)

A fast, lightweight CLI notes app that lives in your terminal. Notes are saved **per project** with no global mess, no switching apps. Just type and go.

## Why Note CLI?

You're deep in coding and suddenly think *"I need to fix that bug later"*. Instead of switching to Notion, Notes or your phone, just type:

```bash
note add "fix that bug"
```

Done. Back to coding in 2 seconds. Notes are saved inside your current project folder so each project has its own isolated list.

### Install

```bash
npm install -g @azharzisan/note-cli
```

>[!IMPORTANT]
>The Note CLI will not work if Global command `-g` is not added. So make sure to add `-g` after typing `npm install`.

## Commands

### Add a note

```bash
note add "your note here"
```

### Add a note with tag

```bash
note add "refactor header component" --tag react
```

### List all notes

```bash
note list
note list --tag react
```

### Search notes

```bash
note find "keyword"
```

### Delete a note

```bash
note rm "id"
```

### Clear all notes

```bash
note clear
```

## Example

```bash
$ note add "fix the auth bug"
✔  Note added → "fix the auth bug"

$ note add "refactor Header component" --tag react
✔  Note added → "refactor Header component"

$ note list
┌───────┬──────────────────────────────┬────────┬──────────────────┐
│ ID    │ Note                         │ Tag    │ Added            │
├───────┼──────────────────────────────┼────────┼──────────────────┤
│ V1StG │ fix the auth bug             │ -      │ Jun 5, 10:32 AM  │
│ X9kLm │ refactor Header component    │ react  │ Jun 5, 10:33 AM  │
└───────┴──────────────────────────────┴────────┴──────────────────┘

$ note find "auth"
┌───────┬──────────────────────────────┬────────┬──────────────────┐
│ ID    │ Note                         │ Tag    │ Added            │
├───────┼──────────────────────────────┼────────┼──────────────────┤
│ V1StG │ fix the auth bug             │ -      │ Jun 5, 10:32 AM  │
└───────┴──────────────────────────────┴────────┴──────────────────┘

$ note rm "V1StG"
✔  Note "V1StG" is sucessfully deleted

$ note clear
? Are you sure you want to delete all 1 notes? (y/N) y
✔  All notes cleared
```

## How it works

Notes are saved in a `notes.json` file inside your **current working directory**. The folder you ran the command from. This means:

```
flowr/
├── src/
├── .notes.json     ← flowr's notes only
└── package.json

invoice-app/
├── src/
├── .notes.json     ← invoice app's notes only
└── package.json
```

Add `notes.json` to your `.gitignore` so your personal notes don't get pushed to GitHub:

```
# .gitignore
notes.json
```

# Dependencies

| Package | Purpose |
|---|---|
| `commander` | Parses CLI commands and flags |
| `chalk` | Terminal colors |
| `cli-table3` | Renders the notes table |
| `inquirer` | Confirmation prompt for `note clear` |
| `nanoid` | Generates unique note IDs |


## Author

Made by [@azharzisan](https://github.com/azharzisan)

## License

ISC

# Contributing

This project is personal and not open for contributions.
Feel free to fork it and build your own version.