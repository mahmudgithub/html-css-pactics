import React from 'react'

const InternalCss = () => {
    var mystyle={
        color:'blue',
        backgroundColor:'gray',
        padding:"5px",
        margin:'15px',
        border:'solid'
    }

    // var one={
    //     backgroundColor:blue;
    // }

    return (
        <div>
            <div style={mystyle}> hello </div>
        </div>
    )
}

export default InternalCss
