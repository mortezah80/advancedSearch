import React , {useState} from 'react'
import './AvdancedSearch.css'
import AvdancedSearch_BodyContent from './AdvancedSearch_BodyContent/AvdancedSearch_BodyContent'

function AvdancedSearch() {
  const [LHActiveButton , setLHActiveButton] = useState(1)
  return (
    <div className='AvdancedSearch'>
        <div className='AvdancedSearchTop1'>
  
        </div>
        <div className='AvdancedSearchTop2'>

        </div>
        <div className='AvdancedSearchBody'>
            <div className='AvdancedSearchBodyjustfornothing'>

            </div>
            <div className='AvdancedSearchBodyAbs'>
                <div className='AvdancedSearchBody_Top'>

                    <div className='ASB_TopRight'>
                        <div className='ASB_TopRightIcon'>

                        </div>
                        <div className='ASB_TopRightTexts'>
                            <span className='ASB_TopRightText1'>جست و جوی پیشرفته</span>
                            <span className='ASB_TopRightText2'>جست و جوی پیشرفته محتوا در مرکز داده های مجازی</span>
                        </div>
                       
                    </div>


                    <div className='ASB_TopLeft'>
                        <div className='LinksHeaderButtonDescribeContainer'>
                            <div className={['LinksHeaderButtonContainer' , LHActiveButton===1? 'LinksHeaderButtonActive LinksHeaderButtonActive1' : ''].join(' ')} onClick={() => setLHActiveButton(1)}>
                                <div className='LinksHeaderButton LinksHeaderButtonContainer1'>
                                    <span>سلام</span>
                                </div>
                            </div>
                            <span className='LinksHeaderButtonDescribe'>نشانگاه</span>
                        </div>
                        <div className='LinksHeaderButtonDescribeContainer'>
                            <div className={['LinksHeaderButtonContainer' , LHActiveButton===2? 'LinksHeaderButtonActive LinksHeaderButtonActive2' : ''].join(' ')} onClick={() => setLHActiveButton(2)}>
                                <div className='LinksHeaderButton LinksHeaderButtonContainer2'> 
                                    <span>خدافظی</span>
                                </div>
                            </div>
                            <span className='LinksHeaderButtonDescribe'>کلمه کلیدی </span>
                        </div>
                        <div className='LinksHeaderButtonDescribeContainer'>
                            <div className={['LinksHeaderButtonContainer' , LHActiveButton===3? 'LinksHeaderButtonActive LinksHeaderButtonActive3' : ''].join(' ')} onClick={() => setLHActiveButton(3)}>
                                <div className='LinksHeaderButton LinksHeaderButtonContainer3'>
                                    <span>مهربانی</span>
                                </div>
                                
                            </div>
                            <span className='LinksHeaderButtonDescribe'>جستجو </span>
                        </div>
                    </div>

                   

                </div>
                <div className='AvdancedSearchBody_Bottom'>
                    <div className='ASB_BottomRight'>

                    </div>

                    <AvdancedSearch_BodyContent/>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AvdancedSearch