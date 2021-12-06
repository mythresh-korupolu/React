import React from 'react';

import { useState } from 'react/cjs/react.development';

function Demohook(){
    let namehook=useState("Jack");
    let changename=namehook[0];
    let funcall=namehook[1];
    function Changename(){
        funcall("Jill");

    }
    return(
        <div>
            <h3>Your Name is:{changename}</h3>
            <button onClick={Changename}>Changename</button>
        </div>
    )
}
export default Demohook