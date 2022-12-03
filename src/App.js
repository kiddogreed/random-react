import { useState, useEffect } from 'react';
import './App.css';

const Person = (props) =>{
  return (
    <>
      <h1>First Name:{props.firstName}</h1>
      <h2>Last Name :{props.lastName}</h2>
      <h3>Age: {props.age}</h3>
    </>
  )
}

const App= ()=> {
  const test = 'test'
  const isNameShowing = false

  const [counter, setCounter] = useState(0)


 const increaseMe = () =>{
   //alert('increase') to test the function
  //use setState setCounter
  setCounter((prevCount) =>prevCount +1) 
  }
 const decreaseMe = () =>{
   //alert('decrease')
   setCounter((prevCount)=>prevCount -1)
   
  }

 useEffect(() =>{
   //setCounter(100)
   alert('you change the counter'+counter)
 },[counter])
  
  
  
  

  return (
    <div className="App">
     <button onClick={increaseMe}>+</button><br></br>
     {counter}
     <br></br>
     <button onClick={decreaseMe}>-</button><br></br>
     
  
     {
      isNameShowing ? (
         <>
           true
         </>
       ):(
         <>
           false
         </>
       )
     }
    </div>
  );
}

export default App;
