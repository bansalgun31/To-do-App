 let Todo = [];

let req=prompt("please enter your choice");

 while(true)
{
    if(req=="quit")
    {
        console.log("quitting app");
        break;
    }
    if(req== "list")
    {
        console.log("-----");
        for(let i=0;i<Todo.length;i++)
        {
            console.log(i, Todo[i]);
        }
        console.log("-----");
    }
    if(req=="add")
    {
        let task = prompt("enter the task that you want to add");
        Todo.push(task);
        console.log("task added successfully");
    }
    if(req=="delete")
    {
        let idx=prompt("enter the index that you want to delete");
        Todo.splice(idx,1);
        console.log("task deleted");
    }
    req=prompt("please enter your req");
} 