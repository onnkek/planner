import React, { Component } from 'react';
import './MainPage.sass'
import ControlPanel from '../../ControlPanel/ControlPanel';
import PostList from '../../PostList/PostList';
import JSONBinService from '../../../services/JSONBinService';

export default class MainPage extends Component {

    jsonService = new JSONBinService();

    state = {
        data: []
    }
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
            const newItem = {
                id: data.data[index].id,
                body: data.data[index].body,
                create: data.data[index].create,
                deadline: data.data[index].deadline,
                visible: false
            };
            const newData = [...data.data.slice(0, index), newItem, ...data.data.slice(index + 1)];
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
                    new={true}
                    onDelete={this.deleteItem}
                />
            </>
        );
    }

}
