import React from 'react'
import './SideBarAdc.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {IoIosFingerPrint,IoIosSettings,IoMdSettings} from 'react-icons/io'
import AccardionSideBar from './AccardionSideBar'
import DasteBandiComponent from './DasteBandiComponent'
import TagSelecthash from './TagSelecthash'
function SideBarAdc(props) {
  return (
    <div className='sidebarAdcContainer'>
        <div className='sidebarTitleAdc'>
            <div className='sidebarIconAdc'><IoIosFingerPrint/></div>
            <div className='sidebarTitleLabeAdc'><span>عنوان داشبورد</span></div>
            <div className='sideBarCloseBtnAdc'><AiOutlineMenu/></div>
        </div>     
        <div className='settingBtnSideBarAdc'>
            <div className='settingIconAdc2'><IoIosSettings/></div>
            <div className='labelSettingAdcSideBar'><span>داشبورد اصلی</span></div>
        </div>
        <div className='accardionContainerSidebarAdc'>
            <AccardionSideBar option={['داشبورد کلمات' , 'مدیریت کلمات']} label="مدیریت کلمات کلیدی"/>
        </div>
        <div className='accardionContainerSidebarAdc'>
            <AccardionSideBar primary option={['داشبورد کلمات' , 'مدیریت کلمات','متن آزمایشی','متن آزمایشی 2']} label="مدیریت کلمات کلیدی"/>
        </div>
        <div className='categoryContainerAdc'>
            <div className='containerAdcWierd'>
                <span>دسته بندی های عمومی</span>
            </div>
            <DasteBandiComponent label={"سیاسی"}/>
            <DasteBandiComponent background="linear-gradient(263deg, rgba(22,203,72,1) 0%, rgba(61,64,107,0) 95%)" backgroundColor="#16CB48"  label={"فرهنگی"}/>
            <DasteBandiComponent background="linear-gradient(263deg, rgba(217,66,19,1) 0%, rgba(61,64,107,0) 98%)" backgroundColor="#F94301" label={"تست"}/>
        </div>
        <div className='tagSelecthashAdcSideBar'>
            <TagSelecthash active={1}/>
        </div>
    </div>
  )
}

export default SideBarAdc