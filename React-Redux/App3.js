import { Provider } from "react-redux";
//import Child from "./Child";
import DncrC1 from "./DncrC1";
import IncrC1 from "./IncrC1";
//import Parent from "./Parent";
import mystoreRedux from "./mystore";
import PushC3 from "./PushC3";
import { ErrorBoundary } from "react-error-boundary";
import React, { useRef } from 'react';

export default function App3()
{   
    return(
   
       
        <ErrorBoundary>
        <Provider store={mystoreRedux}>
        <IncrC1></IncrC1>
        <DncrC1></DncrC1>
        <PushC3></PushC3>
        </Provider>
        </ErrorBoundary>
      
      
    )
}