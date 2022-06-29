import React from 'react'

function DasteBandiComponent(props) {
  return (
        <div className='categoryItemAdc' style={{background:props.background}}>
            <div  className='categoryCircleAdc' style={{backgroundColor:props.backgroundColor}}><span>{props.label[0]}</span></div>
            <div className='categorylabelAdc'><span>دسته بندی {props.label} </span></div>
        </div>
  )
}

export default DasteBandiComponent