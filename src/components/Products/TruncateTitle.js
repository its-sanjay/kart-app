import React, { useState } from 'react'

const TruncateTitle = ({title,maxLength}) => {
    const[show,setShow]=useState(false);
    const text=title.length>maxLength ? title.slice(0,maxLength)+'...':title;
    const showMore=()=>{
        setShow(!show);
    }
  return (
    <>
    
    <div>{show?title:text}<span style={{color:'blue',cursor:'pointer'}} onClick={showMore}> {show ? 
    ' Less ':' See More '} </span></div>
    </>
  )
}

export default TruncateTitle