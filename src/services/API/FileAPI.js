import { gateway } from './hosts.js';
import {getDataFromSession} from '../../sessionManagment/session.js'




const BaseUrl =  gateway +"?pattern=PayaRest";

export const getFileDetail= (masterId,  setList ,  setIsLoading =()=>{} , setMessage = ()=>{})=>{
     setIsLoading(true);
   
      let param =[{masterId : masterId}]
  
       
      let myPromise = baseFetch("searchGroupDetailReport",param)
      
      myPromise.then(result => resolveFileDetail(result, setList,setMessage))
      .catch(error=>reject(error , setMessage))
      .finally(() => { setIsLoading(false) });
  }

export const getFileList= ( setList ,  setIsLoading =()=>{} , setMessage = ()=>{})=>{
  
  setIsLoading(true);
 
  let param =['']
     
    let myPromise = baseFetch("searchGroupMasterReport" ,  param )
    
    myPromise.then(result => resolve(result, setList,setMessage))
    .catch(error=>reject(error , setMessage))
    .finally(() => { setIsLoading(false) });
}



const baseFetch = (methodName = "", param, callingType = "post"  ) => {



    return  fetch(BaseUrl + "&ticket=" + getDataFromSession('wsticket') + "&MethodName=" + methodName, {
      method: callingType,
      body :JSON.stringify(param),
      headers: {
         'Content-Type': 'application/json',
        
      }
    }).then(response =>{console.log("response : ", response) ; return response.json()})
   
  
  }
  const resolveFileDetail = (result, setList,setMessage) => {

    setList(result.Response.ANSWER.List[0]);
    setMessage()

    
  }
  const resolve = (result, setList,setMessage) => {

    let list = result.Response.ANSWER.List.map((element,index) => {

      element.rownum = index+1 ; 
      element.open = false ; 
      return element ; 
    });
   setList(list);
    setMessage()


  }
  
  const reject = (error , setMessage) => {

    console.log("error", error);
      setMessage('  خطا در دریافت اطلاعات رخ داده است.')
    
  }


   
  
