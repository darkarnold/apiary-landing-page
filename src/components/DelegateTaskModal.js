import React from "react";
import ModalWithForm from "./ModalWithForm";

function DelegateTaskModal(props) {

    return (
        <ModalWithForm isOpen={props.isOpen}/>
    )
}

export default DelegateTaskModal;