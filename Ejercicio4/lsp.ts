//

// Principio de Sustitución de Liskov

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

class ImportantTask extends TodoTask {
  priority: number;

  constructor(name: string, description: string, priority: number) {
    super(name, description);

    this.priority = priority;
  }
}

const isDone = (task: TodoTask) => {
  if (task.done) {
    console.log('Task is done');
  } else {
    console.log('Task is not done');
  }
};

const task_1 = new TodoTask('Task 1', 'Description 1');

isDone(task_1);

const task_2 = new ImportantTask('Task 2', 'Description 2', 1);

isDone(task_2);
