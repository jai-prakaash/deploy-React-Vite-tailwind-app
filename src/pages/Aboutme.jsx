// import React from "react";

// function About(){

//     let count=0;

//     function add(num) {

//         count +=num;

//         console.log(count);
        

//     }

//     return(

//         <>
//         <h3> this is my number  </h3>

//         <button onClick={add}> +1 </button>

      
//         <button onClick={add(2)}> +2 </button>

//         </>


//     )}

//     export default About;


import React from "react";

function About() {
    let count = 0;

    function add(num) {
        count += num;
        console.log(count);
    }

    function sub(num) {
        count-=num;
        console.log(count);
        

        
    }

    return (
        <>
            <h3>This is my number</h3>
            <br />
            <div>
            <button onClick={() => add(1)}> 1 </button>
            <button onClick={() => add(2)}> 2 </button>
            <button onClick={() => add(3)}> 3 </button>
            <button onClick={() => add(2)}> + </button>
            </div>
            <br />
            <div>
            
            <button onClick={() => add(4)}> 4 </button>
            <button onClick={() => add(5)}> 5 </button>
            <button onClick={() => add(6)}> 6 </button>
            <button onClick={() => add(2)}> - </button>
            </div>
            <br />
            <div>
            <button onClick={() => add(7)}> 7</button>
            <button onClick={() => add(8)}> 8 </button>
            <button onClick={() => add(9)}> 9 </button>
            <button onClick={() => add(2)}> X </button>

            </div>
            <br />
            <div>

            <button onClick={() => add(0)}> 0 </button>
            <button onClick={() => add(2)}> / </button>
            <button onClick={() => add(2)}> = </button>
            <button onClick={() => add(2)}> Clear </button>
            </div>
        </>
    );
}

export default About;
