
export const bookList = ( setBookList, setIsLoading, setMessage) => {

    setIsLoading(true);
   
    let promise = baseFetch("books", "get")
  
  
    promise.then(result => resolve(result, setBookList, setMessage))
           .catch(error => reject(error, setMessage))
           .finally(() =>  setIsLoading(false) );
  }
  



const resolve = (result, setData, setMessage) => {


    if (result.status ){
        if (result.status.toString() != "200" ){
         reject(result.status ,setMessage )
         return
        }
       
      }
      
       setMessage('');
       setData(result);
   
  
    }
 
  
  
 
  
  const reject = (error, setMessage) => {
    
    setMessage(error)
  }