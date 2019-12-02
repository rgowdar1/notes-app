import axios from '../config/axios'

export const setSingleCategory=(category)=> {
    return {type:'SET_CATEGORY',payload:category}
}

export const startSingleCategory=(id)=> {
    return (dispatch)=> {
        axios.get(`/categories/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const category=response.data
            dispatch(setSingleCategory(category))
        })
    }
}