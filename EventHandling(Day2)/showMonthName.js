import { useState } from "react";

export default function Showmonthname()
{
    let [month,setMonth] = useState("Not selected")

    function handler(event)
    {
        let selectMonth = parseInt(event.target.value)
        switch(selectMonth)
        {
            case 1 : setMonth("January");break;
            case 2 : setMonth("february");break;
            case 3 : setMonth("March");break;
            case 4 : setMonth("April");break;
            case 5 : setMonth("May");break;
            case 6 : setMonth("June");break;
            case 7 : setMonth("July");break;
            case 8 : setMonth("August");break;
            case 9 : setMonth("September");break;
            case 10 : setMonth("Octomber");break;
            case 11 : setMonth("November");break;
            case 12 : setMonth("December");break;
            default : break;
        }
    }


    return(

        <div>
            <select onChange={handler}>
            <option>Select Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
            <p>the month name is : {month}</p>
        </div>
    )
}