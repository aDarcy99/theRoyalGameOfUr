import React from 'react';
import styled from 'styled-components';
//styled
const ModalOverlay = styled.div`

`;
const ModalStyle = styled.div`
    width: ;
    background-color: ; 
`;
const ModalExitButton = styled.button`
    
`;

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleExitClick(Event) {
        setIsModalOpen(false);
    }

    return (
        <React.Fragment>
            {isModalOpen ?
                <ModalOverlay onclick={handleExitClick}>
                    <ModalStyle>

                    </ModalStyle>
                </ModalOverlay>
            : ""}
        </React.Fragment>
    );
}

export default Modal;