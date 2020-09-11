import React, { Component } from 'react'
import { connect } from "react-redux"
import TodoList from '../components/TodoList';
import Item from '../components/Item';
import * as actions from '../actions/actions'

class ContainerItems extends Component {
    render() {
        var {items, Sort} = this.props;
        return (
            <TodoList>
                {this.showItem(items, Sort)}
            </TodoList>
        )
    }
    showItem = (items, Sort) => {
        var result = null;
        if(Sort === 1){
            if(items.length > 0){
                items = items.filter((item) => {
                    return item.status === true
                })
            }
        }
        else if(Sort === 0){
            if (items.length > 0) {
                items = items.filter((item) => {
                return item.status === false;
                });
            }
        }
        if(items.length > 0){
            result = items.map((item, index) => {
                return <Item item={item} key={index} onDeleteItem={this.onDeleteItem}
                onCompleteItem={this.onCompleteItem} />
            })
        }
        return result;
    }

    onDeleteItem = id => {
        this.props.onDeleteItem(id);
    }
    onCompleteItem = id => {
        this.props.onCompleteItem(id);
    }
    
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        Sort: state.Sort
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        onDeleteItem: (id) => {
            dispatch(actions.Delete_Item(id))
        },
        onCompleteItem: (id) => {
            dispatch(actions.Complete_Item(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerItems);
