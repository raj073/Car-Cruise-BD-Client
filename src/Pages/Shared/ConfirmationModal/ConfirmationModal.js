import React from 'react';

const ConfirmationModal = ({ title, message, successButtonName, closeModal, 
    modalData, successAction }) => {

    return (

        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl font-serif text-error">{title}</h3>
                    <p className="py-4 font-semibold font-serif text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500">{message}</p>
                    <div className="modal-action">
                        <label 
                        onClick={() => successAction(modalData)} 
                        htmlFor="confirmation-modal" 
                        className="btn btn-outline btn-info rounded-none">{successButtonName}</label>
                        <button onClick={closeModal} className='btn btn-error rounded-none'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;