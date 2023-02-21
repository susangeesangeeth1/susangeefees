export type task = {
  id: string;
  body: any;
  check: boolean;
};

export type updateTask = {
  task: task;
  updateTask: (id: string, body: any, onClose: () => void) => void;
};

export type DeleteTaskProps = {
  task: task;
  deleteTask: (id: string, onClose: () => void) => void;
};

export type DeleteAllTask = {
  deleteTaskAll: () => void;
};

export type tasks = {
  tasks: Array<task>;
  updateTask: (id: string, body: any, onClose: () => void) => void;
  deleteTask: (id: string, onClose: () => void) => void;
  deleteTaskAll: () => void;
  checkTask: (id: string) => void;
};
