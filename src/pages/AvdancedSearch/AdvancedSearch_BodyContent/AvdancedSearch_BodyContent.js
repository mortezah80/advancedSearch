import React from 'react'
import SearchInformationBox from '../../../components/SearchInformationBox/SearchInformationBox'
import AdvancedSearch_Pagination from './AdvancedSearch_Pagination'
import './AvdancedSearch_BodyContent.css'

function AvdancedSearch_BodyContent() {
  return (
    <div className='ASB_BottomLeft'>
        <div className='ASB_BLeft_Header'>
            <div className='ASB_BLeft_HeaderTexts'>
                <div className='ASB_BLeft_HeaderText1Container'>
                    <span className='ASB_BLeft_HeaderText1Normal'>مدیریت کلمات کلیدی</span>
                    <span className='ASB_BLeft_HeaderText1Color'>دسته بندی سیاسی</span>
                </div>
                <span className='ASB_BLeft_HeaderText2'>نمایش لیست و مدیریت کلمات کلیدی ثبت شده برای دسته بندی مورد نظر</span>
            </div>     

            <div className='ASB_BLeft_HeaderButton'>
                <span className='ASB_BLeft_HeaderButtonText'>افزودن کلمه کلیدی</span>
                <span className='ASB_BLeft_HeaderButtonTextPlus'>+</span>
            </div>
        </div>

        <div className='ASB_BLeft_Filters'>

        </div>

        <div className='ASB_BLeft_Pagination'>
            <AdvancedSearch_Pagination number={5}/>
        </div>

        <div className='ASB_BLeft_Feed'>
            <SearchInformationBox/>
            <SearchInformationBox/>
            <SearchInformationBox/>
            <SearchInformationBox/>
            <SearchInformationBox/>
            <SearchInformationBox/>
        </div>

    </div>
  )
}

export default AvdancedSearch_BodyContent