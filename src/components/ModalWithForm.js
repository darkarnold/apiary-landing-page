import React from "react";
import { Button, Icon, Modal } from "semantic-ui-react";

function ModalWithForm(props) {
    // const [firstOpen, setFirstOpen] = React.useState(false)
    const [secondOpen, setSecondOpen] = React.useState(false)

    // function handleSubmitForm() {

    //     props.isOpen(false)
    //     setSecondOpen(true)
    // }
    // function handleOnClose(){

    // }
    const modalRef = React.useRef()
    function handleOnSubmit(e) {
        e.preventDefault()
        setSecondOpen(true)
        props.onSubmit({
            form: modalRef.current.value
        })
    }

    // function handleOnSubmit(){
    //     props.onSubmit(false)
    // }

    function handleCloseAll() {
        props.closeAll(false)
        setSecondOpen(false)
    }

    return (
        <>
            {/* <Button onClick={() => setFirstOpen(true)}>Open first Modal</Button> */}

            <Modal
                onClose={props.isClose}
                onOpen={props.isOpen}
                open={props.firstOpen}
            >
                <Modal.Header>Modal #1</Modal.Header>
                <Modal.Content image>
                    <div className='image'>
                        <Icon name='right arrow' />
                    </div>
                    <Modal.Description>
                        <p>We have more to share with you. Follow us along to modal 2</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <input ref={modalRef}></input>
                    <Button onClick={handleOnSubmit} primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>

                <Modal
                    onClose={()=>setSecondOpen(false)}
                    open={secondOpen}
                    size='small'
                >
                    {/* <Modal.Header>Modal #2</Modal.Header> */}
                    <Modal.Content>
                        <p>Thank you for contacting us, Tim Cook from Apple Inc.! We’ll reach out to you in email as soon as possible. Looking forward to work together!</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <button className="cta cta_theme_dark"
                            onClick={handleCloseAll}>Done
                        </button>
                    </Modal.Actions>
                </Modal>
            </Modal>
        </>
    )
}

export default ModalWithForm;