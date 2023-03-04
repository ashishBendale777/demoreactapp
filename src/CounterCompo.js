import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

function CounterCompo() {

    const [count, setcount] = useState(0)

    function incre() {
        setcount(count + 1)
    }

    function decre() {
        setcount(count - 1)
    }

    return (
        <div>
            <Container>
                <Button onClick={() => incre()}>Increment</Button>
                <h4>{count}</h4>
                <Button onClick={() => decre()}>Decrement</Button>
            </Container>
        </div>
    )
}

export default CounterCompo