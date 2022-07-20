import React from 'react';
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
                <Task day={'MONDAY'} task={2}/>
                <NewComponent students={students}/>
                <br/>
                <CarsTable topCars={topCars}/>
                <Button name={'YoutubeChannel 1'}/>
                <Button name={'YoutubeChannel 2'}/>
            </>
        </>
    );
}

export default App;
