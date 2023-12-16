import React from "react";

export default class Halfstring extends React.Component
{

    constructor()
    {
        super();
        this.state={half:"not yet completed"}
    }

    handler = (event)=>{

            let s = event.target.value
            let shalf = s.substring(0,s.length/2).toUpperCase()
            this.setState({half:shalf})
    }
    

    render()
    {

        return(
            <div className="inner">
            Enter string: <input type="text" onBlur={this.handler} />
            <p>{this.state.half}</p>
            </div>

        )
    }
}