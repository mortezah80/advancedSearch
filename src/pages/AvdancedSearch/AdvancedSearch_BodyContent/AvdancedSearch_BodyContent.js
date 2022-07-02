import React, { useState } from 'react'
import SearchInformationBox from '../../../components/SearchInformationBox/SearchInformationBox'
import AdvancedSearch_Filters from './AdvancedSearch_Filters'
import AdvancedSearch_Pagination from './AdvancedSearch_Pagination'
import './AvdancedSearch_BodyContent.css'
import './AdvancedSearchItemsRess.css'
import Select from 'react-select';
import SelectCo from './itemsetDesign/SelectCo';
import SelectCoPrimary from './itemsetDesign/SelectCoPrimary';
import SearchBar from './itemsetDesign/SearchBar';
import CustomSwitch from './itemsetDesign/CustomSwitch';
import CustomizedSwitches from './itemsetDesign/CustomCheck';
import {HiMenu} from 'react-icons/hi'
import { useMediaQuery } from 'react-responsive'

function AvdancedSearch_BodyContent(props) {
    const [filterSort , setFilterSort] = useState(1);
    const setVal = (val)=>{
      setFilterSort(val);
    }
    
    const res700 = useMediaQuery({query :'(max-width : 700px)'});
    const res500 = useMediaQuery({query :'(max-width : 550px)'});
    const res400 = useMediaQuery({query :'(max-width : 470px)'});
  return (
    <div className='ASB_BottomLeft'>
        <div className='ASB_BLeft_Header'>
            <div className='ASB_BLeft_HeaderHimenu' onClick={() => props.handleDrawer()}>
                <HiMenu/>
            </div>
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
            {!res500 ? <div>
                <SelectCoPrimary width={res700 ? '60px':"80px"} placeholder="موضوع"/>
                <SelectCo width={res700 ? '60px':"80px"} placeholder="موضوع"/>
                <SearchBar/>
            </div>:<div className='responsiveRowAdcSearhItems'>
                <div>
                    <SelectCoPrimary width={res700 ? '60px':"80px"} placeholder="موضوع"/>
                    <SelectCo width={res700 ? '60px':"80px"} placeholder="موضوع"/>
                    {!res400 ? <div className='othersContainerResAdcItem'>
                        <div className='deleteFilterBtn'><span>حذف فیلتر</span></div>
                        <div className='checkContainerFiltersAdc'>
                            <div className='lableSwitchFiltersAdc'><span>نمایش موارد حذف شده:</span></div>
                        <div className='checkBoxAdc'><CustomizedSwitches/></div>
                        </div>
                    </div> :''}
                </div>
                <div>
                    <SearchBar/>
                </div>
            </div>}
            
            {!res500 ? <div style={{marginTop:'6px'}}>
                <div className='deleteFilterBtn'><span>حذف فیلتر</span></div>
                <div className='checkContainerFiltersAdc'>
                    <div className='lableSwitchFiltersAdc'><span>نمایش موارد حذف شده:</span></div>
                    <div className='checkBoxAdc'><CustomizedSwitches/></div>
                </div>
                <div className='switchContainerFiltersAdc'>
                    <div className='lableSwitchFiltersAdc'><span> ترتیب نمایش : </span></div>
                    <CustomSwitch setVal={setVal} active={filterSort}/>
                </div>
            </div>
            :
            <div className='resAdcItemsRow2' style={{marginTop:'6px'}}>
                <div className='switchContainerFiltersAdc'>
                    <div className='lableSwitchFiltersAdc responsivlabelShowAdc'><span> ترتیب نمایش : </span></div>
                    <CustomSwitch setVal={setVal} active={filterSort}/>
                </div>
            </div>}
            {res400 ? <div className='othersContainerResAdcItem'>
                        <div className='deleteFilterBtn'><span>حذف فیلتر</span></div>
                        <div className='checkContainerFiltersAdc'>
                            <div className='lableSwitchFiltersAdc'><span>نمایش موارد حذف شده:</span></div>
                        <div className='checkBoxAdc'><CustomizedSwitches/></div>
                        </div>
                    </div>:''}
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