import React from "react";
import ReactDOM from "react-dom/client";


const Heading=()=>{
    return (<div id="container">
        <h1 id="head"> Head title rendered inside head</h1>
        </div>);
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(< Heading/>);