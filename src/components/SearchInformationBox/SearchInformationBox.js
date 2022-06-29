import React , {useState} from 'react'
import './SearchInformationBox.css'
import {FaChevronDown,FaChevronUp} from 'react-icons/fa'

function SearchInformationBox() {
    const [show , setShow] = useState(true)
  return (
    <div className='SearchInformationBox' style={{height: show ? "auto" : "420px" , paddingBottom:show? "20px" : "4px"}}>
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

        <div className='SIBOX_OpenCloseContainerExact' style={{display: show? "flex" :"none"}}>


            <div className='SIBOX_InformationContainer3'>
                <div className='SIBOX_InformationContainer3ItemContainer'>
                    <span className='SIBOX_InformationContainer3Itemtitle'>دقیقا شامل</span>
                    <div className='SIBOX_InformationContainer3ItemInformation'>
                        <span className='SIBOX_InformationContainer3ItemInformationNumber'>12</span>
                        <span className='SIBOX_InformationContainer3ItemInformationWord'>کلمه</span>
                    </div>
                </div>

                <div className='SIBOX_InformationContainer3ItemContainer'>
                    <span className='SIBOX_InformationContainer3Itemtitle'>شامل هر کدام از</span>
                    <div className='SIBOX_InformationContainer3ItemInformation'>
                        <span className='SIBOX_InformationContainer3ItemInformationNumber'>0</span>
                        <span className='SIBOX_InformationContainer3ItemInformationWord'>کلمه</span>
                    </div>
                </div>

                <div className='SIBOX_InformationContainer3ItemContainer'>
                    <span className='SIBOX_InformationContainer3Itemtitle'>هیچ کدام از</span>
                    <div className='SIBOX_InformationContainer3ItemInformation'>
                        <span className='SIBOX_InformationContainer3ItemInformationNumber'>12</span>
                        <span className='SIBOX_InformationContainer3ItemInformationWord'>کلمه</span>
                    </div>
                </div>
            </div>


            <div className='SIBOX_InformationContainer1 SIBOX_InformationContainer1Margin'>
                <span className='SIBOX_InformationContainer1Text'>محدودسازی جستجو بر اساس تصویر</span>
                <div className='SIBOX_InformationContainer1Button'>
                    <span>فعال</span>
                </div>
            </div>
            <div className='SIBOX_InformationContainer1'>
                <span className='SIBOX_InformationContainer1Text'>فیلتر احساسات </span>
                <div className='SIBOX_InformationContainer1Button'>
                    <span>مثبت</span>
                </div>
            </div>
            

            <div className='SIBOX_InformationContainer4'>
                <span className='SIBOX_InformationContainer4Title'>فیلتر نوع رفتار کاربری :</span>
                <div className='SIBOX_InformationContainer4Items'>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>امید</span></div>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>ناراحتی</span></div>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>دستوری</span></div>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>پرسشی</span></div>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>تعجب</span></div>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>اعتماد و اطمینان</span></div>
                </div>
            </div>


            <div className='SIBOX_InformationContainer4'>
                <span className='SIBOX_InformationContainer4Title'>فیلتر دسته بندی :</span>
                <div className='SIBOX_InformationContainer4Items'>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>امید</span></div>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>ناراحتی</span></div>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>دستوری</span></div>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>پرسشی</span></div>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>تعجب</span></div>
                    <div className='SIBOX_InformationContainer4Item'><span className='SIBOX_InformationContainer4ItemText'>اعتماد و اطمینان</span></div>
                </div>
            </div>

            
            <div className='SIBOX_InformationContainer3'>
                <div className='SIBOX_InformationContainer3ItemContainer'>
                    <span className='SIBOX_InformationContainer3Itemtitle'>دقیقا شامل</span>
                    <div className='SIBOX_InformationContainer3ItemInformation'>
                        <span className='SIBOX_InformationContainer3ItemInformationNumber'>12</span>
                        <span className='SIBOX_InformationContainer3ItemInformationWord'>موجودیت</span>
                    </div>
                </div>

                <div className='SIBOX_InformationContainer3ItemContainer'>
                    <span className='SIBOX_InformationContainer3Itemtitle'>شامل هر کدام</span>
                    <div className='SIBOX_InformationContainer3ItemInformation'>
                        <span className='SIBOX_InformationContainer3ItemInformationNumber'>0</span>
                        <span className='SIBOX_InformationContainer3ItemInformationWord'>موجودیت</span>
                    </div>
                </div>

                <div className='SIBOX_InformationContainer3ItemContainer'>
                    <span className='SIBOX_InformationContainer3Itemtitle'>هیچ کدام</span>
                    <div className='SIBOX_InformationContainer3ItemInformation'>
                        <span className='SIBOX_InformationContainer3ItemInformationNumber'>12</span>
                        <span className='SIBOX_InformationContainer3ItemInformationWord'>موجودیت</span>
                    </div>
                </div>
            </div>




        </div>


        <div className='SIBOX_OpenCloseContainer'>
            <div className='SIBOX_OpenCloseTextContainer'>
                <span className='SIBOX_OpenCloseText'>نمایش محتوا</span>
            </div>  
            <div className='SIBOX_OpenCloseIconContainer' onClick={() => setShow(!show)}>
                {
                    show ?
                    <div className='SIBOX_OpenCloseIcon'>
                        <FaChevronUp/>
                    </div>
              
                    :
                    <div className='SIBOX_OpenCloseIcon'>
                        <FaChevronDown/>
                    </div>
                }
                
            </div>
        </div>


 
    </div>
  )
}

export default SearchInformationBox