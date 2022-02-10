import {useState} from 'react';

function App() {

  const [jokeData,setJokeData] = useState();

  const fetchData = ()=>{
    fetch('http://api.icndb.com/jokes/random')
    .then(res=>res.json())
    .then((data)=>{setJokeData(data.value.joke)});

 
  }
  window.onload=()=>{
    fetchData();
  }
  

  return (
    <div className="App">
      
      <div className="random-div">
      <h1>Random Jokes Generator</h1>
      <div className='container'>
      
      <h5> {jokeData} </h5>
      
      </div>
      <button type="submit" onClick = {fetchData}>Click Me</button>
      </div>
      </div>
  );
}

export default App;
