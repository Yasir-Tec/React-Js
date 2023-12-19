import {useState} from "react"
import Child from "./Child"

export default function Parent()
{

    let[arr,setarr] = useState(["Pune","Mumbai"])
    function addToArray(element)
    {
        console.log("addToArray of Parent called",element)
        setarr([...arr,element])
        console.log("element added",arr)
      
    }
    return(
        <div>
            <ol>
                {arr.map((ele,index)=>{
                    return <li key={index}>{ele}</li>
                })}
            </ol>
            <Child add={addToArray}></Child>

        </div>
    )
}