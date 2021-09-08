export const bookstoreAPI= "http://localhost:8080/bookstore/"

const baseFetch = (methodName = "", callingType , body) => {


let param= {
    method: callingType,
    headers: {
        'Content-Type': 'application/json',
  
      }
}

if (callingType == "post")
    param  =   { body: JSON.stringify(body),...param  }


    return fetch(bookstoreAPI + methodName, param)
           .then(response => response.json())
  
  
  
  }
  


  