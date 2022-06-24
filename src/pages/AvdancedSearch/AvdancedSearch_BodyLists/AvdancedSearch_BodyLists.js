import React , {useState} from 'react'
import './AvdancedSearch_BodyLists.css'
import {BsBookmark ,BsBookmarkFill} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'

import {
    sortableContainer,
    sortableElement,
    sortableHandle,
  } from 'react-sortable-hoc';
import {arrayMoveImmutable ,arrayMoveMutable} from 'array-move';












const DragHandle = sortableHandle(() => <div className='AvdancedSearch_BodyListDragHandle'></div>);

const SortableItem = sortableElement(({title , bookmark,mycolor , number1 , number2}) => (
    
  <div className='AvdancedSearch_BodyList'>
    <div className='AvdancedSearch_BodyListRight'>
        <DragHandle />
        <div className='AvdancedSearch_BodyListFirstLetter' style={{backgroundColor:mycolor , boxShadow:`0px 0px 8px 0.001px ${mycolor} `}}>
            <span className='AvdancedSearch_BodyListFirstLetterSpan'>{title.slice(0,1)}</span>
        </div>
        <span className='AvdancedSearch_BodyListTitle'>دسته بندی {title}</span>
    </div>
    <div className='AvdancedSearch_BodyListLeft'>
        <div className='AvdancedSearch_BodyListLeftBox'><span className='AvdancedSearch_BodyListLeftBoxTitle'>{number1}</span></div>
        <div className='AvdancedSearch_BodyListLeftBox AvdancedSearch_BodyListLeftBox2'><span className='AvdancedSearch_BodyListLeftBoxTitle'>{number2}</span></div>
        <div className='AvdancedSearch_BodyListLeftBookmark'>
            {   
            
            !bookmark?
            <BsBookmark/>
            :
            <BsBookmarkFill/>
            }   
        </div>
      
    </div>
   
    
  </div>
));

const SortableContainer = sortableContainer(({children}) => {
  return (
  <div className='AvdancedSearch_BodyListsContainer'>{children}</div>
  );
});



function AvdancedSearch_BodyLists() {

    const handleAdd = () => {
        if (inputValue.length >0)
        {
            let tempitem = items;
            let tempadd = {
                title: inputValue,
                number1:0,
                number2:0,
                bookmark:false,
            }
    
            tempitem.push(tempadd);
    
            setInputValue("");
            setItems(tempitem);
            setAddList(false)
        }
       

    }

    const handleInput = (e) => {
        setInputValue(e.target.value)
        
    }


    const [addList , setAddList] = useState(false)
    const [inputValue , setInputValue] = useState("")
    const[items ,setItems] = useState(
        [
            {
                title:"سیاسی" ,
                number1: 2, 
                number2 : 15,
                bookmark:true
            }
            ,
            {
                title:"اجتماعی" ,
                number1: 12, 
                number2 : 5,
                bookmark:false
            }
            ,
            {
                title:"اقتصادی" ,
                number1: 5, 
                number2 : 7,
                bookmark: false
            }
            ,
            {
                title:"تست" ,
                number1: 2, 
                number2 : 5,
                bookmark:true
            }
            ,
            {
                title:"نمونه" ,
                number1: 2, 
                number2 : 5,
                bookmark:true
            }
     
        ]
    )


    const onSortEnd = ({oldIndex, newIndex}) => {
        
          setItems(arrayMoveImmutable(items, oldIndex, newIndex))
      };

  return (
    <div className='AvdancedSearch_BodyLists'>
        <div className='ASB_BLeft_Header AvdancedSearch_BodyLists_Header'>
            <div className='AvdancedSearch_BodyLists_HeaderInputContainer'>
                <input className='AvdancedSearch_BodyLists_HeaderInput' placeholder='جستجو ...'  />
                <div className='AvdancedSearch_BodyLists_HeaderInputIcon'>
                    <BiSearchAlt/>
                </div>
              
            </div>
        </div>
        <div className='AvdancedSearch_BodyListsAllExeptHeader'>
            <div className='AvdancedSearch_BodyLists_Addlist'>
                <div className='AvdancedSearch_BodyLists_AddlistTexts'>
                    <span className='AvdancedSearch_BodyLists_AddlistText1'>لیست دسته بندی ها</span>
                    <span className='AvdancedSearch_BodyLists_AddlistText2'>نمایش لیست دسته بندی های عمومی</span>
                </div>
                <div className='AvdancedSearch_BodyLists_AddlistButton'>
                    <span className='AvdancedSearch_BodyLists_AddlistButtonText' onClick={() => setAddList(!addList)}>افزودن دسته +</span>
                </div>
            </div>
            {
                addList ?
                <div className='SIBOX_InformationContainer1 SIBOX_InformationContainer1Margin AvdancedSearch_BodyListsAddExact'>
                    <input className='AvdancedSearch_BodyLists_HeaderInput' placeholder='وارد کنید ...'  value={inputValue} onChange={(e) => handleInput(e)}/>
                    <div className='SIBOX_InformationContainer1Button AvdancedSearch_BodyListsAddButtonImediate' onClick={() => handleAdd()}>
                        <span>اضافه کردن</span>
                    </div>
                </div>
                :
                <></>
            }
            
            <SortableContainer onSortEnd={onSortEnd} useDragHandle>
                {items.map((item , index) => {
                const stc = require('string-to-color');
                const mycolor = stc(item.title); // => "#7f1de4"
                return (
                <SortableItem key={`item-${item.title}`} index={index} title={item.title} bookmark={item.bookmark} number1={item.number1} number2={item.number2} mycolor={mycolor}/>
                )
                })}
        
            </SortableContainer>

        </div>
       
    </div>
  )
}

export default AvdancedSearch_BodyLists