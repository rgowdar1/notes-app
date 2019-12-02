import axios from '../config/axios'

export const setSingleNote=(note)=> {
    return {type:'SET_SINGLE_NOTE',payload:note}
}

export const startSingleNote=(id)=> {
    return (dispatch)=> {
        axios.get(`/notes/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const note=response.data
            dispatch(setSingleNote(note))
        })
    }
}