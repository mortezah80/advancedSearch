import React from 'react'
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive';
function SelectCo(props) {
    const res700 = useMediaQuery({query :'(max-width : 700px)'});
  const res600 = useMediaQuery({query :'(max-width : 600px)'});
  const res500 = useMediaQuery({query :'(max-width : 500px)'});
  const customStyles = {
    control: (base, state) => ({
      ...base,    
      minHeight:res500?'26px' : res600?'27px' : res700?'29px':'29px',
      height:res500?'26px' :  res600?'27px' : res700?'29px':'20px',
      borderColor :"#E6E9F0",
      backgroundColor : '#E6E9F0',
      
      border:'none',
      "&:hover": {
        border:'none',
        borderColor: "#E6E9F0"
      },
      '&:focus':{
        border:'none',
        borderColor: "#E6E9F0"
      },
      "&:active":{ 
        border:'none',
        borderColor: "none"
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#4f4f67',
      textAlign:'right',
      fontSize:res500?'8px' :res600?'9px' : res700?'10px':'10px',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      width:props.width,
      height: res500?'26px' :res600?'27px' :  res700?'29px':'29px',
      padding: '0 6px'
    }),
    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      borderTopLeftRadius:6,
      width:'30px',
      borderBottomLeftRadius:6,
      backgroundColor:'#E6E9F0',
      height:res500?'26px' :res600?'27px' :  res700?'29px': '29px',
    }),
    dropdownIndicator: base => ({
      ...base,
      fontSize:res600?'6px' : '8px',
      color: "#7B7C8D" ,
      "&:hover": {
        color: "#7B7C8D" 
      },
      borderRadius:7,
      paddingTop: 0,
      paddingBottom:0 ,
    }),
    clearIndicator: (styles) => ({
      ...styles,   
      fontSize:'0', 
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 7,
      border:'none',
      // kill the gap
      marginTop: 0,
      fontSize:'12px',
      backgroundColor:'#f3f4f5'
    }),   
   
  };
  
  return (
    <Select
    styles={customStyles}
    className="basic-single"
    classNamePrefix="select"
    isRtl={true}
    defaultValue={0}
    placeholder={<div style={{fontSize:'10px',color:'white'}}>{props.placeholder}</div>}
    isSearchable={true}
    name="color"
    theme={(theme) => ({
        ...theme,
        borderRadius: 6  ,
        borderColor:'#E6E9F0',
        border:'none',
        height:'27px',
        colors: {
          ...theme.colors,
          primary25: '#E6E9F0',
          primary: '#a1a2a7',
        },
      })} 
    options={[{value:0,label:'موضوع'},{value:1,label:'سیاسی'},{value:2,label:'اقتصادی'}]}
    />
  )
}

export default SelectCo