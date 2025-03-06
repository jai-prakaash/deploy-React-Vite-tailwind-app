import React from "react";


function Home(){

    function shake(){
    let ran=Math.random();

    if (ran> 1/2) {

        document.querySelector(".result").innerText="heads"
        
    }
    else{ document.querySelector(".result").innerText="tails" }
};

 return(
<>

<h3> Welcome to the Tutorial </h3>


<button onClick={shake} > Click </button>

<p className=" result "> </p>



</>


 )


}

export default Home;
