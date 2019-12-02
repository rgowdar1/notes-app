import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import Home from '../src/controllers/common/home'
import Register from '../src/controllers/users/register'
import Login from '../src/controllers/users/login'
import Notes from '../src/controllers/notes/note'
import Category from '../src/controllers/categories/category'
import NewNote from '../src/controllers/notes/new'
import NoteEdit from '../src/controllers/notes/edit'
import NoteShow from '../src/controllers/notes/show'
import CategoryNew from '../src/controllers/categories/new'
import CategoryEdit from '../src/controllers/categories/edit'
import {connect} from 'react-redux'
import {logoutUser} from './actions/user'
import PrivateRoute from '../src/controllers/privateRoute'

function App(props) {
  function handleLogout() {
    props.dispatch(logoutUser())
  }
  return (
      <BrowserRouter>
    <div>
    {!localStorage.getItem('authToken') ? 
    (<Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#"><h1>NOTES_@_APP</h1></Navbar.Brand> 
      <Nav.Link href="/"><Link to="/">HOME</Link></Nav.Link>
      <Nav.Link href="#"><Link to="/users/register">REGISTER</Link> </Nav.Link> 
      <Nav.Link href="#"><Link to="/users/login">LOGIN</Link> </Nav.Link>  
    </Navbar> ) : (
    <Navbar bg="dark" variant="primary">
    <Navbar.Brand href="#"><h1>NOTES_@_APP</h1></Navbar.Brand> 
    <Nav.Link href="/"><Link to="/">HOME</Link></Nav.Link>
    <Nav.Link href="#"><Link to="/notes">NOTES</Link></Nav.Link>
    <Nav.Link href="#"><Link to="/categories">CATEGORIES</Link></Nav.Link>
    <Nav.Link href="#"><Link to="#" onClick={()=>{handleLogout()}}>LOGOUT</Link></Nav.Link> 
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      <h2 className="text-warning">{props.user.username}</h2>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>)   }
      <Route path="/" component={Home} exact={true}/>
      <Route path="/users/register" component={Register}/>
      <Route path="/users/login" component={Login}/>
      <PrivateRoute path="/notes" component={Notes} exact={true}/>
      <PrivateRoute path="/notes/new" component={NewNote}/>
      <PrivateRoute path="/categories" component={Category} exact={true}/>
      <PrivateRoute path="/notes/edit/:id" component={NoteEdit} />
      <PrivateRoute path="/notes/show/:id" component={NoteShow} />
      <PrivateRoute path="/categories/new" component={CategoryNew}/>
      <PrivateRoute path="/categories/edit/:id" component={CategoryEdit}/>
    </div>
    </BrowserRouter>
    
  );
}
const mapStateToProps=(state)=> {
  return {
    user:state.user
  }
}
export default connect(mapStateToProps)(App)
