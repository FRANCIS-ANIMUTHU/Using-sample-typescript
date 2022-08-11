import React from 'react';
import logo from './logo.svg';
import './App.css'
import Home from './Home';


function App() {
  const [name,setname]=React.useState('React');
  const [age,setage]=React.useState(21)
  const update=(data: any)=>{
       setname(data) 
  }
  const updateage=(data:any)=>{
    setage(data)
  }
  return (
    <div className="App">
      React Typescript
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      
      
      <button onClick={()=>update('Francis')}>update</button> 
      <button onClick={()=>updateage('24')}>updateage</button> 
    
      
    </div>
  );
}

export default App;
