import React from 'react'
import {FiLink} from 'react-icons/fi'
import { useMediaQuery } from 'react-responsive';
function TagSelecthash(props) {
  
  const res750= useMediaQuery({query :'(max-width : 1050px)'});
  const animationStylebackground ={marginBottom : !res750 ? props.act ? '0px' : '40px':'',transition: 'max-width 0.4s ease-out' , background:res750 ?  props.act ? '#363861':'transparent':'' ,maxWidth : props.act ? '200px'  : '30px' , width: props.act ? '200px' : '40px !important' ,paddingBottom : props.act ? '' :'5px'}
  const animationStyle ={whiteSpace : 'nowrap',transition: 'max-width 0.4s ease-out , opacity 0.6s', overflow:props.act ? 'visible' : 'hidden',opacity : props.act  ? '1':0}
  return (
        <div className='chanseRowAdc' style={animationStylebackground}>
            <div className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===1 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span >کلمه</span></div>
            <div style={animationStyle} className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===2 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span>نشانگاه</span></div>
            <div style={animationStyle} className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===3 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span>جستجو</span></div>
            <div style={animationStyle} className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===4 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span>برگه</span></div>
        </div>
  )
}

export default TagSelecthash