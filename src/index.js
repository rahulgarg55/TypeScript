"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskService_1 = require("./services/TaskService");
const Priority_1 = require("./models/Priority");
const Validator_1 = require("./utils/Validator");
const taskService = new TaskService_1.TaskService();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const title = 'Complete the project';
        const description = 'Finish the project by the end of the week';
        if (!(0, Validator_1.validateTaskTitle)(title)) {
            console.log('Task title should be at least 3 characters long.');
            return;
        }
        const task = taskService.createTask(title, description, Priority_1.Priority.High);
        console.log('Task created:', task);
        const tasks = taskService.getAllTasks();
        console.log('All tasks:', tasks);
        const updatedTask = taskService.updateTask(task.id, { completed: true });
        console.log('Updated Task:', updatedTask);
        const isDeleted = taskService.deleteTask(task.id);
        console.log(`Task ${task.id} deletion ${isDeleted ? 'successful' : 'failed'}.`);
    });
}
main();
