import { useState, useEffect } from 'react';
import './App.css';

const App= ()=> {
  
  
  // const apiKey ='3ff04cf5'
  // const API_URL =`http://www.omdbapi.com?apikey=${apiKey}`

  // const searchMovies = async (title) =>{
  // const response = await fetch(`${API_URL}&s${title}`)
  // const data = await response.json()
  // console.log(data);
  // } 
  // useEffect(() => {
  //   searchMovies('Spiderman')
  
  // }, [])
  
  const [counter, setCounter] = useState(1)
  const currentFlr = counter
  const maxFlr = 30
  const minflr = 1

  const goUp =() =>{ 
    setCounter((prevCount)=> prevCount + 1)
  }

  const goDown =() =>{

      setCounter((prevCount)=> 
      //validate
      prevCount - 1) 
    
  }

  return (
    <div className="App">
     <button onClick={goUp}>up</button><br></br>
      <h1><input type={'number'}></input>   :   {currentFlr} Flr</h1> 
      <button onClick={goDown}>down</button><br></br>
    </div>
  );
}

export default App;
