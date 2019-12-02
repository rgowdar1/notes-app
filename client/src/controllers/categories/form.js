import React from 'react'
import {Card,Form,Button} from 'react-bootstrap'

export default class CategoryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name:props.category ? props.category.name :''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        this.props.submitHandler(formData)
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2013/02/26/06/18/globe-86243__340.jpg"+")",height:"100vh"}} class="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <Card style={{background:'#BE9D96'}} className="shadow p-3 mb-5 rounded">
                    <h1 className="text-center">CATEGORY FROM</h1>
                    <Form onSubmit={this.submitHandler}>
                        <Form.Group controlId="formBasicName">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} name="name" onChange={this.handleChange} required placeholder="Enter Category Name" />
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