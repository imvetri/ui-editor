// Libraries.

import React, { Component } from "react";
import HelpComponent from "../HelpComponent";

function getHelp(){
    let text = 
    `
    // How to access event object?
    console.log(e)
    // How to change state?
    state.name="la la la "
    `;
    
    return <HelpComponent text={text}/>
}
export default getHelp;