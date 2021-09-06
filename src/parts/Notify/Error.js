import React, { useEffect, useState } from 'react';

const Error = (prop) => {
    const [msg, setMsg] = useState(prop.value);
    // useEffect(()=>{
    //     console.log("outerMessage changed : "+outerMessage)
    // },[])
        
    useEffect(() => {
        setMsg(prop.value);
      }, [prop]); 
    
    return (
        <div>
            {msg}
        </div>
    );
};

export default Error;