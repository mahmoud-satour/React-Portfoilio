import React from 'react';
import './About.css';
import Image2 from './../../images/about.jpg'

function About() {
    return (
        <section className='about' id='ABOUT'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <img src={Image2}  alt=''/>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <h1 className='mainheader'>Hello, I Am <span>React Developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere. Ut aliquam metus quis laoreet elementum. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Aliquam porta faucibus arcu, et consequat velit vestibulum in. Donec quis tellus ut urna volutpat posuere quis consectetur quam.</p>
                        <div className='info'>
                            <div><span>Name <span style={{marginLeft:"20px"}}>: <span>Mahmoud Satour</span></span></span></div>
                            <div><span>Age <span style={{marginLeft:"37px"}}>: <span>24</span></span></span></div>
                            <div><span>Address <span style={{marginLeft:"5px"}}>: <span>Mansoura,Egypt</span></span></span></div>
                            <div><span>Phone <span style={{marginLeft:"23px"}}>: <span>01012930303</span></span></span></div>
                            <div><span>e-mail <span style={{marginLeft:"25px"}}>: <span>mahmoudsatour98@gmail.com</span></span></span></div>
                            <div><span>Freelance <span style={{marginLeft:""}}>: <span>Available</span></span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
