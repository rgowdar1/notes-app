import React from 'react'
import CategoryForm from './form'
import {connect} from 'react-redux'
import {startAddCategory} from '../../actions/category'

class CategoryNew extends React.Component {
    
    submitHandler=(formData)=>{
        this.props.dispatch(startAddCategory(formData,this.props))
    }
    render() {
        return (
            <div>
            <CategoryForm submitHandler={this.submitHandler}/>
            </div>
        )
    }
}
export default connect()(CategoryNew)