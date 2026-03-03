import React from "react";
import ReactDOM from "react-dom/client";

const root=ReactDOM.createRoot(document.getElementById("root"));

//React Element---------------

// const head=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//     React.createElement("h1",{},"hello i am h1")));
//or 
// const Reacthead=React.createElement("div",{id:"parent"},"hello");

// Jsx- React element-------------

// const jsxHeading=<h1 id="jsxhead">this is jsx</h1>
// console.log(Reacthead)
// console.log(jsxHeading)

//Rendering React element--------------------

// root.render(jsxHeading);


//React Component---------------------
// const Title=()=>{
//     return (<h1 id="head">Title component !!</h1>
//     );
// }

//to render components ->  < component/>

// const Heading=()=>{
    
//     return (  <div id="container">
//                 <Title/> <h1 id="head">Head.... title rendered inside head</h1> 
//          </div> 
//     );
// }
// root.render(< Heading/>)



