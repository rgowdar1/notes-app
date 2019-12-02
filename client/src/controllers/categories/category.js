import React from 'react'
import {connect} from 'react-redux'
import {startSetCategories,startDeleteCategory} from '../../actions/category'
import {startSetUser} from '../../actions/user'
import {Link} from 'react-router-dom'
import {Table,Button} from 'react-bootstrap'

class Category extends React.Component {
    
    deleteHandler=(id)=>{     
        this.props.dispatch(startDeleteCategory(id))
}

    componentDidMount() {
        this.props.dispatch(startSetUser())
        this.props.dispatch(startSetCategories())
    }
    
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2013/02/26/06/18/globe-86243__340.jpg"+")",height:"100vh"}} class="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="text-center" style={{color:'pink'}}>CATEGORIES</h1><br/>
                <Link to="categories/new"><Button>ADD CATEGORY</Button></Link><br/><br/>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.categories.map((cat,i)=>{
                            return <tr key={cat._id}>
                                     <td>{cat.name}</td>
                                     <td><Link to={`/categories/edit/${cat._id}`}><Button>EDIT</Button></Link></td>
                                     <td><Button onClick={()=>{
                                         this.deleteHandler(cat._id)
                                     }}>DELETE</Button></td>
                            </tr>
                        })}
                    </tbody>
                </Table>
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
export default connect(mapStateToProps)(Category)