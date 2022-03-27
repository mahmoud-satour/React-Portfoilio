import React from 'react';
import './Services.css';
import webImage from '../../images/webdesgin.jpg'

function Services() {
    return (
        <section id='SERVICES' >
            <div className='container'>
                <h1 className='text-center'>MY <span>SERVICES</span></h1>
                <div className='row'>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
                        <div className='box'>
                            <img src={webImage} alt='' className='img-fluid'/>
                            <h4>WEB DESIGN</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor et congue felis laoreet ac</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
                        <div className='box'>
                            <img src={webImage} alt='' className='img-fluid'/>
                            <h4>DEVELOPMENT</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor et congue felis laoreet ac</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
                        <div className='box'>
                            <img src={webImage} alt='' className='img-fluid'/>  
                            <h4>RESPONSIVE DESIGN</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor et congue felis laoreet ac</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
                        <div className='box'>
                            <img src={webImage} alt='' className='img-fluid'/>
                            <h4>SUPPORT</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor et congue felis laoreet ac</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
