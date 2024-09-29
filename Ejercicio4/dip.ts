//

// Principio de Inversión de Dependencias

interface TodoTaskRepository {
  save(task: TodoTask): void;
}

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

class FileTodoTaskRepository implements TodoTaskRepository {
  save(task: TodoTask) {
    console.log(`Task ${task.name} saved in a file`);
  }
}

class DatabaseTodoTaskRepository implements TodoTaskRepository {
  save(task: TodoTask) {
    console.log(`Task ${task.name} saved in the database`);
  }
}

class TodoTaskService {
  private repository: TodoTaskRepository;

  constructor(repository: TodoTaskRepository) {
    this.repository = repository;
  }

  addTask(task: TodoTask) {
    this.repository.save(task);
  }
}

const task_1 = new TodoTask('Task 1', 'Description 1');

const repository_1 = new FileTodoTaskRepository();

const service_1 = new TodoTaskService(repository_1);

service_1.addTask(task_1);

const task_2 = new TodoTask('Task 2', 'Description 2');

const repository_2 = new DatabaseTodoTaskRepository();

const service_2 = new TodoTaskService(repository_2);

service_2.addTask(task_2);
