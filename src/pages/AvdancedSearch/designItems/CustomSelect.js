import React from 'react';
import './CustomSelect.css'
import Select, { NonceProvider } from 'react-select'
import { useMediaQuery } from 'react-responsive';
function CustomSelect(props) {
  
  const res700 = useMediaQuery({query :'(max-width : 700px)'});
  const res600 = useMediaQuery({query :'(max-width : 600px)'});
  const res500 = useMediaQuery({query :'(max-width : 500px)'});
  const customStyles = {
    control: (base, state) => ({
      ...base,
      /*borderColor: state.isFocused ? "yellow" : "green",
      "&:hover": {
        borderColor: state.isFocused ? "red" : "blue"
      }*/
      minHeight:res500?'23px' : res600?'27px' : res700?'31px':'30px',
      height:res500?'23px' :  res600?'27px' : res700?'31px':'31px',
      borderColor :"#2C3554",
      backgroundColor : '#2C3554',
      width:'110px',
      border:'none',
      "&:hover": {
        border:'none',
        borderColor: "#2C3554"
      },
      '&:focus':{
        border:'none',
        borderColor: "#2C3554"
      },
      "&:active":{ 
        border:'none',
        borderColor: "none"
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#838AA4',
      fontSize:res500?'8px' :res600?'9px' : res700?'10px':'10px',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: res500?'23px' :res600?'27px' :  res700?'33px':'32px',
      padding: '0 6px'
    }),
    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height:res500?'23px' :res600?'27px' :  res700?'33px': '32px',
    }),
    dropdownIndicator: base => ({
      ...base,
      fontSize:res600?'6px' : '8px',
      color: "#ffffffc8" ,
      "&:hover": {
        color: "#ffffffc8" 
      },
      paddingTop: 2,
      paddingBottom:2 ,
    }),
    clearIndicator: (styles) => ({
      ...styles,
      paddingTop: 2,
      paddingBottom: 2,
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      border:'none',
      // kill the gap
      marginTop: 0,
      fontSize:'12px',
      backgroundColor:'#3A4366'
    }),   
   
  };
  
  const options = props.options;
  return <div className='customSelectCatSelect' style={{width:`${props.width}px`}}>
     <Select classNamePrefix="select" className="selectUCatSearchS" options={options} value={props.value} onChange={(newVal)=>{props.change(props.id,newVal)}} styles={customStyles}
     components={{
        IndicatorSeparator: () => null
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6 ,
        borderColor:'#2C3554',
        height:'26px',
        colors: {
          ...theme.colors,
          primary25: '#2C3554',
          primary: '#2C3554',
        },
      })} 
      placeholder={<div className='DP_SelectPlaceHolder'>{props.placeholder}</div>} />
  </div>;
}

export default CustomSelect;
