import React, { useEffect, useState } from 'react';

const Currency = ({amount,includeRial = false , showNegetive = true}) => {

    
    const [num,setNum] = useState(amount);
    const [rial,setRial] = useState(includeRial);
    
    



    useEffect(()=>{
        setNum( CurrencyFunc(amount ,showNegetive ))
        
       

    },[amount]);


    
    
    
    return (
        
        <div style={{    display: 'flex',flexDirection: 'row',    whiteSpace: 'nowrap'}}>
          
            <div style={{    direction: 'ltr'}}>
                
                {num} 
            </div>
            {rial &&
            <div style={{    marginRight: '8px'}}>
            ریال
            </div>
            }
            
        </div>
    );
};
export const CurrencyFunc =(amount)=>{
   
    if(amount) {
        alert('aa')
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
    
}
export default Currency;