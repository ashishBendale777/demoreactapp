import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'


function MyStud() {

    const stdList = [{
        name: "Ashish",
        marks: 65,
        course: "MCA"
    }, {
        name: "Pawan",
        marks: 75,
        course: "MSCCS"
    }, {
        name: "Ketan",
        marks: 85,
        course: "MCA"
    }, {
        name: "Bhavana",
        marks: 67,
        course: "MCA"
    }, {
        name: "Lokesh",
        marks: 45,
        course: "MSCIT"
    }, {
        name: "Abhay",
        marks: 55,
        course: "MSCCS"
    }, {
        name: "Dhiraj",
        marks: 76,
        course: "MCA"
    }]

    const [selClass, setSelClass] = useState("All")
    const [filterdList, setfilterdList] = useState([])

    useEffect(() => {
        if (selClass == "A") {
            setfilterdList(stdList.filter((std) => std.marks >= 75))
        } else if (selClass == "B") {
            setfilterdList(stdList.filter((std) => std.marks >= 60 && std.marks < 75))
        } else if (selClass == "C") {
            setfilterdList(stdList.filter((std) => std.marks >= 50 && std.marks < 60))
        } else if (selClass == "D") {
            setfilterdList(stdList.filter((std) => std.marks >= 35 && std.marks < 50))
        } else if (selClass == "E") {
            setfilterdList(stdList.filter((std) => std.marks < 35))
        } else {
            setfilterdList(stdList)
        }
    }, [selClass])

    return (
        <div>
            <Container>
                <Row>
                    <Form.Select onChange={(e) => setSelClass(e.target.value)}>
                        <option value="All">All</option>
                        <option value="A" >Dictinsion</option>
                        <option value="B">First</option>
                        <option value="C">Second</option>
                        <option value="D">Pass</option>
                        <option value="E">Fail</option>
                    </Form.Select>
                </Row>
                <Row>
                    {
                        filterdList.map((std) => {
                            return (
                                <Col lg={4} md={3} sm={12}>
                                    <Card>
                                        <Card.Title>{std.name}</Card.Title>
                                        <Card.Subtitle>{std.course}</Card.Subtitle>
                                        <Card.Body>
                                            <h4>{std.marks}</h4>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MyStud