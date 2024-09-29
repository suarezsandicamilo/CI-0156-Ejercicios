//

// Principio de Responsabilidad Única

class TodoTask {
  name: string;
  description: string;
  done: boolean;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.done = false;
  }

  setDone() {
    this.done = true;
  }
}

class TodoTaskPrinter {
  print(task: TodoTask) {
    console.log(`Name: ${task.name}`);
    console.log(`Description: ${task.description}`);
    console.log(`Done: ${task.done}`);
  }
}

const task = new TodoTask('Task 1', 'Description 1');

const printer = new TodoTaskPrinter();

printer.print(task);
