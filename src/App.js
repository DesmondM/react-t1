import {useState, useEffect} from 'react'
import './App.css';

export default function App() {

    const [advise, setAdvise] = useState('')
    const [clickCount, setClickCount]= useState(0)
   
    async function fetchData  (){
       
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
        console.log(data)
        setAdvise(data.slip.advice)
        setClickCount(c=>c+1)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div style={{margin:'auto', padding:'30px'}}>
        <p>{advise}</p>
        <button onClick={fetchData}>Get Advise</button>
        <Message count = {clickCount}/>
    </div>
    

  );
}


function Message(props){
    return(
        <p>You have read <strong>{props.count}</strong> advise phrases...</p>
    )
}

