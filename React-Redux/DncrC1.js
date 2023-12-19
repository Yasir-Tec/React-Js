import { useDispatch, useSelector } from "react-redux";

export default function DncrC1()
{
    let dispatcher = useDispatch()

    let c = useSelector((state)=>{
        return state.counter
    })

    let arr = useSelector((state)=>{
        return state.arr
    })


    function handler()
    {
        dispatcher({type:"DNCR"})
    }


    return(
        <>
        <ul>
            {arr.map((element,index)=>{
                return <p key={index}>{element}</p>
            })}
        </ul>
        <p>Counter: {c}</p>
        <input type="button" value="--" onClick={handler} />
        </>
    )
}