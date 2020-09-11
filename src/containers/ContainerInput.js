import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputItem from '../components/InputItem'
import * as actions from '../actions/actions'


class ContainerInput extends Component {
    render() {
        return (
            <InputItem onAddItem={this.onAddItem} onCompleteAll = {this.props.onCompleteAll} />
        )
    }
    onAddItem = (item) => {
        this.props.onAddItem(item)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddItem: (item) => {
            dispatch(actions.Add_Item(item))
        },
        onCompleteAll: () => {
            dispatch(actions.Complete_All())
        }
    }
}

export default connect(null, mapDispatchToProps)(ContainerInput)
