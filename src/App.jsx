import React from 'react';
import Header from './components/Header';
import Course from './components/Course';
import Foooter from './components/footer/Footer';
import style from './App.module.scss';

function Welcome(props) {
  return <h1 style={{backgroundColor: "red", color: "white"}}>Hello {props.name}</h1>
}

const App = () => {
  return (
    <>
      <Header/>
      <button className={style.btn}>Ahhih</button>
      <Welcome name="An" />
      <Foooter/>
    </>
  )
}

export default App