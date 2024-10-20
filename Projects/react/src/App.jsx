import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './toDo.jsx'
import Todo from './toDo.jsx'
// http://localhost:5173
function App() {
 
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked');
  }
    
  function addNumber(num){
    alert(num+12);
  }



  return (
    <>
      {/* <About> </About>
      <Student></Student>
      <Todo task='Learn React' isDone={true ? 'yes': 'no'}></Todo>
      <Todo task='Learn Django'></Todo>
      <Todo task='Learn MongoDB'></Todo> */}

    <h3>React Core Concepts Part 2</h3>
  <button onClick={handleClick}>Button 1</button>
  <button onClick={handleClick2}>Button 2</button>
  
  <button onClick={() => {alert('clicked 3')}}>Button 3</button>

  <button onClick={() => addNumber(5)}>Five</button>
    </>
  )
}


  

// function About(){
//   const person = {name: 'Shahriar', age: 25};

//   return <h2>Hello There, myself {person.name} of age {person.age} </h2>

// }

// function Student(){

//   return (
//   <div>
//     <h4>This is a student</h4>
//   </div>
//   )
// }

export default App
