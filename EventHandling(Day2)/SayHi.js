import { useState } from "react"

export default function SayHi()
{

    let[msg,setmsg] = useState("bye")
    function handler()
    {
        setmsg("hii")
    }
    return(
        <>
            <input type="button" value="Say Hi" onClick={handler} />

            <p>{msg}</p>

        </>
    )
}