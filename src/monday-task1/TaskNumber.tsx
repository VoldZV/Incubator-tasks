import React from "react";

type TaskType = {
    day: string
    task: number
}

export const Task = (props: TaskType) => {
    return (
        <div className='bold'>{props.day} TASK {props.task}</div>
    )
}