//import logo from './logo.svg';
//import AjaxExF from './AjaxExample1';
import Ajaxwithreact from './AjaxExample2';
import './App.css';
import axios from "axios"

export default function App() {

  let promise = axios.get("https://reqres.in/api/users/2")
  promise.then((response)=>{
      console.log(response)
  },(reject)=>{
      console.log("something wrong",reject)
  })

  return (
    <>
      <p>hii</p>
      {/* <AjaxExF></AjaxExF> */}
      {/* <Ajaxwithreact></Ajaxwithreact> */}
      {/* <AjaxCEx></AjaxCEx> */}

    </>
  )

  }
