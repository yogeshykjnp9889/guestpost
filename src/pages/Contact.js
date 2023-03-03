import React from "react";

const Contact = () => {

    return(
        <>
            <div className='cm-position-relative'>
                <img src='images/photo-galleery1-bg.jpg' alt='' />
                <div className='cm-position-absolute hero-section-inner'>
                    <h3>Contact US</h3>
                </div>
            </div>
            <section className="cm-section">
                <div className="cm-page-center">
                    <div className="cm-txt-center">
                        <h1>Leave us Your Info</h1>
                        <div className='bar'></div>
                        <div className="cm-wd-50 cm-mlr-auto">
                            <p>Lorem ipsum dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp a qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                    <div className="cm-mtb-30 contact-form">
                        <div className="cm-flex-type-1">
                            <div className="form-group">
                                <input type="text" className="form-control"  placeholder="Name*" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control"  placeholder="Email*" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control"  placeholder="Phone No*" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control"  placeholder="Website*" />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea name="" rows={7} className="form-control" placeholder="Mesage*"></textarea>
                        </div>
                        <div className="cm-txt-center form-group">
                            <input type='submit' className="cm-submit-btn" value="SEND MESSAGE" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14352.59939410798!2d82.63726518799402!3d25.93030408449278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990414b73659d0d%3A0x297597bbfd573a79!2sDidkhora%2C%20Uttar%20Pradesh%20222139!5e0!3m2!1sen!2sin!4v1667719482477!5m2!1sen!2sin" height="600px" width="100%" border="0" title="myFrame"> frame body </iframe>
            </section>
        </>
    );
}

export default Contact;