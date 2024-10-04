import {TaskService} from './services/TaskService';
import {Priority} from './models/Priority'; 
import {validateTaskTitle} from './utils/Validator';    
import { walkUpBindingElementsAndPatterns } from 'typescript';

const taskService = new TaskService();  
async function main(){
    const title = 'Complete the project';   
    const description = 'Finish the project by the end of the week';    
    if (!validateTaskTitle(title)) {
        console.log('Task title should be at least 3 characters long.');
        return;
      }
      const task = taskService.createTask(title, description,Priority.High);
      console.log('Task created:', task);

      const tasks = taskService.getAllTasks();   
      console.log('All tasks:', tasks);

      const updatedTask = taskService.updateTask(task.id,{completed:true});
      console.log('Updated Task:',updatedTask);

      const isDeleted = taskService.deleteTask(task.id);
      console.log(`Task ${task.id} deletion ${isDeleted ? 'successful' : 'failed'}.`);
    }
    main();