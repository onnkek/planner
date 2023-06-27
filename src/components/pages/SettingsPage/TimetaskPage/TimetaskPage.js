import React from 'react';
import './TimetaskPage.sass'
import Timetask from '../../../Timetask/Timetask';
import TaskAddForm from '../../../TaskAddForm/TaskAddForm';

const TimetaskPage = (props) => {

    return (
        <>
            <div
                // className={`modal fade ${props.isShowModal ? "show" : ""}`}
                className={`modal fade        `}
                tabIndex="-1"
                onClick={(e) =>
                    e.currentTarget === e.target && props.toggleCreatePost()
                }
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add new autocreate task</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={props.toggleCreatePost}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <TaskAddForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className='settings-item'>
                <div className="settings-header-container">
                    <h2 className="settings-header">Timetask preferences</h2>
                </div>
                <p className="settings-descr">
                    Here you can add tasks that will automatically
                    create cases and add them to the to-do list on a schedule.
                </p>
                <h3 className="settings-subheader">Current tasks</h3>
                <ul className='timetask-list row'>
                    <li className='timetask-item'>
                        <Timetask />
                    </li>
                    <li className='timetask-item'>
                        <Timetask />
                    </li>
                    <li className='timetask-item'>
                        <Timetask />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default TimetaskPage;