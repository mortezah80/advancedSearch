import React from 'react';
import './CustomSwitch.css'
const CustomSwitch = (props)=>{
  return <div className='toggleBtnRow'>
          <div onClick={()=>props.setVal(1)} className={['itemToggleAdc' , props.active === 1?  "itemToggleAdcActive":''].join(" ")} ><span>جدید ترین</span></div>
          <div onClick={()=>props.setVal(2)} className={['itemToggleAdc' , props.active === 2?  "itemToggleAdcActive":''].join(" ")}><span>قدیمی ترین</span></div>
          <div onClick={()=>props.setVal(3)} className={['itemToggleAdc' , props.active === 3?  "itemToggleAdcActive":''].join(" ")}><span>بیشترین محتوا</span></div>
          <div onClick={()=>props.setVal(4)} className={['itemToggleAdc' , props.active === 4?  "itemToggleAdcActive":''].join(" ")}><span>کمترین محتوا</span></div>
        </div>;

}

export default CustomSwitch;
