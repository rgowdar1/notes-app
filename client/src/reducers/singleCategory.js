const categoryInitialState={}

const singleCategoryReducer=(state=categoryInitialState,action)=> {
    switch(action.type) {
        case 'SET_CATEGORY' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default singleCategoryReducer