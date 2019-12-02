const noteInitialState={}

const singleNoteReducer=(state=noteInitialState,action)=> {
    switch(action.type) {
        case 'SET_SINGLE_NOTE' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default singleNoteReducer