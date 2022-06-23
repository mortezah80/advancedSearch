import React from 'react'
import './SearchInformationBox.css'

function SearchInformationBox() {
  return (
    <div className='SearchInformationBox'>
        <div className='SIBOX_TitleContainer'>
            <span className='SIBOX_Title'>نام فارسی</span>
        </div>
        <div className='SIBOX_DescriptionContainer'>
            <span className='SIBOX_Description'>این یک متن تست است که ببینیم در سه خط چگونه خواهد بود .میتوانیم بررسی کنیم که چگونه خواهد بود.امروز صبح زیباست و میتوانیم بیرون برویم</span>
        </div>
        <div className='SIBOX_buttons'>
            <div className='SIBOX_buttonEdit'>
                <span className='SIBOX_buttonEditText'>ویرایش</span>
            </div>
            <div className='SIBOX_buttonDelete'>
                <span className='SIBOX_buttonDeleteText'>حذف</span>
            </div>
        
        </div>
        <div className='SIBOX_InformationContainer1 SIBOX_InformationContainer1Margin'>
            <span className='SIBOX_InformationContainer1Text'>مرتب سازی :</span>
            <div className='SIBOX_InformationContainer1Button'>
                <span>جدیدترین</span>
            </div>
        </div>
        <div className='SIBOX_InformationContainer1'>
            <span className='SIBOX_InformationContainer1Text'>بازه زمانی :</span>
            <div className='SIBOX_InformationContainer1Button SIBOX_InformationContainer1Button2'>
                <span>4</span>
                <span>هفته</span>
            </div>
        </div>

        <div className='SIBOX_InformationContainer1'>
            <span className='SIBOX_InformationContainer1Text'>از تاریخ تا تاریخ :</span>
            <div className='SIBOX_DateButtons'>
                <div className='SIBOX_DateButton'>
                    <span className='SIBOX_DateButtonText'>از تاریخ :</span>
                    <span className='SIBOX_DateButtonText'>1401/3/20</span>
                </div>
                <div className='SIBOX_DateButton'>
                    <span className='SIBOX_DateButtonText'>تا تاریخ :</span>
                    <span className='SIBOX_DateButtonText'>1401/3/30</span>
                </div>
            </div>
        </div>
        
        <div className='SIBOX_InformationContainer2'>
            <span className='SIBOX_InformationContainer2Title'>فیلتر های بستر داده</span>
            <div className='SIBOX_InformationContainer2Buttons'>
                <div className='SIBOX_InformationContainer2Button SIBOX_InformationContainer2ButtonInstagram'><span>اینستاگرام</span></div>
                <div className='SIBOX_InformationContainer2Button SIBOX_InformationContainer2ButtonTelegram'><span>تلگرام</span></div>
                <div className='SIBOX_InformationContainer2Button SIBOX_InformationContainer2ButtonTwitter'><span>توییتر</span></div>
                <div className='SIBOX_InformationContainer2Button SIBOX_InformationContainer2ButtonRss'><span>RSS</span></div>
                <div className='SIBOX_InformationContainer2Button SIBOX_InformationContainer2ButtonNewspaper'><span>روزنامه</span></div>
            </div>

        </div>
    </div>
  )
}

export default SearchInformationBox