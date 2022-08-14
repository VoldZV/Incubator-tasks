import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';


export type todolistsType = {id: string, title: string, filter: FilterValuesType}

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });



    function removeTask(todoId: string, taskId: string) {
        setTasks({...tasks, [todoId]: tasks[todoId].filter(t => t.id !== taskId)});
    }

    function addTask(todoId: string, title: string) {
        setTasks({...tasks, [todoId]: [{id: v1(), title, isDone: false},...tasks[todoId]]});

        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todoId: string, taskId: string, isDone: boolean) {

        setTasks({...tasks, [todoId]: tasks[todoId].map(t => t.id === taskId ? {...t, isDone} : t)});

        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }


    let tasksForTodolist = tasks;



    function changeFilter( todoListId: string, value: FilterValuesType) {
        setTodolists(todolists.map(toDo => toDo.id === todoListId ? {...toDo, filter: value} : toDo))
    }


    return (
        <div className="App">
            {todolists.map((toDo => {
                let tasksForToDo = tasks[toDo.id]
                if (toDo.filter === "active") {
                    tasksForToDo = tasks[toDo.id].filter(t => t.isDone === false);
                }
                if (toDo.filter === "completed") {
                    tasksForToDo = tasks[toDo.id].filter(t => t.isDone === true);
                }
                return (<Todolist
                            key={toDo.id}
                            todoListId={toDo.id}
                            title = {toDo.title}
                            tasks = {tasksForToDo}
                            removeTask={(taskId) => removeTask(toDo.id, taskId)}
                            changeFilter={(value: FilterValuesType)=>changeFilter(toDo.id, value)}
                            addTask={(title)=> addTask(toDo.id, title)}
                            changeTaskStatus={(taskId: string, isDone: boolean)=> changeStatus(toDo.id,taskId, isDone)}
                            filter={toDo.filter}
                />)
            }))}

        </div>
    );
}

export default App;
