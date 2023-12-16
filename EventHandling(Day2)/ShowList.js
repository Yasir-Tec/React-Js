import { useState } from "react"

export default function ShowList()
{
    let[tableflag,setTable] = useState(false)
    let[olflag,setOl] = useState(false)
    let[ulflag,setul] = useState(false)
    let arr=["red","green","blue","yellow","pink","purple","white","black"]

    let[arr2,setArray2] = useState([])

    function handler(choice)
    {
        switch(choice)
        {
            case "table":{
                let arr2 = arr.map((ele,index)=>{
                    return <tr><td>{index}</td><td>{ele}</td></tr>
                })
                setArray2(arr2);
                break;
                }

            case "ol":{
                setOl(true)
                let arr2 = arr.map((element)=>{
                    return <li>{element}</li>
                 })
                 setArray2(arr2)
                 break;
                }

            case "ul" :{
                setul(true)
                let arr2 = arr.map((element)=>{
                    return <li>{element}</li>
                 })
                 setArray2(arr2)
                 break;
                } 
            default :break;

        }
    }

    return(

        <>
        Table Format:<input type="radio" name="format" onClick={()=>{handler("table")}}/>
        Ol format : <input type="radio" name="format" onClick={()=>{ handler("ol")}}/>
        UL format :<input type="radio" name="format"onClick={()=>{ handler("ul")}}/>

        {tableflag && <table border="1">{arr2}</table>}
        {olflag && <ol>{arr2}</ol>}
        {ulflag && <ul>{arr2}</ul>}

        </>
    )
}