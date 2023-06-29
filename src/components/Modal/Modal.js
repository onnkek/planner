import React from 'react';
import './Modal.sass'
import { XLg } from 'react-bootstrap-icons';

const Modal = ({ id, children, buttons, title }) => {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="close-btn btn" data-bs-dismiss="modal" aria-label="Close">
                            <XLg size={20} className='close-icon'/>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    {buttons && <div class="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>}

                </div>
            </div>
        </div>
    );
}

export default Modal;