import React from 'react'
import {connect} from 'react-redux'
import {startDeleteNote} from '../../actions/notes'
import {startSingleNote} from '../../actions/singleNote'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class NoteShow extends React.Component {
    
    componentDidMount() {
        const id=this.props.match.params.id 
        this.props.dispatch(startSingleNote(id))
    }
    deleteHandle=()=>{
        const id=this.props.match.params.id
        this.props.dispatch(startDeleteNote(id,this.props))
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2013/02/26/06/18/globe-86243__340.jpg"+")",height:'100vh'}} class="jumbotron jumbotron-fluid">
            <div className="container">
            <div className="row">
                   <div className="col-md-3 offset-md-1">
                   <Link to="#" onClick={()=>{
                    this.props.history.push('/notes')
                }}><Button>BACK</Button></Link>
                   </div><br/><br/>
               </div>
               <div className="row">
                   <div className="col-md-6 offset-md-3">
                   <Card className="text-center" border="primary" style={{backgroundColor:'#FFF1D4'}}>
                    <Card.Header>{this.props.note && this.props.note.title}</Card.Header>
                    <Card.Body>
                    <Card.Text>
                    ID:{this.props.note &&  this.props.note._id}<br/>
                    Description:{this.props.note && this.props.note.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button onClick={()=>{
                                this.deleteHandle()}
                                }>delete</Button>
                        </Card.Footer>
                        </Card>
                   </div>
               </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=> {
    return {
        note:state.singleNote
    }
}
export default connect(mapStateToProps)(NoteShow)
