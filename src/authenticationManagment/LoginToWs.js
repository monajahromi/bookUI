import React,{useContext} from 'react';
import WebServiseTicketContext from "./../Context/WebServiseTicketContext";
import axios from 'axios'
import { gateway } from '../component/API/hosts';

const LoginToWs = () => {
  const ticketContext  = useContext(WebServiseTicketContext) ; 
        
        console.log("----------------------LoginToWs")  ;
        
        axios.create().post(gateway+ "?password=hY5GDjzhd8hiBdLx&username=carduser&domainName=centralized&appName=security&method=login",
  
        ).then(res => {
          console.log("----------------------Getticket WS Response ", JSON.stringify(res))  
         // console.log("----------------------TicketContext ", JSON.stringify(TicketContext))  
          ticketContext.setWsticket( res.data.ticket)
         // TicketContext.value= res.data.ticket  ; 
  
        }).catch(error =>    console.error('Error---------------------- In Getticket WS Response :', error))
      
        return (
                <div>LoginToWs</div>
      
        )
  
    
};

export default LoginToWs;