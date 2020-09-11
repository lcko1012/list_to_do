import React, { Component } from 'react'
import Bar from '../components/Bar'
import {connect} from 'react-redux'
import * as actions from '../actions/actions'

class ContainerBar extends Component {
    render() {
        var { items, Sort } = this.props; 
        return (
            <Bar
            count={this.leftItems(items)}
            items={items}
            onSort={this.props.onSort}
            onClearCompleted={this.props.onClearCompleted}
            Sort = {Sort}
            />
        );
    }

    leftItems = (items) => {
        var count = 0
        items.forEach(item => {
            if(item.status === false){
                count++;
            }
        });
        return count
    }
}


const mapStateToProps = state => {
    return {
        items: state.items,
        Sort: state.Sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (Sort) => {
            dispatch(actions.Sort(Sort))
        },
        onClearCompleted: () => {
            dispatch(actions.ClearCompleted())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContainerBar)
