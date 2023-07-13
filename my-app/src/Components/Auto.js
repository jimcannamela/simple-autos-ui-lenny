import React from 'react';

function Auto({auto}) {
    return (
        <>
            <p>{auto.year + " " + auto.make + " " + auto.model}</p>
        </>
    );
    }
    
    export default Auto;
