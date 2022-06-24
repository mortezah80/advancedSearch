import React , {useState} from 'react'
import './AvdancedSearch_BodyLists.css'
import {BsBookmark ,BsBookmarkFill} from 'react-icons/bs'

import {
    sortableContainer,
    sortableElement,
    sortableHandle,
  } from 'react-sortable-hoc';
import {arrayMoveImmutable} from 'array-move';

const DragHandle = sortableHandle(() => <div className='AvdancedSearch_BodyListDragHandle'></div>);

const SortableItem = sortableElement(({value , bookmark}) => (
  <div className='AvdancedSearch_BodyList'>
    <div className='AvdancedSearch_BodyListRight'>
        <DragHandle />
        <div className='AvdancedSearch_BodyListFirstLetter'>

        </div>
        <span className='AvdancedSearch_BodyListTitle'>دسته بندی سیاسی</span>
    </div>
    <div className='AvdancedSearch_BodyListLeft'>
        <div className='AvdancedSearch_BodyListLeftBox'><span className='AvdancedSearch_BodyListLeftBoxTitle'>12</span></div>
        <div className='AvdancedSearch_BodyListLeftBox AvdancedSearch_BodyListLeftBox2'><span className='AvdancedSearch_BodyListLeftBoxTitle'>12</span></div>
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
    const[items ,setItems] = useState(
        ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    )


    const onSortEnd = ({oldIndex, newIndex}) => {
        
          setItems(arrayMoveImmutable(items, oldIndex, newIndex))
      };

  return (
    <div className='AvdancedSearch_BodyLists'>

        <SortableContainer onSortEnd={onSortEnd} useDragHandle>
            {items.map((value, index) => (
            <SortableItem key={`item-${value}`} index={index} value={value} bookmark={true} />
            ))}
        </SortableContainer>

    </div>
  )
}

export default AvdancedSearch_BodyLists