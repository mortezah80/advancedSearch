import React from 'react'
import {FiLink} from 'react-icons/fi'
function TagSelecthash(props) {
  return (
        <div className='chanseRowAdc'>
            <div className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===1 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span>کلمه</span></div>
            <div className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===2 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span>نشانگاه</span></div>
            <div className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===3 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span>جستجو</span></div>
            <div className='changeCircleItemAdc'><div className={['circleLinkItonAdcsideBar',props.active ===4 ? 'chainCircleActivePrimary':''].join(" ")}><FiLink/></div><span>برگه</span></div>
        </div>
  )
}

export default TagSelecthash