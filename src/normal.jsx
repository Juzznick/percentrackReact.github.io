import { useState } from 'react';
import './normal.css';

function Normal() {  
  const [presentCount, setPresentCount] = useState(''); 
  const [absentCount, setAbsentCount] = useState(''); 

  const [result, setResult] = useState('');

  const [left, setLeft] = useState('');


  const handleSubmit = event => {


    setLeft('');
    event.preventDefault();
    let nPresentCount=Number(presentCount);
    let nAbsentCount=Number(absentCount);
    let r=(nPresentCount/(nPresentCount+nAbsentCount))*100;
    setResult((Math.round(r * 100) / 100).toFixed(2));
    
    
    if(r<75 && r!=null){
      let toAttend= nAbsentCount*3;
      let nleft=toAttend - nPresentCount;
      setLeft(nleft+` more periods to be attended`); 
    }

    if(nPresentCount==0 || nAbsentCount==0){
      setResult("Enter both the Values!");
      setLeft("");
    }







  };

  const handleClear = event => {
    setPresentCount('');
    setAbsentCount('');
    setLeft('');
    setResult('');
  }
  


  return (
    <div className={'card'}>
    <h1>PercenTrack%</h1>
      <form>
        <input
          id="presentCount"
          name="presentCount"
          placeholder='presentCount'
          type="text"
          onChange={event => setPresentCount(event.target.value)}
        />
        <br />
        <input
          id="absentCount"
          name="absentCount"
          placeholder='absentCount'
          type="text"
          onChange={event => setAbsentCount(event.target.value)}
        />
        <br />
        <button onClick={handleSubmit} type="submit">Submit</button>
        <button onClick={handleClear} type="submit">Clear</button>
        <h2>{result}</h2>
        <h2>{left}</h2>
      </form>
    </div>

    
    
  
  )
}


export default Normal