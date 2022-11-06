import React from 'react'
import log from '../assets/Vector.svg'
import log1 from '../assets/Vector-1.svg'
import log2 from '../assets/Vector-2.svg'
import log3 from '../assets/Vector-3.svg'
import { Card, Col, Row } from 'react-bootstrap'

const Provide = () => {
    const projects = [
        {
            id: "0",
            photo: log,
            author: "Host your NFTs",
            text: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
        },
        {
            id: "1",
            photo: log1,
            author: "See your sales",
            text: "Integer ante non nunc, eget est justo vel semper nunc. Lacus "
        },
        {
            id: "2",
            photo: log2,
            author: "Secure wallet",
            text: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
        },
        {
            id: "3",
            photo: log3,
            author: "No scam",
            text: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
        },
    ];
    return (
        <section>
            <div className='_providecontainer'>
                <h1>
                    We Provide
                </h1>
                <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
            </div>

            <div className='_cardprovidecontainer'>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {projects.map((e, id) => (
                        <Col>
                            <Card key={id} className="border-0">
                                <Card.Img variant="top" src={e.photo} />
                                <Card.Body>
                                    <Card.Title>{e.author}</Card.Title>
                                    <Card.Text>
                                        {e.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    )
}

export default Provide