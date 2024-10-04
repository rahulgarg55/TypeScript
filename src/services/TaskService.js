"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
class TaskService {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }
    createTask(title, description, priority) {
        const newTask = {
            id: this.currentId++,
            title,
            description,
            priority,
            completed: false,
            createdAt: new Date(),
        };
        this.tasks.push(newTask);
        return newTask;
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }
    updateTask(id, update) {
        const task = this.getTaskById(id);
        if (!task) {
            console.log(`Task with ID ${id} not found.`);
            return undefined;
        }
        Object.assign(task, update);
        return task;
    }
    deleteTask(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) {
            return false;
        }
        this.tasks.splice(taskIndex, 1);
        return true;
    }
}
exports.TaskService = TaskService;
