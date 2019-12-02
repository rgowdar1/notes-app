import React from 'react'
import {Card,Button,Form} from 'react-bootstrap'
import {connect} from 'react-redux'
import {startSetCategories} from '../../actions/category'

class NoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            title:props.note ? props.note.title:'',
            description:props.note ? props.note.description:'',
            categoryId:props.note ? props.note.categoryId:'',
        }
    }
    componentDidMount() {
        this.props.dispatch(startSetCategories())
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            description:this.state.description,
            categoryId:this.state.categoryId
        }
        this.props.submitHandler(formData)
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2013/02/26/06/18/globe-86243__340.jpg"+")",height:"100vh"}} class="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                    <Card style={{background:'#BE9D96'}} className="shadow p-3 mb-5 rounded">
                    <h1>NOTE FORM</h1>
                <Form onSubmit={this.submitHandler}> 
                <Form.Group controlId="formBasicName">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" value={this.state.title} name="title" onChange={this.handleChange} required placeholder="Enter Title" />
                        </Form.Group>
                        <Form.Group controlId="formBasicDescription">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" value={this.state.description} name="description" onChange={this.handleChange} required placeholder="Enter Description" />
                        </Form.Group>
                    <Form.Group controlId="formbasiccategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" value={this.state.categoryId} name="categoryId" onChange={this.handleChange}>
                            <option>SELECT HERE</option>
                            {this.props.categories.map(category=>{
                                return <option key={category._id} value={category._id}>{category.name}</option>
                            })}
                    </Form.Control>
                    </Form.Group><br/>
                    <div className="text-center"><Button variant="secondary" size="lg" block  type="submit">
                    Submit
                </Button></div>
                </Form>
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
        categories:state.categories
    }
}

export default connect(mapStateToProps)(NoteForm)