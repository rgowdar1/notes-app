import React from 'react'
import {connect} from 'react-redux'
import NoteForm from '../notes/form'
import {startEditNote} from '../../actions/notes'
import {startSingleNote} from '../../actions/singleNote'

class NoteEdit extends React.Component {
    componentDidMount() {
        const id=this.props.match.params.id
        this.props.dispatch(startSingleNote(id))
    }
    submitHandler=(formData)=>{
            const id=this.props.match.params.id
            this.props.dispatch(startEditNote( formData,id,this.props))
        }
        render() {
            return (
                <div>
                    <h2>Edit Note</h2>
                    {Object.keys(this.props.note).length!==0 && <NoteForm note={this.props.note} submitHandler={this.submitHandler}/>}
                </div>
            )
        }
}
const mapStateToProps=(state)=> {
    return {
        note:state.singleNote
    }
}
export default connect(mapStateToProps)(NoteEdit)