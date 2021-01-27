import React from 'react'


const SelectCss = () => {

    return (
<div className='body'>

{/* id selector example  */}
<p id='one'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident!
</p>

{/* class selector example */}
<div>
    <p className='two'>
        Lorem ipsum dolor sit amet con
    </p>
</div>


{/* sub-attribte selector example*/}
<div className='three'>
    <p className='sub-three'>sub three </p>
    <h1>Lorem ipsum dolor sit amet.</h1>
</div>

{/* nested  id ettribute sector */}
<div id='four'>
    <div id='five'>
        <div id='six'>
            <div>
                <h2>i am inner </h2>
                <h3>i am inner h3</h3>
            </div>
        </div>
    </div>
</div>



</div>
    )
}

export default SelectCss
