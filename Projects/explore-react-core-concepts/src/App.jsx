import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <h1>Hello React</h1>
     <Person></Person>
     <Student grade={10} score={89}></Student>
     <Student grade="7" score="99"></Student>
     <Developer></Developer>
      <Device name="Laptop" price="135000"></Device>
      <Device name="Mobile" price="190000"></Device>
    </>
  )
}

function Person(){
  const age = 43;
  const person = {name: 'Student', age:35}
  return <h3>Hello there, {person.name}. Let me guess your age: {age}</h3>


}

const {grade, score} = {grade: '7', score: '90'};

function Student({grade, score}){
  console.log(grade, score);
  
  return (
  <div className='student'>
    <h3>Student Info: </h3>
    <p>Class: {grade} </p>
    <p>Score: {score}</p>
  </div>
  )
}


function Developer(){
  const developerStyle ={
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
          <h5>Developer</h5>

    </div>
  )
}


function Device(props){
  // console.log(props);
  
  return (
    <div>
      <h2>This Device:{props.name} Price: {props.price} </h2>
    </div>
  )
}

export default App
