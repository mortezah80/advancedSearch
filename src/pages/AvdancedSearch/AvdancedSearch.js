import React , {useState} from 'react'
import './AvdancedSearch.css'
import AvdancedSearch_BodyContent from './AdvancedSearch_BodyContent/AvdancedSearch_BodyContent'
import AvdancedSearch_BodyLists from './AvdancedSearch_BodyLists/AvdancedSearch_BodyLists'
import LogoImg from '../../Logo.png'

import Drawer from '@mui/material/Drawer';

function AvdancedSearch() {
    
    const [toggleList , setToggleList] = useState(1)


    const handleDrawer = () => {
        setDP_DrawerB (true)
    }


  const [DP_DrawerB,setDP_DrawerB] = useState(true)
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
                            <img src = {LogoImg} alt="logo" />
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
                        <div className='ASB_BottomRightToggle'>
                            <div className='ASB_BottomRightToggle1'>
                                <div className={['ASB_BottomRightToggle1Abs' , toggleList===1 ? "ASB_BottomRightToggleAbs1Select" : "" ].join(" ")}  onClick={() => setToggleList(1)}>
                                    <div className='ASB_BottomRightToggleText'>
                                        <span>تایتل اول</span>
                                    </div>
                                </div>
                                <div className={['ASB_BottomRightToggle1More' , toggleList===1? "ASB_BottomRightToggleMore1Select" : ""].join(" ")}>

                                </div>
                            </div>
                            <div className='ASB_BottomRightToggle2'>
                                <div className={['ASB_BottomRightToggle2Abs' , toggleList===2 ? "ASB_BottomRightToggleAbs2Select" : "" ].join(" ")} onClick={() => setToggleList(2)}>
                                    <div className='ASB_BottomRightToggleText'>
                                        <span>تایتل دوم</span>
                                    </div>
                                  
                                </div>
                                <div className='ASB_BottomRightToggle2More'>
                                    
                                </div>
                                <div className='ASB_BottomRightToggle2MoreBottom'>

                                </div>
                            </div>

                            <div className='ASB_BottomRightToggle3'>
                                <div className={['ASB_BottomRightToggle3Abs' , toggleList===3 ? "ASB_BottomRightToggleAbs2Select" : "" ].join(" ")} onClick={() => setToggleList(3)}>
                                    <div className='ASB_BottomRightToggleText'>
                                        <span>تایتل سوم</span>
                                    </div>
                                </div>
                                <div className='ASB_BottomRightToggle3More'>

                                </div>
                            </div>
                        </div>
                        <div className='ASB_BottomRightContent'>
                            <AvdancedSearch_BodyLists/>
                        </div>
                        
                    </div>

                    <AvdancedSearch_BodyContent handleDrawer={handleDrawer}/>

                </div>
                
                
            </div>
        </div>
        <Drawer   className="AdvancedSearch_Drawer" anchor={'right'} open={DP_DrawerB} onClose={() => setDP_DrawerB(false)} >
            <div className='ASB_BottomRight ASB_BottomRightDrawer'>
                <div className='ASB_BottomRightToggle ASB_BottomRightToggleDrawer'>
                    <div className='ASB_BottomRightToggle1'>
                        <div className={['ASB_BottomRightToggle1Abs' , toggleList===1 ? "ASB_BottomRightToggleAbs1Select" : "" ].join(" ")}  onClick={() => setToggleList(1)}>
                            <div className='ASB_BottomRightToggleText'>
                                <span>تایتل اول</span>
                            </div>
                        </div>
                        <div className={['ASB_BottomRightToggle1More' , toggleList===1? "ASB_BottomRightToggleMore1Select" : ""].join(" ")}>

                        </div>
                    </div>
                    <div className='ASB_BottomRightToggle2'>
                        <div className={['ASB_BottomRightToggle2Abs' , toggleList===2 ? "ASB_BottomRightToggleAbs2Select" : "" ].join(" ")} onClick={() => setToggleList(2)}>
                            <div className='ASB_BottomRightToggleText'>
                                <span>تایتل دوم</span>
                            </div>
                            
                        </div>
                        <div className='ASB_BottomRightToggle2More'>
                            
                        </div>
                        <div className='ASB_BottomRightToggle2MoreBottom'>

                        </div>
                    </div>

                    <div className='ASB_BottomRightToggle3'>
                        <div className={['ASB_BottomRightToggle3Abs' , toggleList===3 ? "ASB_BottomRightToggleAbs2Select" : "" ].join(" ")} onClick={() => setToggleList(3)}>
                            <div className='ASB_BottomRightToggleText'>
                                <span>تایتل سوم</span>
                            </div>
                        </div>
                        <div className='ASB_BottomRightToggle3More'>

                        </div>
                    </div>
                </div>
                <div className='ASB_BottomRightContent'>
                    <AvdancedSearch_BodyLists/>
                </div>
                
            </div>
        </Drawer>
    </div>
  )
}

export default AvdancedSearch