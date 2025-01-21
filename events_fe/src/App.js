import { useState, useEffect } from 'react';
import './App.css';

const UseExamples = () => {
  //useState
  const [counter, setCounter] = useState(0);

  //useEffect
  useEffect(() => {
    alert("New Value : " + counter);
  }, [counter]);

  return (
    <>
      <button onClick={() => {setCounter((prevCount) => prevCount -1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter((prevCount) => prevCount +1)}}>+</button>
    </>
  );
}

const PerfromerCell = (props) => {
  const image = props.image;
  const name = props.name;
  const instrument = props.instrument;
  const audio = props.audio;

  return (
    <>
      <img src={image}></img>
      <h1>{ name }</h1>
      <h3>{ instrument }</h3>
      <iframe width="10%" height="20" scrolling="no" frameborder="no" allow="autoplay" src={audio}></iframe>
    </>
  );
}
<PerfromerCell 
  name={'Luke'}  
  image={'https://www.tutorialspoint.com/assets/questions/media/426142-1668760765.png'} 
  instrument={'Singer'} 
  audio={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1917142007&color=%23060e06&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'}
/>


const LOCAL_API_URL = "http://localhost:3000"

const App = () => {

  // const searchPerformer = async (performerId)

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      {/* <UseExamples/> */}
    </div>
  );
}

export default App;
