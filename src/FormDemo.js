import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function FormDemo() {

    const [userName, setuserName] = useState("")
    const [userAddress, setuseraddress] = useState("")

    const [userGender, setusergender] = useState("")


    return (
        <div>
            <Container className='m-form-container border p-3 border-3 border-primary'>
                <h3>Student Info</h3>

                <Form className='border p-3 border-3 border-primary border-radius rounded m-2 w-50 '>
                    <Form.Group>
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control type='Text' placeholder='Enter Name' onChange={(e) => setuserName(e.target.value)} />
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Student Address</Form.Label>
                        <Form.Control type='Text' placeholder='Enter Address' onChange={(e) => setuseraddress(e.target.value)} />
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Student Gender</Form.Label>
                        <Form.Check type='radio' value="Male" onChange={(e) => setusergender(e.target.value)} name="gender" label="Male" />
                        <Form.Check type='radio' value="Female" onChange={(e) => setusergender(e.target.value)} name="gender" label="Female" />
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Student Subjects</Form.Label>
                        <Form.Check type='checkbox' name="sub" label="Math" />
                        <Form.Check type='checkbox' name="sub" label="Science" />
                        <Form.Check type='checkbox' name="sub" label="Marathi" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Student Course</Form.Label>
                        <Form.Select>
                            <option>MCA</option>
                            <option>MSC Cs</option>
                            <option>MSC It</option>
                        </Form.Select>
                    </Form.Group>

                    <Button>Submit</Button>
                </Form>
                <h3>{userName}</h3>
                <h3>{userAddress}</h3>
                <h3>{userGender}</h3>
            </Container>
        </div>
    )
}

export default FormDemo