export const BookGenresReducer = (state , action) =>{
    switch (action.type){
        case `a` : 
        return {
            ...state,
            g : 'aoao'
        }
        case `b` :
            return {
                ...state,
                g : 'bobo'
            }

    }
}


// Action and Adventure.
// Classics.
// Comic Book or Graphic Novel.
// Detective and Mystery.
// Fantasy.
// Historical Fiction.
// Horror.
// Literary Fiction.