import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function MyModalCompo(props) {

    return (
        <div>
            <Modal show={props.show} onHide={props.hideKar}>
                <Modal.Header closeButton>
                    Details
                </Modal.Header>
                <Modal.Body>Body</Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=> props.hideKar()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MyModalCompo