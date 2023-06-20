import React, { Component } from 'react';
import './App.sass'
import Post from '../Post/Post';
import PostList from '../PostList/PostList';
import Header from '../Header/Header';
import ControlPanel from '../ControlPanel/ControlPanel';
import ItemAddForm from '../ItemAddForm';
import JSONBinService from '../../services/JSONBinService';
import { Route, Routes, NavLink, Link } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import OldItemsPage from '../pages/OldItemsPage/OldItemsPage';

export default class App extends Component {
    
    addItem = (body, deadline) => {

        let maxId = 1;
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
            this.jsonService.updateData(newData);
            return {
                data: newData
            }

        });

    }

    render() {
        return (
            <>
                <Header />
                <ControlPanel onChange={this.addItem} />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/old' element={<OldItemsPage />} />
                </Routes>

            </>
        );
    }
}