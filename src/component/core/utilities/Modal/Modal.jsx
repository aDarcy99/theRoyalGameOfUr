import React, { useRef, useState } from 'react';
import styled from "styled-components";
//Components

//Style
const ModalBackground = styled.div`
    display: block;
    position: fixed; 
    z-index: 100; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto;

    background-color: rgba(0,0,0,0.4);
`
const ModalContent = styled.div`
    text-align:left;    
    z-index: 101; 
    width: 40%;
    margin: 15% auto;
    padding: 1em;
    border: 1px solid #888;

    color: black;
    background-color: #fefefe;
`
const ModalExitButton = styled.button`
    float: right;
    padding: 0.5em;    
    font-family: Arial;
    border: none;

    color: black;
    &:focus{
        outline: none;
        color: white;
        background-color: red; 
    }
`
//functions 
export function handleOpenModal(SetState) {
    return (Event) => {
        SetState(true)
    }
}
export function handleCloseModal(SetState) {
    return (Event) => {
        SetState(false);
    }
}

function Modal(props) {
    const backgroundRef = useRef("")
    const [isActive, setIsActive] = useState(false);
    const isOpen = props.isActive || isActive;

    function closeModal(Event) {
        if (props.isActive) {
            props.handleCloseModal(Event)
        } else {
            setIsActive(false);
        }
    }

    return (
        <React.Fragment>
            {
                isOpen ? (
                    <ModalBackground ref={backgroundRef} onClick={(Event) => { Event.target === backgroundRef.current ? closeModal(Event) : "" }}>
                        <ModalContent>
                            {props.isExitable ?
                                <ModalExitButton onClick={closeModal}>X</ModalExitButton>
                                : ""}
                            {props.title ?
                                <h3>{props.title}</h3>
                                : ""}
                            {props.children}
                        </ModalContent>
                    </ModalBackground>
                ) : ""
            }
        </React.Fragment>
    );
};

export default Modal;
