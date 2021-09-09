import tinycolor from 'tinycolor2'


export const BookCategoryReducer = (state, action) => {
    const lightpink ='#F8BBD0'
    const lightPurple  = '#E1BEE7'
    const lightGreen  = '#E8F5E9'
    const lightYellow  = '#FFF9C4'
    const lightBlue  = '#B3E5FC'

    const darken =  (color)=>{
        return  tinycolor(color).darken(50).toString() ; 
    }

    const genetareColorAndbackgorundcolor = (color) =>{
        return {  backgroundColor : color,
                  color: darken(color)  }
    }

    switch (action.type.toLowerCase().trim()) {
        case 'web development':
            return {
                ...state,
                ...genetareColorAndbackgorundcolor( lightYellow),
                
                
            }
        case 'computing' :
            return {
                ...state,
                  ...genetareColorAndbackgorundcolor( lightPurple),
                
            }
        case 'server side scripting':
                return {
                    ...state,
                    ...genetareColorAndbackgorundcolor( lightGreen),
                    
                }    
        case 'php':
                    return {
                        ...state,
                        ...genetareColorAndbackgorundcolor( lightpink),
                        
                    }  
       case 'agile' :
                     return {
                        ...state,
                        ...genetareColorAndbackgorundcolor( lightBlue),
                        
                    }              
        default: return  {
                ...state,
                ...genetareColorAndbackgorundcolor( lightBlue),
                
            }   

    }
}
