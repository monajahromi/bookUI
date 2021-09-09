import { baseFetch } from './APIUtils'
export const getBookList = (searchTerm, setBookList, setIsLoading, setMessage) => {

  setIsLoading(true);

  let  endPoint = "books"
 
  if (searchTerm)
  endPoint += `/search/${searchTerm}`

  let promise = baseFetch(endPoint, "get")


  promise.then(result => resolve(result, setBookList, setMessage))
    .catch(error => reject(error, setMessage))
    .finally(() => setIsLoading(false));
}


export const getBook = (id, setBook, setIsLoading, setMessage) => {

  setIsLoading(true);

  let promise = baseFetch(`books/${id}`, "get")


  promise.then(result => resolve(result, setBook, setMessage))
    .catch(error => reject(error, setMessage))
    .finally(() => setIsLoading(false));
}


const resolve = (result, setData, setMessage) => {

  setMessage('');
  setData(result);


}


const reject = (error, setMessage) => {

  setMessage(error)
}