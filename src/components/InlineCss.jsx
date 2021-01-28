import React from 'react'

const InlineCss = () => {
    return (
        <div>
        <div class='inlinecss'>
            <p style={{color:'green', backgroundColor:'gray',border:'solid',margin:30, padding:10, textAlign:'left'}}>Helooo</p>
        </div>

        <div className='one'>
            <div className='two'>
                <div className='three'>
                    <h1 style={{color:'blue',border:'dotted',textAlign:'right'}}>i am class tree</h1>
                </div>
            <div className='four' style={{color:'skyblue',border:'solid', margin:'15px',backgroundColor:'red', padding:'10px'}}><h1>mahmud</h1></div>
            
            </div>
        </div>
        
        </div>
    )
}

export default InlineCss
