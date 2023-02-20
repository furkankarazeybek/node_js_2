//protocol buffer alandan verim sağlar
const fs=require('fs')
const todos = [];

todos.push(
    {
        id:1,
        title:'title',
        content:'Content',
        isActive:false
    }
)
todos.push(
    {
        id:1,
        title:'title 2',
        content:'Content 2',
        isActive:true
    }
)
todos.push(
    {
        id:1,
        title:'title3',
        content:'Content3',
        isActive:false
    }
)

fs.writeFileSync('todo.json',JSON.stringify(todos))