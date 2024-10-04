import {Task, TaskUpdate} from '../models/Task';
import {Priority} from '../models/Priority';

export class TaskService{
    private tasks: Task[] = [];
    private currentId: number = 1; 

    createTask(title: string, description: string, priority: Priority): Task {
        const newTask: Task = {
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
    getAllTasks():Task[]{
        return this.tasks;
    }   
    getTaskById(id:number):Task |undefined {
        return this.tasks.find(task => task.id === id);
    }
    updateTask(id: number, update: TaskUpdate): Task | undefined {
        const task = this.getTaskById(id);
        if (!task) {
          console.log(`Task with ID ${id} not found.`);
          return undefined;
        }
    Object.assign(task,update);
    return task;  
}

deleteTask(id:number):boolean{
    const taskIndex= this.tasks.findIndex(task => task.id === id);
    if(taskIndex===-1){
        return false;
    }
    this.tasks.splice(taskIndex,1);
    return true;
}
}