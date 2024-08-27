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
     <Person></Person>
     <Student></Student>
      
    </>
  )
}

function Person(){
  const age = 43;
  const person = {name: 'Honey', age:35}
  return <h3>Hello there, {person.name}.Let me guess your age: {age}</h3>


}

function Student(){
  return (
  <div>
    <h3>Student ID: </h3>
    <p>Name: </p>
    <p>Age</p>
  </div>
  )
}

export default App
