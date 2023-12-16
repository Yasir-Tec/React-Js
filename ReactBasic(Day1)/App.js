//import logo from './logo.svg';
import './App.css';
import Icard from './icard';
import Maths from './maths';
import Total from './total';
import Welcome, { Greeting } from './welcome';


let arr = [12,13,10,20]

let obj = {name:"pajjuu",dob:"1-1-2000",phone:"1233455"} 

function App() {
  return (
    <>
      <p>hii baba</p>
      <Icard obj={obj}></Icard>
      <Welcome></Welcome>
      <Greeting></Greeting>
      <Maths num1={30} num2={1.4} op={"*"}></Maths>
      <Maths num1={30} num2={100} op={"*"}></Maths>
      <Maths num1={1.9} num2={1.4} op={"-"}></Maths>
      <Maths num1={300} num2={3} op={"/"}></Maths>
      <Total nums={arr}></Total>
    </>
  );
}

export default App;
