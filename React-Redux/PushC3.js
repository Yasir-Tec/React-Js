import { useDispatch } from "react-redux"


export default function PushC3()
{
    let dispatcher = useDispatch()
    let count = 0

    return(
        <> 
        <input type="button" value="Push" onClick={()=>{
            dispatcher({type:"PUSH",data:`City ${++count}`})
        }}/>
        </>
    )
}