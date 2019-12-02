const categoryInitialState=[]

const categoriesReducer=(state=categoryInitialState,action)=> {
    switch(action.type) {
        case 'SET_CATEGORIES' : {
            return [...action.payload]
        }
        case 'ADD_CATEGORY' : {
            return [...state,action.payload]
        }
        case 'EDIT_CATEGORY' : {
            return state.map(category=> {
                if(category._id==action.payload.id) {
                    return {...category,...action.payload.category}
                } else {
                    return {...category}
                }
            })
        }
        case 'DELETE_CATEGORY' : {
            return [...state.filter(category=>category._id!=action.payload)]
        }
        default : {
            return [...state]
        }
    }
}

export default categoriesReducer