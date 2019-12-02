import React from 'react'
import {connect} from 'react-redux'
import {startUserRegister} from '../../actions/user'
import {Form,Button,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Register extends React.Component {
    constructor() {
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            passwordAlert:''
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
        username:this.state.username,
        email:this.state.email,
        password:this.state.password
    }
    console.log(formData)
    let passwd = this.state.password
        const reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,128}$/;
        let test = reg.test(passwd)
        if (test) {
            this.props.dispatch(startUserRegister(formData,this.props))
        } else {
            this.setState({passwordAlert:'password must contain upperCase,lowerCase,number and special character'})
        }
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2016/11/22/23/09/fountain-pen-1851096_960_720.jpg"+")","height":650,"width":1500,backgroundSize:'cover'}} class="jumbotron jumbotron-fluid">
             <div  className="col-md-4 offset-md-3">
              <Card style={{background:'#b2a98a',height:'430px',width:'340px'}} className="shadow p-3 mb-5 rounded"> 
            <h1 className="text-center">REGISTER</h1>
            <Form onSubmit={this.submitHandler}>
            <Form.Group controlId="formBasicUser">
            <Form.Label>UserName</Form.Label>
             <Form.Control type="text" value={this.state.username} name="username" onChange={this.handleChange} required placeholder="Enter Username" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
             <Form.Control type="email" value={this.state.email} name="email" onChange={this.handleChange} required placeholder="Enter Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
             <Form.Control type="password" value={this.state.password} name="password" onChange={this.handleChange} required placeholder="Enter Password" />
            <Form.Text>{this.state.passwordAlert}</Form.Text>
            </Form.Group>
            <div className="text-center"><Button variant="primary" size="lg" block  type="submit">
                Submit
            </Button></div>
            <p className="text-center"><Link to="/users/login">Already have an account ? Login Here</Link></p>
            </Form>
             </Card> 
                </div>
            </div>
            
        // </div>
        )
    }
}
export default connect()(Register)