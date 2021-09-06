import { tomcat } from './hosts.js';
import {getDataFromSession} from '../../sessionManagment/session.js'

const BaseUrl =  tomcat ;


export const getPerson= (mycode, ticket, setPerson ,  setIsLoading =()=>{} , setMessage = ()=>{})=>{

   // setIsLoading(true);
   

     
    let myPromise = baseFetch("person", "get", mycode,{} ,getDataFromSession('wsticket'),setMessage)
    
    myPromise.then(result => resolvePerson(result, setPerson,setMessage))
    .catch(error=>reject(error , setMessage))
    .finally(() => { setIsLoading(false) });
}


export const getcardaccount= (cardpan, setdata ,  setIsLoading =()=>{} , setMessage = ()=>{})=>{

  // setIsLoading(true);
  

    
   let myPromise = baseFetch("cardaccount", "get", cardpan,{} ,getDataFromSession('wsticket'),setMessage)
   
   myPromise.then(result => resolve(result, setdata,setMessage))
   .catch(error=>reject(error , setMessage))
   .finally(() => { setIsLoading(false) });
}

export const callingpayRequestLog = (payrequestdetail , payResponseDetail  ,payrequestid,customerno ,nationcode ,  amount ,accountno,accounttype ,checkdigitaccountno,balance)=>{
 
  console.log("payResponseDetail" ,payResponseDetail)
  const payrequestLog = {};
  payrequestLog["payrequestdetail"] = payrequestdetail ; 
  payrequestLog["payresponsedetail"]  = typeof payResponseDetail === "object"  ?  JSON.stringify(payResponseDetail )  : payResponseDetail; 
  payrequestLog["date"]   = new Date()  ; 
  payrequestLog["customerno"]    = customerno ; 
  payrequestLog["nationcode"]     = nationcode ; 
  payrequestLog["amount"]      = amount.toString(); 
  payrequestLog["accountno"]      = accountno ; 
  payrequestLog["accounttype"]      = accounttype ; 
  payrequestLog["checkdigitaccountno"]       = checkdigitaccountno ; 
  payrequestLog["balance"]        = balance ; 
  payrequestLog["payrequestid"]        = payrequestid ; 

  payRequestLog(payrequestLog); 
}

 const payRequestLog= (body, setData=()=>{}, setIsLoading =()=>{} , setMessage = ()=>{})=>{

  // setIsLoading(true);
  

    
   let myPromise = baseFetch("payrequestlog", "post", "" ,body, "",setMessage)
   
   myPromise.then(result => resolve(result, setData,setMessage))
   .catch(error=>reject(error , setMessage))
   .finally(() => { setIsLoading(false) });
}







const baseFetch = (methodName = "", callingType = "get", param  = "", body ={},  ticket ,setMessage) => {


    console.log("param : " , param )
    console.log("body : " ,  JSON.stringify(body) )
    return  fetch(BaseUrl + "/" + methodName + "/" + param,
    
    Object.keys(body).length === 0 ?    {} : { body: JSON.stringify(body), method: 'POST',  headers: { 'Content-Type': 'application/json' } } 
    
    ).then(response => response.json())
    .catch((error) => {
      console.error('Error:', error);
      setMessage('  خطا در دریافت اطلاعات رخ داده است.')
    });
    



    
     
  
  }
  const resolve= (result, setData,setMessage)=>{
   
   if (result.status ){
     if (result.status.toString()[0] == "5" || result.status.toString()[0] == "4" ){
      reject('' ,setMessage )
      return
     }
    
   }
   
   
    setMessage('');
    setData(result);
    

    
  }

  const resolvePerson= (result, setData,setMessage)=>{
   
    if (result.status ){
      if (result.status.toString()[0] == "5" || result.status.toString()[0] == "4" ){
       reject('' ,setMessage )
       return
      }
     
    }
    if (result) {
      if (result.accountHolder) {
        
        result.accountHolder = (result.accountHolder || []).filter(item=>    !item.account.accountType.title.includes("کنترلی") &&
                                                                                 !item.account.accountType.title.includes("تسهيلات") && 
                                                                                 !item.account.accountType.title.includes("تخفيف") &&
                                                                                 !item.account.accountType.name.includes("Saving")  )
      }
    }
  
     setMessage('');
     setData(result);
     
 
     
   }


  
  const reject = (error , setMessage) => {

    console.log("error", error);
      setMessage('  خطا در دریافت اطلاعات رخ داده است.')
    
  }


   
  
