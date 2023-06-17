import React, { Component } from 'react';
import './App.sass'
import Post from '../Post/Post';
import PostList from '../PostList/PostList';
import Header from '../Header/Header';
import ControlPanel from '../ControlPanel/ControlPanel';
import ItemAddForm from '../ItemAddForm';

export default class App extends Component {

    state = {
        data: JSON.parse(localStorage.getItem('DB')) || []
    }

    addItem = (body, deadline) => {

        let maxId = 1;
        console.log(this.state.data);
        if (this.state.data.length) {
            maxId = this.state.data.reduce((prev, cur) => prev.id > cur.id ? prev : cur).id++;
        }

        const newItem = {
            id: maxId,
            body: body,
            create: Date.now(),
            deadline: deadline,
            visible: true
        };

        this.setState(() => {
            const newData = this.state.data ? [...this.state.data, newItem] : [newItem];
            localStorage.setItem('DB', JSON.stringify(newData));
            return {
                data: newData
            }

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
            
            localStorage.setItem('DB', JSON.stringify(newData));
            
            return {
                data: newData
            };
        });
    }

    render() {

        const posts = this.state.data ?
            <PostList data={this.state.data} onDelete={this.deleteItem} /> : null;

        return (
            <>
                <Header />
                <ControlPanel onChange={this.addItem} />
                {posts}
            </>
        );
    }
}