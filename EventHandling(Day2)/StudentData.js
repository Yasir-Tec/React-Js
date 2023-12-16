import React from "react";
import EduDetails from "./EduDetails";

export default class StudentData extends React.Component
{
    constructor()
    {
        super();
        this.state={flag:false}
    }


    render()
    {
        return(

            <div>
                <p>Name  : Yasir</p>
                <p>Dob   : 29-06-1999</p>
                <p>Email : yasor@gmail.com</p>

                Education Details :
                <input type="checkbox" onClick={ (e)=>{
                    this.setState({flag:e.target.checked})
                }}
                />

            { this.state.flag && <EduDetails></EduDetails> }
            </div>
        )
    }
    



}