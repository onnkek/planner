import React, { Component } from 'react';
import './OldItemsPage.sass'
import ControlPanel from '../../ControlPanel/ControlPanel';
import PostList from '../../PostList/PostList';
import JSONBinService from '../../../services/JSONBinService';

export default class OldItemsPage extends Component {

    state = {
        data: []
    }
    jsonService = new JSONBinService();
    componentDidMount() {
        this.jsonService.getData().then(data => {
            this.setState({
                data
            });
        });
    }

    deleteItem = (id) => {
        this.setState((data) => {
            const index = data.data.findIndex(item => item.id === id);
            const newData = [...data.data.slice(0, index), ...data.data.slice(index + 1)];
            this.jsonService.updateData(newData);
            return {
                data: newData
            };
        });
    }

    render() {
        return (
            <>
                <PostList
                    data={this.state.data}
                    new={false}
                    onDelete={this.deleteItem}
                />
            </>
        );
    }

}