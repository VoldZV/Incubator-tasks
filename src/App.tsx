import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './monday-task1/header'
import {Body} from "./monday-task1/body";
import {Footer} from "./monday-task1/footer";
import {CarsTable, NewComponent} from "./monday-task1/Map";
import {Task} from "./monday-task1/TaskNumber";
import {students} from "./monday-task1/Map";
import {topCars} from "./monday-task1/Map";
import {Button} from "./monday-task1/button";


function App() {
    const Button1foo = (subscriber:string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2foo = (subscriber:string, age: number) => {
        console.log(subscriber, age)
    }
    const Button3foo = () => {
        console.log('Who are stupid Buttons?')
    }

    //хуки
    let [a, setA] = useState(0)
    const counterButton = () => {
        setA(++a);
        console.log(a)
    }
    const resetCounterButton = () => {
        setA(a = 0);
        console.log(a)
    }


    return (
        <>
            <>
                <Task day={'MONDAY'} task={1}/>
                <Header titleHeader={'Header-very good'}/>
                <Body titleBody={'Body-very well'}/>
                <Footer titleFooter={'Footer-it is beautiful'}/>
            </>
            <br/>
            <>
                <Task day={'MONDAY'} task={2-3}/>
                <NewComponent students={students}/>
                <br/>
                <CarsTable topCars={topCars}/>
                <Button name={'MyYouTubeChannel-1'} callback={() => Button1foo('I m Vasya', 21)}/>
                <Button name={'MyYouTubeChannel-2'} callback={() => Button2foo('I m Ivan', 30)}/>
                <Button name={'Stupid Button'} callback={Button3foo}/>
            </>
            <br/>
            <>
                <Task day={'MONDAY'} task={4}/>
                <h1>{a}</h1>
                <Button name={'УВЕЛИЧИТЬ ЧИСЛО'} callback={counterButton}></Button>
                <Button name={'ОБНУЛИТЬ СЧЕТЧИК'} callback={resetCounterButton}></Button>
            </>
        </>
    );
}

export default App;
