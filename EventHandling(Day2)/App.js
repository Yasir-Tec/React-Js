
import { useState } from 'react';
import './App.css';
//import Halfstring from './HalfString';
//import Showmonthname from './showMonthName';
//import StudentData from './StudentData';
//import ShowList from './ShowList';
import CaseExample from './CaseExample';
//import Hello from './Hello';
//import SayHi from './SayHi';



function App() {

  let [col,setcol] = useState("")

  function handler(event)
  {
      console.log(event.target.value)
      setcol(event.target.value)
  }



  return (
   
    <div>
      <CaseExample></CaseExample>
      {/*<ShowList></ShowList>*/}
      {/*<StudentData></StudentData> */}
     {/*<Showmonthname></Showmonthname> */}
    {/*<Halfstring></Halfstring>*/}
    {/* <SayHi></SayHi> */}

    {/*Enter Color: <input type="color" onChange={handler} />
        <Hello name={"Yasir"} col={col}></Hello> */}
 
    </div>

  );
}

export default App;
