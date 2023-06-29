import React from 'react';
import './Modal.sass'
import { XLg } from 'react-bootstrap-icons';

const Modal = ({ id, children, buttons, title }) => {
    return (
        <div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" class="close-btn btn" data-bs-dismiss="modal" aria-label="Close">
                            <XLg size={20} className='close-icon'/>
                        </button>
                    </div>
                    <div class="modal-body">
                        {children}
                    </div>
                    {buttons && <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>}

                </div>
            </div>
        </div>
    );
}

export default Modal;