
import {useSelector,useDispatch} from "react-redux"

export default function IncrC1()
{
    let dispatcher = useDispatch()
    let count = useSelector((state)=>{
        return state.counter
    })

    let arr = useSelector((state)=>{
        return state.arr
    })

    function handler()
    {
        dispatcher({type:"INCR"})
    }


    return(
        <>
        <ul>
            {arr.map((element,index)=>{
                return <p key={index}>{element}</p>
            })}
        </ul>
        <p>Counter : {count}</p>
        <input type="button" value="++" onClick={handler}/>
        </>
    )

}
