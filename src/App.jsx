
import RestorantDetails from './components/RestorantDetails';
import axios from 'axios';
import {useEffect, useState} from 'react'

function App() {
const [Loading, setLoading]=useState(true)
const [Error, setError]= useState(false);
const [data, setData]=useState([]);

useEffect(()=>{
  setLoading(true);
  axios({
    method:'get',
    url:"http://localhost:8080/food"
  })
  .then(res=>{
    setData(res.data);
    setLoading(false)
  })
  .catch(err=>{
    setError(true);
    setLoading(false);
  })
},[])
console.log("data : ",data)

  return (
    <div className="App">
     <h1>Learn Coding With Vinayak</h1>
     <div>
       {data.map(item=>
        <RestorantDetails key={item.id} data={item}/>)
        }
     </div>
     {/* <RestorantDetails></RestorantDetails> */}
    </div>
  );
}

export default App;
