import React from 'react'
import { IoMdSettings } from 'react-icons/io'
import {BsDot} from 'react-icons/bs'
import { MdOutlineExpandMore } from 'react-icons/md'
import './CustomAccardionStyle.css'
function AccardionSideBar(props) {
  return (
    <div className='accAdcSideBarComp'>
        <div className='accardionHeaderAdc'>
            <div className='accardionIconAdc'>
                <div className='accIconHeader'><IoMdSettings/></div>
                {props.option.map((element, index)=>{
                    return <div key={index} className={['iconItemAccAdc','ajustEveryAdcAcc',index===0?'ajustEveryAdcAccfirst':'',index === props.option.length-1 ? 'ajustEveryAdcAcclast' : ''].join(" ")}><BsDot/></div>
                })}
            </div>
            <div className='accardionLabelAdc'>
                <span>{props.label}</span>
                {props.option.map((element, index)=>{
                    return <span className={['itemSpanLabelsAdc','ajustEveryAdcAcc',index===0?'ajustEveryAdcAccfirst':''].join(" ")}>{element}</span>
                })}
            </div>
            <div className='accardionIndicatorAdc '>
                <MdOutlineExpandMore/>
            </div>
        </div>         
    </div>
  )
}

export default AccardionSideBar