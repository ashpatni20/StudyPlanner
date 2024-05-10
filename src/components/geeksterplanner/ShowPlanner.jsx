
const ShowPlanner=({props, handleIcrement, handleDecrement})=>{
    // console.log(ele);
    let {name, number, id} = props;
    
    return(
        <>
           <div className="flex w-1/6 m-auto justify-evenly p-4">
            <h1 className="font-bold text-xl">{name}</h1>
            <h1 className="font-bold text-xl">{number}</h1>
            <button className="button-44" onClick={()=>handleIcrement(id)}>+</button>
            <button className="button-44" onClick={()=>handleDecrement(id)}>-</button>
           </div>
        </>
    )

}
export default ShowPlanner;