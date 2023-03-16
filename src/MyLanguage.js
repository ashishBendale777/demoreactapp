import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'


import cpp from "./ic kang/cpp.png"
import c from "./ic kang/c.png"
import python from "./ic kang/ic_py.png"

function MyLanguage() {

    const langs = [{
        name: "C",
        logo: c
    }, {
        name: "CPP",
        logo: cpp
    }, {
        name: "PYTHON",
        logo: python
    },]

    return (
        <div>
            <Container>
                <Row>
                    {
                        langs.map((lang) => {
                            return (
                                <Col>
                                    <Card>
                                        <Card.Img src={lang.logo} />
                                        <Card.Title>{lang.name}</Card.Title>
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

export default MyLanguage