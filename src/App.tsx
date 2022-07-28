import React, {useState} from 'react';
import './App.css';
import {Header} from './monday-task1/header'
import {Body} from "./monday-task1/body";
import {Footer} from "./monday-task1/footer";
import {CarsTable, NewComponent} from "./monday-task1/Map";
import {Task} from "./monday-task1/TaskNumber";
import {students} from "./monday-task1/Map";
import {topCars} from "./monday-task1/Map";
import {Button} from "./monday-task1/button";
import {Money} from "./monday-task1/money";
import {Fullinput} from "./monday-task1/Task_6_input/Fullinput";
import {Input} from "./monday-task1/Task_6_input/Input";
import {ButtonInput} from "./monday-task1/Task_6_input/ButtonInput";


function App() {

    const Button1foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2foo = (subscriber: string, age: number) => {
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
        setA(0);
        console.log(a)
    }

    //метод FILTER
    const money = [
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]

    /* let [filteredMoney, setFmoney] = useState(money);

     const moneyFilterHandler = (filt: string) => {
         if (filt === 'allMoney') {filteredMoney = money.filter(el=>{
             return true
         })};
         if (filt === 'RUBLS') {filteredMoney = money.filter(el=>{
             return el.banknots === 'RUBLS'
         })};
         if (filt === 'Dollars') {filteredMoney = money.filter(el=>{
             return el.banknots === 'Dollars'
         })};
         setFmoney(filteredMoney)
         console.log(filt)
     }*/

    //альтернативный код для FILTER с хуками
    let filteredMoney = money;
    const [filt, filtFunc] = useState('allMoney')

    if (filt === 'RUBLS') {
        filteredMoney = money.filter(el => {
            return el.banknots === 'RUBLS'
        })
    }


    if (filt === 'Dollars') {
        filteredMoney = money.filter(el => {
            return el.banknots === 'Dollars'
        })
    }



    const moneyFilterHandler = (filt: string) => {
        filtFunc(filt)
        console.log(filt)
    }

    // INPUT

    // Fullinput
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (message: string) => {
        setMessage((messages) => [{message: message}, ...messages])
    }

    //INPUT + BUTTON
    let [message1, setMessage1] = useState([
        {message: 'inp+but-1'},
        {message: 'inp+but-2'},
        {message: 'inp+but-3'},
    ])

    let [title1, setTitle1] = useState<string>('')

    const addMessage1 = () => {
        setMessage1([{message: title1}, ...message1])
        setTitle1('')
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
                <Task day={'MONDAY'} task={'2-3'}/>
                <NewComponent students={students}/>
                <br/>
                <CarsTable topCars={topCars}/>
                <Button name={'MyYouTubeChannel-1'} callback={() => Button1foo('I m Vasya', 21)}/>
                <Button name={'MyYouTubeChannel-2'} callback={() => Button2foo('I m Ivan', 30)}/>
                <Button name={'Stupid Button'} callback={Button3foo}/>
            </>
            <br/>
            <br/>
            <>
                <Task day={'MONDAY'} task={4}/>
                <h1>{a}</h1>
                <Button name={'УВЕЛИЧИТЬ ЧИСЛО'} callback={counterButton}></Button>
                <Button name={'ОБНУЛИТЬ СЧЕТЧИК'} callback={resetCounterButton}></Button>
            </>
            <br/>
            <br/>
            <>
                <Task day={'MONDAY'} task={5}/>
                <h3>МЕТОД FILTER</h3>
                <Money money={filteredMoney}/>
                <div style={{marginLeft: '60px'}}>
                    <Button name={'allMoney'} callback={() => moneyFilterHandler('allMoney')}></Button>
                    <Button name={'RUBLS'} callback={() => moneyFilterHandler('RUBLS')}></Button>
                    <Button name={'Dollars'} callback={() => moneyFilterHandler('Dollars')}></Button>
                </div>
            </>
            <>
                <Task day={'MONDAY'} task={6}/>
                <h3>INPUT</h3>
                <h3>FULLINPUT</h3>
                <Fullinput addMessage={addMessage}/>
                {message.map((m, i) => <div key={i + 1}>{m.message}</div>)}
                <br/>
                <h3>INPUT + BUTTON</h3>
                <Input title={title1} setTitle={setTitle1}/>
                <ButtonInput name={'+'} callback={addMessage1}/>
                {message1.map((m, i) => <div key={i + 1}>{m.message}</div>)}

            </>

        </>
    );
}

export default App;
