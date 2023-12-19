import '../ex1.css'

export default function Child(props)
{

    let data = "initial value"

    return(
        <div class="inner">
           Enter Array Element:
           <input type="text" onBlur={(e)=>{
                data = e.target.value
           }}/>
           <br></br>
           <input type="button" value="add to array" onClick={(e)=>{
                props.add(data)
           }}  />
        </div>

    )
}