import React from 'react';
import { connect } from 'react-redux';
import { fetchAllList } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchAllList();
    }
    getList() {
        return this.props.lists.map((list, index) => {
            return (
                <div key={ index }>{ list.title }</div>
            )
        })
    }
    render() {
        return (
            <div>{this.getList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { lists: state.lists }
}

export default connect(mapStateToProps, { fetchAllList })(PostList);