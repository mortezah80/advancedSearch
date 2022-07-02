import React from 'react'
import {FiLink} from 'react-icons/fi'
function TagSelecthash(props) {
  
  const animationStylebackground ={transition: 'max-width 0.4s ease-out',maxWidth : props.act ? '200px'  : '40px',backgroundColor :props.act ? "#363861" : "transparent" }
  const animationStyle ={whiteSpace : 'nowrap',transition: 'max-width 0.4s ease-out , opacity 0.6s',opacity :props.act ? 1 : 0 , overflow:props.act ? 'visible' : 'hidden'}
  return (
        <div className='chanseRowAdc' style={animationStylebackground}>
            <div className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===1 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span style={animationStyle}>کلمه</span></div>
            <div style={animationStyle} className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===2 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span>نشانگاه</span></div>
            <div style={animationStyle} className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===3 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span>جستجو</span></div>
            <div style={animationStyle} className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===4 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span>برگه</span></div>
        </div>
  )
}

export default TagSelecthash