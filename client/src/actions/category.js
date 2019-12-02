import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setCategories=(categories)=> {
    return {type:'SET_CATEGORIES',payload:categories}
}

export const startSetCategories=()=> {
    return (dispatch)=> {
        axios.get('/categories',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const categories=response.data
            dispatch(setCategories(categories))
        })
    }
}

export const addCategory=(category)=> {
    return {type:'ADD_CATEGORY',payload:category}
}

export const startAddCategory=(formData,props)=> {
    return (dispatch)=> {
        axios.post('/categories',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
            const category=response.data
            dispatch(addCategory(category))
            props.history.push('/categories')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Category Added Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
        })
    }
}

export const editCategory=(category,id)=> {
    return {type:'EDIT_CATEGORY',payload:{category,id}}
}

export const startEditCategory=(formData,id,props)=> {
    return (dispatch)=> {
        axios.put(`/categories/${id}`,formData,{
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                const category=response.data
                dispatch(editCategory(category,id))
                props.history.push('/categories')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Category Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
}

export const deleteCategory=(id)=> {
    return {type:'DELETE_CATEGORY',payload:id}
}

export const startDeleteCategory=(id)=> {
    return (dispatch)=> {
        Swal.fire({
            title:'Are You sure?',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Yes, delete it!'
        }).then((result)=> {
            if(result.value) {
        axios.delete(`/categories/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                dispatch(deleteCategory(id))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Category is Deleted',
                    showConfirmButton: true,
                    timer: 2500
                  })
                //props.history.push('/categories')
            }
        })
    }
})
}
    
}