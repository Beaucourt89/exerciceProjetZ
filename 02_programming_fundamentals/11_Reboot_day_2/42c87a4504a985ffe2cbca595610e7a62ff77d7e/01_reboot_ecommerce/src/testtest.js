const printElement = (action, index) => console.log(`${index + 1} ${action}`);

function printMenu(actionsList) {
  actionsList.forEach(printElement);
}

function printTasks(tasksList) {
  const showTask = (task, index) => console.log(`${index + 1} - ${task.done ? "[X]" : "[ ]"} - ${task.taskName}`);
  tasksList.forEach(showTask);
}
let READER;
const tasks = [
  {
    taskName: "Lessive",
    done: false,
  },
  {
    taskName: "Vaisselle",
    done: true,
  },
];

const ask = (question, callback) => {
  const prettyQuestion = `🤖 ${question}\n> `;
  READER.question(prettyQuestion, callback);
};

function addTask(reader) {
  ask("TaskName ?", (taskName) => {
    const task = {
      taskName,
      done: false,
    };
    tasks.push(task);
    console.log("🤖 task added");
    taskManager(READER);
  });
}

function markTaskAsDone() {
  const notDoneTasks = tasks.filter((task) => task.done === false);

  printTasks(notDoneTasks);

  ask("Which task to mark as done?", (taskIndex) => {
    const selectedTask = notDoneTasks[parseInt(taskIndex) - 1];
    selectedTask.done = true;
    taskManager(READER);
  });
}

function listTasks(tasksList) {
  printTasks(tasksList);
  taskManager(READER);
}

function menu(action) {
  switch (action) {
    case "1":
      console.clear();
      addTask(READER);
      break;
    case "2":
      console.clear();
      markTaskAsDone();
      break;
    case "3":
      console.clear();
      listTasks(tasks);
      break;
    case "4":
      console.log("Work hard!");
      READER.close();
      break;
    default:
      console.log("⚠️Cmd unknown⚠️");
      taskManager(READER);
  }
}

export default function taskManager(reader) {
  READER = reader;
  printMenu(["add a task", "mark a task as done", "list tasks", "quit"]);

  reader.question("🤖 Choose an action\n> ", (action) => {
    menu(action);
  });
}
