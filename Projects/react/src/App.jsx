import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// http://localhost:5173
function App() {
 

  return (
    <>
      <About> </About>
      <Student></Student>
      
    </>
  )
}


  

function About(){
  const person = {name: 'Shahriar', age: 25};

  return <h2>Hello There, myself {person.name} of age {person.age} </h2>

}

function Student(){

  return (
  <div>
    <h4>This is a student</h4>
  </div>
  )
}

export default App
