//

// Principio Abierto / Cerrado

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

interface TodoTaskFilter {
  filter(tasks: TodoTask[]): TodoTask[];
}

class DoneTodoTaskFilter implements TodoTaskFilter {
  filter(tasks: TodoTask[]): TodoTask[] {
    return tasks.filter((task) => task.done);
  }
}

const tasks = [
  new TodoTask('Task 1', 'Description 1'),
  new TodoTask('Task 2', 'Description 2'),
  new TodoTask('Task 3', 'Description 3'),
];

tasks[1].setDone();

const filter = new DoneTodoTaskFilter();

const done_tasks = filter.filter(tasks);
