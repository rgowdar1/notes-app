import React from 'react'
import CategoryForm from './form'
import {connect} from 'react-redux'
import {startEditCategory} from '../../actions/category'
import {startSingleCategory} from '../../actions/singleCategory'

class CategoryEdit extends React.Component {
    
    componentDidMount() {
        const id=this.props.match.params.id
        this.props.dispatch(startSingleCategory(id))
    }
    submitHandler=(formData)=>{
        const id=this.props.match.params.id
        this.props.dispatch(startEditCategory(formData,id,this.props))
    }
    render() {
        return (
            <div>
                {Object.keys(this.props.category).length!==0 && <CategoryForm category={this.props.category} submitHandler={this.submitHandler}/>}
            </div>
        )
    }
}
const mapStateToProps=(state)=> {
    return {
        category:state.singleCategory
    }
}

export default connect(mapStateToProps)(CategoryEdit)