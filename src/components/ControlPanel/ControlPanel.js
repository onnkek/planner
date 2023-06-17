import React, { Component } from 'react';
import './ControlPanel.sass'
import ItemAddForm from '../ItemAddForm';

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

        return (
            <>
                {modal}
                <div className='app-container'>
                    <div className='control'>
                        <div className='control-filter'>
                            <button type='button' className='btn btn-primary outline'>1</button>
                            <button type='button' className='btn btn-primary outline'>2</button>
                            <button type='button' className='btn btn-primary outline'>3</button>
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