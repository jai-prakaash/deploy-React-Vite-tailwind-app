import React from "react";
import { useState } from "react";

function Article(){
    const [result1 , setresult1] = useState("");

    function Shake1(){
        let result="";
        let num=Math.random();

       if (num < 1/3) {
        result = "Rock"
        
       } else if (num >= 1/3 && num < 2/3 ) {
            result = "Paper"
        }
        else {
             result = "Scissors"
        }

        setresult1(result);

    };

    return(
        <>
        <p> you can see all guides here. </p>

        <button onClick={Shake1} >Rock</button>
        <button onClick={Shake1}>Paper</button>
        <button onClick={Shake1}>Scissors</button>

        <p className="result1 " > {result1}  </p>



        </>
    )
}

export default Article;