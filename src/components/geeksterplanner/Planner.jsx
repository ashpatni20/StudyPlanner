import { useState } from "react"
import ShowPlanner from "./ShowPlanner";
import { v4 as uuidv4 } from 'uuid'; 

export default function Planner() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState();

  function increment(id){
        console.log(id);

    let arr = [...list];
    let updateArr = arr.map((ele)=>{
      if(ele.id === id){
        ele.number = parseInt(ele.number);
        ele.number = ele.number+1;
       
      }
      return ele;
      
    })
    console.log(updateArr);
    setList(updateArr);
    // number = parseInt(number);
    // number+=1;
    // console.log(number);
}
function decrement(id){
    
  let arr = [...list];
  let updateArr = arr.map((ele)=>{
    if(ele.id === id){
      ele.number = parseInt(ele.number);
      
      ele.number ===0 ? ele.number=0 : ele.number-=1;
     
    }
    return ele;
    
  })
  console.log(updateArr);
  setList(updateArr);
}

  const handlePlanner =()=>{
    let obj = {
      id:uuidv4(),
      name,
      number,
    }
    setList([...list, obj]);

  }
  // console.log(list);
  
  return (
   <div className="text-center p-3">
    <h1 className="p-10 font-bold text-3xl ">Planner</h1>
    <input type="text" name="" id="" className=""  value={name} onChange={(e)=>setName(e.target.value)}  />
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
    
    <button className="button-31" onClick={handlePlanner}>add</button>
    <div>
      {list.map((e, idx)=>{
        return <ShowPlanner props={e} key={idx} handleIcrement={increment} handleDecrement={decrement}/>
      })}
      
    </div>
   </div>
  )


}

