export default function Icard(props)
{
    let {name,dob,phone} = props.obj

    let styleobj = {border:"3px groove blue",width:"300px",backgroundColor:"pink"}

    return(
        <div style={styleobj}>
             <p>Name :{name}</p>
            <p>Dob :{dob}</p>
            <p>phone :{phone}</p>
        </div>
        
    )
}