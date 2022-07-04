import React, { useState } from 'react'
import './SideBarAdc.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {IoIosFingerPrint,IoIosSettings,IoMdSettings} from 'react-icons/io'
import AccardionSideBar from './AccardionSideBar'
import DasteBandiComponent from './DasteBandiComponent'
import TagSelecthash from './TagSelecthash'
import './sidebarAdcRes.css'
import SpecialAcc from './SpecialAcc'
import CustomizedSwitches from '../AdvancedSearch_BodyContent/itemsetDesign/CustomCheck'
import { useMediaQuery } from 'react-responsive'
function SideBarAdc(props) {
  const [activeBar , setActive] = useState(1);
  const handeActive = (par)=>{
    
  }
  
  const res750= useMediaQuery({query :'(max-width : 1000px)'});
  const sliderAnimation = {transition: 'all 0.3s', zIndex:activeBar ?'500' :'1', maxWidth: activeBar  ? '250px' : '180px' ,backgroundColor : activeBar  ? '#181D37': 'transparent' }
  const animationStyle ={whiteSpace : 'nowrap' , transform : activeBar ? 'translate(0)':'translate(9999px)',transition: 'max-width 0.4s ease-out , opacity 0.6s',maxWidth : activeBar ? '210px'  : 0 ,opacity :activeBar ? 1 : 0 , overflow:activeBar ? 'visible' : 'hidden'}
  const animationStyleCircle ={whiteSpace : 'nowrap' ,transition: 'max-width 0.4s ease-out , opacity 0.6s',maxWidth : activeBar ? '210px'  : 0  , overflow:activeBar ? 'visible' : 'hidden'}
  return (
    <div className='sidebarAdcContainer'  onMouseLeave={()=>setActive(0)} style={sliderAnimation}>
        <div className='sidebarTitleAdc'>
            <div className='sidebarIconAdc' onMouseEnter={()=>setActive(1)}><IoIosFingerPrint/></div>
            <div className='sidebarTitleLabeAdc' style = {animationStyle}><span>عنوان داشبورد</span></div>
            <div className='sideBarCloseBtnAdc' style={{opacity : activeBar ? 1:0 , transition : 'all 0.5s' }} onClick={()=>setActive(!activeBar)}><AiOutlineMenu/></div>
        </div>     
        <div className='settingBtnSideBarAdc'>
            <div className='settingIconAdc2'><IoIosSettings/></div> 
            <div className='labelSettingAdcSideBar' style={animationStyle}><span>داشبورد اصلی</span></div>
        </div>
        <div className='scrollerDivSidebarAdc'>
        <div className='accardionContainerSidebarAdc' onMouseEnter={()=>setActive(1)}>
            <AccardionSideBar tab={0} primary act={activeBar} option={['داشبورد کلمات' , 'مدیریت کلمات']} label="مدیریت کلمات کلیدی"/>
        </div>
        <div className='accardionContainerSidebarAdc' onMouseEnter={()=>setActive(1)}>
            <AccardionSideBar tab={2} act={activeBar}  option={['داشبورد کلمات' , 'مدیریت کلمات','متن آزمایشی','متن آزمایشی 2']} label="مدیریت کلمات کلیدی"/>
        </div>
        <div >
            <SpecialAcc tab={2} act={activeBar}  option={['داشبورد کلمات' , 'مدیریت کلمات']} label="مدیریت کلمات کلیدی"/>
        </div>
        <div className='tagSelecthashAdcSideBar' style={{marginBottom : activeBar? '20px':'-60px',transition : 'all 0.4s'}}>
            <TagSelecthash act={activeBar} active={1}/>
        </div>
        <div className='categoryContainerAdc'>
            <div className='containerAdcWierd' style={animationStyle}>
                <span>دسته بندی های عمومی</span>
            </div>
            
            {!res750? <div className='defaultCircleAcd' style={{transition : 'all 0.4s' , opacity : activeBar ? 0:1, height : activeBar ? '-10px':'30px',marginTop : activeBar?'-30px': '0px'}}><span>عمومی</span></div>:''}
            <DasteBandiComponent act={activeBar} label={"سیاسی"}/>
            <DasteBandiComponent act={activeBar} background="linear-gradient(263deg, rgba(22,203,72,1) 0%, rgba(61,64,107,0) 95%)" backgroundColor="#16CB48"  label={"فرهنگی"}/>
            <DasteBandiComponent act={activeBar} background="linear-gradient(263deg, rgba(217,66,19,1) 0%, rgba(61,64,107,0) 98%)" backgroundColor="#F94301" label={"تست"}/>
        </div>
        <div className='categoryContainerAdc'>
            <div className='containerAdcWierd' style={animationStyle}>
                <span>دسته بندی های سیاسی</span>
            </div>
            {!res750? <div className='defaultCircleAcd' style={{transition : 'all 0.4s' , opacity : activeBar ? 0:1, height : activeBar ? '-10px':'30px',marginTop : activeBar?'-30px': '0px'}}><span>سیاسی</span></div>:''}
            <DasteBandiComponent act={activeBar} background="linear-gradient(263deg, rgba(22,203,72,1) 0%, rgba(61,64,107,0) 95%)" backgroundColor="#16CB48"  label={"فرهنگی"}/>
            <DasteBandiComponent act={activeBar} background="linear-gradient(263deg, rgba(217,66,19,1) 0%, rgba(61,64,107,0) 98%)" backgroundColor="#F94301" label={"تست"}/>
        </div>
        
        </div>
    </div>
  )
}

export default SideBarAdc