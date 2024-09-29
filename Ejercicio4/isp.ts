//

// Principio de Segregación de Interfaces

interface Task {
  name: string;
  description: string;
  done: boolean;

  setDone(): void;
}

interface WithNotify {
  notify(): void;
}

class TodoTask implements Task {
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

class NotifyTask implements Task, WithNotify {
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

  notify() {
    console.log(`Task ${this.name} is done`);
  }
}

const task_1 = new TodoTask('Task 1', 'Description 1');

task_1.setDone();

const task_2 = new NotifyTask('Task 2', 'Description 2');

task_2.setDone();

task_2.notify();
