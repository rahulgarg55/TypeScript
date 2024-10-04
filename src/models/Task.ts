import {Priority} from './Priority';

export interface Task{
    id:number;
    title:string;
    description:string;
    priority:Priority;
    completed:boolean;
    createdAt:Date;
}

export type TaskUpdate = Partial<Omit<Task,'id' | 'createdAt'>>;    