import React from 'react'
import ChindCompo from './ChindCompo';

function ParentCompo() {

    const names = ["Ashish", "Pawan", "Sam"];
    
    return (
        <div>
            <ChindCompo data={names[1]}/>
        </div>
    )
}

export default ParentCompo