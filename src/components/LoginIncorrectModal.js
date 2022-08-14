import styled from "styled-components"
import Modal from "react-modal"

const LoginCorrectForm = ({openModal, setIsOpen, modalIsOpen}) => {

    // modal funcs
    // const showErrMsg = (err) => {
    //     setErrMsg(err)
    //     openModal()
    //     console.log(err)
    // }

  
    const closeModal = (e) => {
        e.preventDefault()
        setIsOpen(false);
    }

    return (
        <>
        <ModalCont>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <CloseModal onClick={closeModal}>X</CloseModal>
                {/* <ErrorMessage>{errMsg}</ErrorMessage> */}
                <ErrorMessage>Incorrect credentials.</ErrorMessage>
            </Modal>
        </ModalCont>
        </>
    )
}

export default LoginCorrectForm

    // Err Msg

    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
    };
    const ModalCont = styled.div`
        position: absolute;
    `

    const CloseModal = styled.div`
        position: absolute;
        right: 1rem;
        height: 20px;
        width: 20px;
        cursor: pointer;
        color: rgba(1,1,1,0.6);

        font-weight: 700;
        font-size: larger;
        
    `
    const ErrorMessage = styled.h2`
        color: red;
        padding: 2rem;
    `