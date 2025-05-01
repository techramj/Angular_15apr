export interface Task{
    id:string;
    userid:number;
    title:string;
    summary:string;
    dueDate:string;
}

export const DUMMY_TASKS:Task[] = [
    {
        id:'t1',
        userid:1,
        title:'Angular',
        summary:'Learn all the basic features of Angular and build a simple application',
        dueDate:'2025-08-31'
    },
    {
        id:'t2',
        userid:1,
        title:'React',
        summary:'Learn all the basic features of React and build a simple application',
        dueDate:'2025-07-22'
    },
    {
        id:'t3',
        userid:2,
        title:'Spring Boot',
        summary:'Spring Boot features and create Rest API for Users and Tasks',
        dueDate:'2025-09-30'
    },
    {
        id:'t4',
        userid:3,
        title:'Angular',
        summary:'Learn all the basic features of Angular and build a simple application',
        dueDate:'2025-08-31'
    }
];