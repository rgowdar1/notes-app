const noteInitialState=[]

const notesReducer=(state=noteInitialState,action)=> {
    switch(action.type) {
        case 'SET_NOTES' : {
            return [...action.payload]
        }
        case 'ADD_NOTE' : {
            return [...state,action.payload]
        }
        case 'EDIT_NOTE' : {
            return state.map(note=> {
                if(note._id==action.payload.id) {
                    return {...note,...action.payload.note}
                } else {
                    return {...note}
                }
            })
        }
        case 'SEARCH_NOTE' : {
            return [...action.payload]
        }
        case 'DELETE_NOTE' : {
            return [...state.filter(note=>note._id!=action.payload)]
        }
        default : {
            return [...state]
        }
    }
}

export default notesReducer