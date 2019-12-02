import axios from '../config/axios'
import Swal from 'sweetalert2'

export const startUserRegister=(formData,props)=> {
    return (dispatch)=> {
        axios.post('/users/register',formData)
        .then(response=> {
            if(response.data._id) {
                props.history.push('/users/login')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Register Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'User is already exists',
                    showConfirmButton: true,
                    timer: 2500
                  })
            }
        })
    }
}

export const startUserLogin=(formData,props)=> {
        return (dispatch)=> {
        axios.post('/users/login',formData)
            .then(response=> {
                if(response.data.hasOwnProperty('errors')) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Invalid Email/Password',
                        showConfirmButton: true,
                        timer: 1500
                      })
                } else {
                    const token=response.data.token
                        console.log(token)
                   localStorage.setItem('authToken',token)
                   props.history.push('/notes')
                    window.location.reload()
                }
            })
        }
}

export const setUser=(user)=> {
    return {type:'SET_USER',payload:user}
}

export const startSetUser=()=> {
    return (dispatch)=> {
        axios.get('/users/account',{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
            const user=response.data
            dispatch(setUser(user))
            }
        })
    }
}

export const removeUser=()=> {
    return {type:'REMOVE_USER'}
}

export const logoutUser=()=> {
    return (dispatch)=> {
        axios.delete('/users/logout',{
            headers:{
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                localStorage.removeItem('authToken')
                dispatch(removeUser())
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged out Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setTimeout(() => {
                    window.location.href='/'
                  }, 1500);
                 
            }
        })
    }
}