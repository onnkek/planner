import React, { Component } from 'react';
import './ControlPanel.sass'
import ItemAddForm from '../ItemAddForm';
import { NavLink } from 'react-router-dom';

export default class ControlPanel extends Component {

    state = {
        modal: false
    }

    showAddForm = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    addItem = (body, deadline) => {
        this.setState({
            modal: !this.state.modal
        });
        this.props.onChange(body, deadline);
    }

    render() {

        const modal = this.state.modal ? <ItemAddForm addItem={this.addItem} /> : null;

        const setActive = ({ isActive }) => isActive ? 'tab active-tab' : 'tab';

        return (
            <>
                {modal}
                <div className='app-container'>
                    <div className='control'>
                        <div className='nav-tabs-container'>
                            <ul className='nav-tabs'>
                                <li>
                                    <NavLink to='/' className={setActive}>
                                        <div className='tab-link'>Actual</div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/old' className={setActive}>
                                        <div className='tab-link'>Old</div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>


                        <div className='control-filter'>

                            <div className='app-container'>

                            </div>

                            {/* <button type='button' className='btn btn-primary outline'>For future</button>
                            <button type='button' className='btn btn-primary outline'>For future</button>
                            <button type='button' className='btn btn-primary outline'>For future</button> */}
                        </div>
                        <button
                            type='button'
                            className='btn btn-primary outline'
                            onClick={this.showAddForm}
                        >+</button>
                    </div>
                </div >
            </>
        );
    }
}