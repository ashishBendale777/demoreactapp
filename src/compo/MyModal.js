import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function MyModal() {

    return (
        <div>
            <Modal>
                <Modal.Header closeButton>
                    Details
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MyModal