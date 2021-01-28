import React from 'react'

const InlineCss = () => {
    return (
        <div>

            {/* this div simple inline style show */}
            <p style={{color:'green', backgroundColor:'gray',border:'solid',margin:30, padding:10, textAlign:'left'}}>Helooo</p>
             
            {/* this div show inline nested div */}
            <div className='three'>
                <h1 style={{color:'blue',border:'dotted',textAlign:'right'}}>i am class tree</h1>
            </div>

            {/* this div for background color show */}
            <div style={{color:'skyblue',border:'solid', margin:'15px',backgroundColor:'red', padding:'10px'}}><h1>mahmud</h1></div>

            {/* this dive for inline local image show */}
            <div style={{ backgroundImage: "url('/images/lol.jpg')", backgroundRepeat: 'repeat', border:'solid 5px blue', margin:'40px', padding: '15px', }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facilis ipsum suscipit  </div>
            
            </div>
    )
}

export default InlineCss
