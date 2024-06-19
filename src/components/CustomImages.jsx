import React from 'react'

function CustomImages({imgsrc, pt}) {
  return (
    <div className='custom-image' style={{paddingTop: pt}}>
        <img src={imgsrc} alt="" />
    </div>
  )
}

export default CustomImages