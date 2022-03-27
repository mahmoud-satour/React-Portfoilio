import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className='contact' id='CONTACT'>
            <div className='container'>
                <h1 className='text-center'>CONTACT <span> US</span></h1>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <form style={{marginTop:"80px"}}>
                            <input type='text' placeholder='Name' style={{width:"100%",marginBottom:"20px"}}/>
                            <input type='email' placeholder="Email"  style={{width:"45%"}}/>
                            <input type='email' placeholder="Subject"  style={{width:"45%" ,marginLeft:"10%"}}/>
                            <textarea style={{width:"100%",margin:"20px 0px"}} placeholder='Your Message'></textarea>
                            <button>Send Message</button>
                        </form>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <div className='box2'>
                        <h4>CONTACT ADDRESS</h4>
                        <div><i className="fas fa-map-marker-alt"></i>Mansoura, Egypt</div>
                        <div><i className="fas fa-envelope"></i>mahmoudsatour98@gmail.com</div>
                        <div><i className="fas fa-phone-alt"></i>01012930303</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
