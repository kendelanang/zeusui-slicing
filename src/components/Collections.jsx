import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import im from '../assets/Image.svg'
import im1 from '../assets/Image-1.svg'
import im2 from '../assets/Image-2.svg'
import im3 from '../assets/Image-3.svg'
import im4 from '../assets/Image-4.svg'
import im5 from '../assets/Image-5.svg'
import im6 from '../assets/Image-6.svg'
import im7 from '../assets/Image-7.svg'
import im8 from '../assets/Image-8.svg'

const Collections = () => {

    const projects = [
        {
            id: "0",
            photo: im,
            author: "Moonbirds",
            text: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit."
        },
        {
            id: "1",
            photo: im1,
            author: "Clone X - X Takashi Murakami",
            text: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac."
        },
        {
            id: "2",
            photo: im2,
            author: "Mutant Ape Yacht Club",
            text: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus."
        },
        {
            id: "3",
            photo: im3,
            author: "MOAR by Joan Cornella",
            text: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit."
        },
        {
            id: "4",
            photo: im4,
            author: "Doodles",
            text: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac."
        },
        {
            id: "5",
            photo: im5,
            author: "KIWAMI Genesis",
            text: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus."
        },
        {
            id: "6",
            photo: im6,
            author: "Arcade Land",
            text: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit."
        },
        {
            id: "7",
            photo: im7,
            author: "Goons of Balatroon",
            text: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac."
        },
        {
            id: "8",
            photo: im8,
            author: "Meta Toy DragonZ",
            text: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus."
        },
    ];
    return (
        <>
            <section>
                <div className='_collectionscontainer'>
                    <h1>
                        Hottest Collections
                    </h1>
                    <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
                </div>

                <div className='_cardcontainer'>
                    <Row xs={1} md={3} lg={3} className="g-4">
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
        </>
    )
}

export default Collections