import React from 'react'
import prof from '../assets/80px.svg'
import prof1 from '../assets/80px-1.svg'
import prof2 from '../assets/80px-2.svg'
import prof3 from '../assets/80px-3.svg'
import { Card, Col, Row } from 'react-bootstrap'

const Team = () => {

    const projects = [
        {
            id: "0",
            photo: prof,
            author: "Guy Hawkins",
            text: "CEO"
        },
        {
            id: "1",
            photo: prof1,
            author: "Jane Cooper",
            text: "COO"
        },
        {
            id: "2",
            photo: prof2,
            author: "Darrell Steward",
            text: "CTO"
        },
        {
            id: "3",
            photo: prof3,
            author: "Dianne Russell",
            text: "CDO"
        },
    ];

    return (
        <section>
            <div className='_teamcontainer'>
                <h1>
                    Our Team
                </h1>
                <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
            </div>

            <div className='_cardteamcontainer'>
                <Row xs={2} md={4} lg={4} className="g-4">
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

export default Team