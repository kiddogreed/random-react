
import './App.css';

const App= ()=> {
  const test = 'test'
  const isNameShowing = false

  return (
    <div className="App">
     <h1>hasdas:{isNameShowing? test:'someone'}</h1>
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
