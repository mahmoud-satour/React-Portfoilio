import React from 'react';
import './Home.css';
import {Button} from 'react-bootstrap';
import theImage from './../../images/banner.jpg'
function Home() {
    return (
        <section className='homeSec' id="HOME">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div className='jumbotron'>
                            <h1>HI THERE,</h1>
                            <h2>I'm a Mahmoud satour</h2>
                            <p>
                            I'm a Web Developer My expertise is to create and Websites design, graphic design and many more...
                            </p>
                            <p>
                            <Button className='Btn'>Hire Me</Button>
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <img src={theImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
