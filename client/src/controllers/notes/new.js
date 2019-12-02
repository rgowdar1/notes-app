import React from 'react'
import {connect} from 'react-redux'
import {startAddNote} from '../../actions/notes'
import NoteForm from '../notes/form'

 class NewNote extends React.Component {
     submitHandler=(formData)=>{
        this.props.dispatch(startAddNote(formData,this.props))
     }
     render() {
         return (
             <div>
                 <NoteForm submitHandler={this.submitHandler}/>
             </div>
         )
     }
 }

 export default connect()(NewNote)