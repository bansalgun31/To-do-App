# To-Do App

A simple command-line to-do list application built with HTML and JavaScript. This app allows you to manage tasks through a browser console interface.

## Features

- **Add Tasks**: Create new tasks and add them to your to-do list
- **View Tasks**: Display all tasks with their index numbers
- **Delete Tasks**: Remove completed or unwanted tasks by their index
- **Simple Interface**: Easy-to-use prompt-based commands

## How to Use

1. Open `todo.html` in your web browser
2. A prompt will appear asking for your choice
3. Enter one of the following commands:
   - **list** - Display all tasks with their index numbers
   - **add** - Add a new task to your list
   - **delete** - Remove a task by entering its index number
   - **quit** - Exit the application

## Commands

| Command | Description |
|---------|-------------|
| `list` | Shows all current tasks with their positions |
| `add` | Prompts you to enter a task name to add to the list |
| `delete` | Removes a task by index number |
| `quit` | Closes the application |

## Project Structure

```
To-do-App-main/
├── README.md          # Project documentation
├── todo.html          # HTML interface and entry point
└── todo.js            # Application logic and functionality
```

## Example Usage

1. Open `todo.html` in your browser
2. When prompted, enter `add`
3. Enter your task (e.g., "Buy groceries")
4. Enter `add` again to add more tasks
5. Enter `list` to view all tasks
6. Enter `delete` and the task index to remove a task
7. Enter `quit` to exit

## Technical Details

- **Language**: JavaScript (vanilla)
- **Interface**: HTML with browser prompts and console
- **Storage**: In-memory array (tasks are not saved between sessions)

## Notes

- Tasks are stored in memory and will be lost when you close the browser or refresh the page
- Task indices start from 0 (first task is at index 0)
- The application uses browser `prompt()` for user input and `console.log()` for output

## Future Enhancements

Potential improvements for the app:
- Local storage to persist tasks between sessions
- Better UI with HTML forms instead of prompts
- Task editing capability
- Task priority levels
- Due dates for tasks

## License

This project is licensed under the MIT License — see the `LICENSE` file for details.
