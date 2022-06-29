import React , {useState} from 'react'
import './AvdancedSearch.css'
import {IoIosNotifications,IoIosSettings} from 'react-icons/io'
import {FaEnvelopeOpen} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdExpandMore} from 'react-icons/md'
import AvdancedSearch_BodyContent from './AdvancedSearch_BodyContent/AvdancedSearch_BodyContent'
import CustomSelect from './designItems/CustomSelect'

function AvdancedSearch() {
  const [LHActiveButton , setLHActiveButton] = useState(1)
  return (
    <div className='AvdancedSearch'>   
        <header className='AvdancedSearchTop1'>
            <nav className='adcNavBar'>
              <div className='notificationBarAdc'>
                <div className='fingerprintBoxAdc'></div>
                <div className='notifIconsetAdc'>
                  <div className='notifContainerTittAdc'><span>4</span></div>
                  <IoIosNotifications className="notifIconClasStyle"/>
                </div>
                <div className='notifIconsetAdc'>
                  <FaEnvelopeOpen className="notifIconClasStyle" style={{"fontSize":'17px'}}/>
                </div>
                <div className='notifIconsetAdc'>
                  <div className='shapesIconsAdcItem'></div>
                  <div className='shapesIconsAdcItem'></div>
                  <div className='shapesIconsAdcItem iconSetsomeAdc'></div>
                </div>
              </div>
              <div className='searchBarNavAdc'>
                <div className='divSearchbarNavAdc'>
                  <div className='searchIconNavAdc'><AiOutlineSearch/></div>
                  <input type={"search"} placeholder="جستجو کنید..."/>
                </div>
              </div>
              <div className='profileBarAdc'>
                <div className='profileboxAdc'>
                  <div className='avatarprofileAdc'><div><img alt='' src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'/></div></div>
                  <div className='infoprofileAdc'>
                    <h6>محمد سمیعی</h6>
                    <span>متن آزمایشی</span>
                  </div>
                  <div className='tagprofileAdc'><MdExpandMore/></div>
                </div>
              </div>
            </nav>
            <div className='tabsHeaderAdc'>
              <div className='settingIconAdcCo'>
                <div className='settingIconAdc'>
                  <div ><IoIosSettings/></div>
                  </div>
              </div>
              <div className='tabsContainerAdc'>
                <div className='tabstAdc'>
                  <div className='tabitemAdc' style={{borderColor:'#412849'}}>
                    <h5>educations</h5>
                  </div>
                  <div className='tabitemAdc' style={{borderColor:'#3C2060'}}>
                    <h5>educations</h5>
                  </div>
                  <div className='tabitemAdc' style={{borderColor:'#222E52'}}>
                    <h5>educations</h5>
                  </div>
                  <div className='tabitemAdc' style={{borderColor:'#1A3B53'}}>
                    <h5>educations</h5>
                  </div>
                  <div className='tabitemAdc' style={{borderColor:'#4D6662'}}>
                    <h5>educations</h5>
                  </div>
                  <div className='tabitemAdc' style={{borderColor:'#6A525A'}}>
                    <h5>educations</h5>
                  </div>
                </div>
                <div className='selectTabsAdc'>
                    <CustomSelect   
                    options={[{value:0,label:'موضوع'},{value:1,label:'سیاسی'},{value:1,label:'ورزشی'},{value:1,label:'اجتماعی'},{value:1,label:'فرهنگی'}]} 
                    placeholder={"انتخاب کنید..."} 
                    width={"120"}/>
                </div>
              </div>
            </div>
        </header>
        <div className='AvdancedSearchTop2'>
        </div>
        <div className='AvdancedSearchBody'>
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