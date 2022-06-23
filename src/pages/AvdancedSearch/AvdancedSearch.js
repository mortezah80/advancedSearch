import React from 'react'
import './AvdancedSearch.css'
import {IoIosNotifications,IoIosSettings} from 'react-icons/io'
import {FaEnvelopeOpen} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdExpandMore} from 'react-icons/md'
function AvdancedSearch() {
  return (
    <div className='AvdancedSearch'>
        <header className='AvdancedSearchTop1'>
            <nav className='adcNavBar'>
              <div className='notificationBarAdc'>
                <div className='fingerprintBoxAdc'></div>
                <div className='notifIconsetAdc'>
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
                  <div><IoIosSettings/></div>
                  </div>
              </div>
              <div className='tabsContainerAdc'>
                <div className='tabstAdc'></div>
                <div className='selectTabsAdc'></div>
              </div>
            </div>
        </header>
        <div className='AvdancedSearchTop2'>

        </div>
        <div className='AvdancedSearchBody'>
          
        </div>
      
    </div>
  )
}

export default AvdancedSearch