import React from 'react'

function DasteBandiComponent(props) {
  const animationStylebackground ={transition: 'margin 0.4s,max-width 0.4s ease-out',maxWidth : props.act ? '200px'  : '80px',background :props.act ? props.background : "transparent" }
  const animationStyle ={whiteSpace : 'nowrap',transition: 'max-width 0.4s ease-out , opacity 0.6s',maxWidth : props.act ? '200px'  : 0 ,opacity :props.act ? 1 : 0 , overflow:props.act ? 'visible' : 'hidden'}
  return (
        <div className='categoryItemAdc' style={animationStylebackground}>
            <div  className='categoryCircleAdc' style={{backgroundColor:props.backgroundColor}}><span>{props.label[0]}</span></div>
            <div style={animationStyle} className='categorylabelAdc'><span>دسته بندی {props.label} </span></div>
        </div>
  )
}

export default DasteBandiComponent