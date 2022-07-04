import React, { useState } from 'react'
import { BsDot } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineExpandMore } from 'react-icons/md';
import {FaLayerGroup} from 'react-icons/fa'
function SpecialAcc(props) {
    const [acc , setAcc] = useState(0);
  
    const animationStylebackground ={transition: 'max-width 0.4s ease-out',maxWidth:props.act ? '200px':'120px',background :props.act ? "linear-gradient(263deg, rgba(20,22,37,1) 0%, rgba(37,38,66,1) 46%, rgba(51,53,91,1) 68%, rgba(63,66,105,1) 100%)" : "transparent" }
    const animationStylebackgroundPrimary ={transition: 'max-width 0.4s ease-out',maxWidth:props.act ? '200px':'120px',background :props.act ? " linear-gradient(263deg, rgba(16,27,154,1) 0%, rgba(27,97,205,1) 95%)" : "transparent" ,boxShadow :props.act? '1px -1px 10px 0px rgba(20,99,198,0.59)':'none'}
    const animationStyle ={whiteSpace : 'nowrap',transition: 'max-width 0.4s ease-out , opacity 0.6s',maxWidth : props.act ? '200px'  : 0 ,opacity :props.act ? 1 : 0 , overflow:props.act ? 'visible' : 'hidden'}
    return (
      <div className={['accAdcSideBarComp', props.primary ? 'primaryBackgroud':''].join(" ")} style={props.primary ? animationStylebackgroundPrimary  :animationStylebackground}>
          <div className='accardionHeaderAdc'>
              <div className='headerDivRowAccAdc'>
                  <div className={['accIconHeader' , 'backgroundSpecialStyleAcdAcc' , props.primary ? 'iconSelectionPrimaryacc':''].join(" ")}  style={{borderBottomLeftRadius : acc? 0 : '20px',borderBottomRightRadius : acc? 0 : '20px',marginBottom : acc ? '-5px':0 }}><div className='circleOnCieclAcdAcc'><FaLayerGroup/></div><IoMdSettings/></div>
                  <div className='labelHeaderAccAdc' style={animationStyle}><span>{props.label}</span></div>
              </div>
              <div className='panelAccAdc' style={{maxHeight : acc ? '200px' : '0',overflow:acc ? 'visible': 'hidden'}}>
                  <div className='accardionIconAdc' style={{opacity : acc ? '1' : '0' , transition:`opacity 0.4s`,backgroundColor:acc ? '':''}}>
                        <div  className='bannerDivAccAdc'>
                            <span>عنوان 1</span>
                        </div>
                          {props.option.map((element, index)=>{
                              return <div key={index} className={[ 'specialIconSetAdc','iconItemAccAdc', props.tab===index ? 'iconItemActive':'',props.primary ? 'iconSelectionPrimaryacc':'','ajustEveryAdcAcc',index===0?'ajustEveryAdcAccfirst':'',index === props.option.length-1 ? 'ajustEveryAdcAcclast' : ''].join(" ")}></div>
                          })}
                  </div>
                  <div style={animationStyle} className='accardionLabelAdc'>
  
                      {props.option.map((element, index)=>{
                          return <span className={['itemSpanLabelsAdc',props.tab ===index  ? 'itemActiveLabelAccAdc':''  ,'ajustEveryAdcAcc',index===0?'ajustEveryAdcAccfirst':''].join(" ")}>{element}</span>
                      })}
                  </div>
              </div>
              
                  <div onClick={()=>setAcc(!acc)} style={{opacity:props.act ? 1 :0 ,transition:'opacity 0.4s' }} className='accardionIndicatorAdc '>
                      <MdOutlineExpandMore/>
                  </div>
              </div>  
        </div>
  )
}

export default SpecialAcc