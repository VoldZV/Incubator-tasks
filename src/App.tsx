import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './monday-task1/header'
import {Body} from "./monday-task1/body";
import {Footer} from "./monday-task1/footer";

function App() {
  return (
    <>
      <Header titleHeader={'Header-very good'} />
      <Body titleBody={'Body-very well'}/>
      <Footer titleFooter={'Footer-it is beautiful'}/>
    </>
  );
}

export default App;
