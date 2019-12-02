import React from 'react'
import {startSetNotes, startSearchNote} from '../../actions/notes'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'

class Notes extends React.Component {
    constructor() {
        super()
        this.state={
            serach:''
        }
    }
    componentDidMount() {
        this.props.dispatch(startSetNotes())
    }
    handleSearch=(e)=> {
        this.setState({search:e.target.value})
        this.props.dispatch(startSearchNote(e.target.value))
    }
    render() {
        console.log('notes',this.props.notes)
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2013/02/26/06/18/globe-86243__340.jpg"+")"}} class="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="text-center" style={{color:'pink'}}>NOTES</h1>
                <Link to="notes/new"><Button className="primary">ADD NOTE</Button></Link><br/>
                    <div className="row">
                    <div className="col-md-4 offset-md-4">
                    <h3 style={{color:'pink'}} className="text-center">SEARCH HERE</h3>
                    <input type="text" className="form-control"  value={this.state.search} onChange={this.handleSearch} placeholder="Enter Note Title"></input>
                    </div>
                </div><br/><br/>
                <div className="row">
                {this.props.notes.map((note)=>{
                            return <div className="col-md-3" key={note._id}>
                        <Card className="text-center" border="primary" style={{backgroundColor:'#FFF1D4'}}>
                        <Card.Header>{note.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                        Description:{note.description}<br/>
                        Category:{note.categoryId && note.categoryId.name}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link to={`/notes/edit/${note._id}`}><Button>Edit</Button></Link><span> </span>
                        <Link to={`/notes/show/${note._id}`}><Button>Show</Button></Link>
                        </Card.Footer>
                        </Card><br/>
                    </div>
                        })}
                </div>
                </div>
                        
            </div>
        )
    }
}
const mapStateToProps=(state)=> {
    return {
        notes:state.notes
    }
}
export default connect(mapStateToProps)(Notes)