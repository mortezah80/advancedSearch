import React from 'react'
import './styles.css'
import {BiSearchAlt} from 'react-icons/bi'
function SearchBar(props) {
  return (
    <div className='searchBarItemsAdc'>
        <div className='searchIconBoxAdc'><BiSearchAlt/></div>
        <input type={"search"} placeholder="جستجو..."/>
    </div>
  )
}

export default SearchBar