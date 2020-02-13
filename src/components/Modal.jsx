import React, { useState } from 'react';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Input, 
    Form 
} from 'reactstrap';

const ModalComment = (props) => {
    const { className } = props;
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
    const toggle = () => setModal(!modal);
  
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <Button color="danger" onClick={toggle}>Contact Us</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalComment;