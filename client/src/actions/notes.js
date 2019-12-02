import axios from '../config/axios'
import Swal from 'sweetalert2'


export const setAllNotes=(notes)=> {
    return {type:'SET_NOTES',payload:notes}
}

export const startSetNotes=()=> {
    return (dispatch)=> {
        axios.get('/notes',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const notes=response.data
            dispatch(setAllNotes(notes))
        })
    }
}

export const addNote=(note)=> {
    return {type:'ADD_NOTE',payload:note}
}

export const startAddNote=(formData,props)=> {
    return (dispatch)=> {
        axios.post('/notes',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('errors')) {
                Swal.fire('form should not to be empty')
            } else {
            const note=response.data
            dispatch(addNote(note))
            props.history.push('/notes')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Note Added Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
        })
    }
}

export const editNote=(note,id)=> {
    return {type:'EDIT_NOTE',payload:{note,id}}
}

export const startEditNote=(formData,id,props)=> {
    return (dispatch)=> {
        axios.put(`/notes/${id}`,formData,{
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                Swal.fire(response.data.message)
            } else {
                const note=response.data
                dispatch(editNote(note,id))
                props.history.push('/notes')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Note updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
}

export const deleteNote=(id)=> {
    return {type:'DELETE_NOTE',payload:id}
}

export const startDeleteNote=(id,props)=> {
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
        axios.delete(`/notes/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                dispatch(deleteNote(id))
                props.history.push('/notes')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Note is Deleted',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
})
    }
}

export const searchNote=(notes)=> {
    return {type:'SEARCH_NOTE',payload:notes}
}

export const startSearchNote=(value)=> {
    return (dispatch)=> {
        axios.get('/notes',{
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const notes=response.data.filter(note=>{
                return (note.title.toLowerCase().slice(0,value.length)==value.toLowerCase())
            })
            dispatch(searchNote(notes))
        })
    }
}