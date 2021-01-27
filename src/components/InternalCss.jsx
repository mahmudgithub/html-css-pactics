import React from 'react'

const InternalCss = () => {
    var mystyle={
        color:'blue',
        backgroundColor:'gray',
        padding:"5px",
        margin:'15px',
        border:'solid'
    };

    var one={
        backgroundColor:'green',
        color:'white',
        margin:'5px',
        padding:'50px',
        border:'solid black 5px'
    };
    var two={
        border:'solid black 1px',
        margin:'15px',
        padding:'10px',
        textAlign:'left',
        color:'black',
        backgroundColor:'blue',


    };
    var three={
        border:'solid black 1px',
        margin:'15px',
        padding:'10px',
        textAlign:'left',
        color:'red',
        backgroundColor:'black',

    };
    var four={
        border:'solid black 1px',
        margin:'15px',
        padding:'10px',
        textAlign:'left',
        color:'blue',
        backgroundColor:'red',

    }


    return (
        <div>
            <div style={mystyle}> hello </div>
            <div style={one}>Lorem ipsum dolor </div>



                        <div style={two}> i am div two              
                            <div style={three}> i am div three
                                <div style={four}> i am div four
                                </div>
                                </div>
                                </div>            
                                
                            
                        
        </div>
    
    )
}

export default InternalCss
