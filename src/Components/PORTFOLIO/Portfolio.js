import React from 'react';
import './Portfolio.css';
import {Card, Button} from 'react-bootstrap';
import bandImage from '../../images/001_1538653226.jpg';
import companyImage from '../../images/Münster,_LVM,_Bürogebäude_--_2013_--_5149-51.jpg';
import resImage from '../../images/d01dfa8621f83289155a3be0970fb0cb.jpg';


function Portfolio() {
    return (
        <section className='PORTFOLIO' id='PORTFOLIO'>
            <div className='container'>
                <h1 className='text-center'>MY <span> PORTFOLIO</span></h1>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 proj'>
                        <Card style={{backgroundColor:"black"}}>
                            <Card.Img variant="top" src={bandImage}/>
                            <Card.Body>
                            <Card.Title className='text-center' style={{color:"#08d665"}}>Band</Card.Title>
                            <Card.Text className='text-center' style={{color:"white"}}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className='BTN'><a href="https://mahmoud-satour.github.io/Band-Project/" target="blank">View</a></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-12 proj'>
                        <Card style={{backgroundColor:"black"}}>
                            <Card.Img variant="top"  src={companyImage}/>
                            <Card.Body>
                            <Card.Title className='text-center' style={{color:"#08d665"}}>Company</Card.Title>
                            <Card.Text className='text-center' style={{color:"white"}}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className='BTN'><a href="https://mahmoud-satour.github.io/Travel-company-project/" target="blank">View</a></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-12 proj'>
                        <Card style={{backgroundColor:"black"}}>
                            <Card.Img variant="top"  src={resImage} />
                            <Card.Body>
                            <Card.Title className='text-center' style={{color:"#08d665"}}>Restaurant</Card.Title>
                            <Card.Text className='text-center' style={{color:"white"}}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className='BTN'><a href="https://mahmoud-satour.github.io/Restaurant-Website-Project/" target="blank">View</a></Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
