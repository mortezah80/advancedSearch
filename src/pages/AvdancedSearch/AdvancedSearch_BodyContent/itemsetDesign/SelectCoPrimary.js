import React from 'react'
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive';
function SelectCoPrimary(props) {
    const res700 = useMediaQuery({query :'(max-width : 700px)'});
  const res600 = useMediaQuery({query :'(max-width : 600px)'});
  const res500 = useMediaQuery({query :'(max-width : 500px)'});
  const customStyles = {
    control: (base, state) => ({
      ...base,    
      minHeight:res500?'26px' : res600?'27px' : res700?'29px':'29px',
      height:res500?'26px' :  res600?'27px' : res700?'29px':'20px',
      borderColor :"#017CF0",
      backgroundColor : '#017CF0',
      
      border:'none',
      "&:hover": {
        border:'none',
        borderColor: "#017CF0"
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
      color: '#ffffff',
      
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
      width:res500  ? '30px':'30px',
      borderBottomLeftRadius:6,
      fontSize : res500 ? '8px':'',
      backgroundColor:'#0465D0',
      height:res500?'26px' :res600?'27px' :  res700?'29px': '29px',
    }),
    dropdownIndicator: base => ({
      ...base,
      fontSize:res600?'6px' : '8px',
      color: "#ffffffc8" ,
      "&:hover": {
        color: "#ffffffc8" 
      },
      borderRadius:6,
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
      borderRadius: 6,
      border:'none',
      // kill the gap
      marginTop: 0,
      fontSize:'12px',
      backgroundColor:'#0969c3'
    }),   
   
  };
  
  return (
    <Select
    styles={customStyles}
    className="basic-single"
    classNamePrefix="select"
    isRtl={true}
    defaultValue={0}
    placeholder={<div style={{fontSize:res500 ? '8px':'10px',color:'white'}}>{props.placeholder}</div>}
    isSearchable={true}
    name="color"
    theme={(theme) => ({
        ...theme,
        borderRadius:6,
        borderColor:'#017CF0',
        height:'27px',
        colors: {
          ...theme.colors,
          primary25: '#017CF0',
          primary: '#0969c3',
        },
      })} 
    options={[{value:0,label:'موضوع'},{value:1,label:'سیاسی'},{value:2,label:'اقتصادی'}]}
    />
  )
}

export default SelectCoPrimary