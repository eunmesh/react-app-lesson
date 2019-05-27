import React, { Component } from 'react';

class Contact extends Component {

    render (){

        return(

            <div className="colorlib-contact">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-12">
                            <span className="heading-meta">Contact</span>
                            <h2 className="colorlib-heading" data-animate-effect="fadeInLeft">Where can you contact me</h2>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-5">
                            <div className="colorlib-feature colorlib-feature-sm" data-animate-effect="fadeInLeft">
                            <div className="colorlib-icon">
                                <i className="icon-mail" />
                            </div>
                            <div className="colorlib-text">
                                <p><a href="mailto:unmesh.patki@gmail.com" target="_top">Email me</a></p>
                            </div>
                            </div>
                          {/*   <div className="colorlib-feature colorlib-feature-sm" data-animate-effect="fadeInLeft">
                            <div className="colorlib-icon">
                                <i className="icon-map" />
                            </div>
                            <div className="colorlib-text">
                                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                            </div>
                            <div className="colorlib-feature colorlib-feature-sm" data-animate-effect="fadeInLeft">
                            <div className="colorlib-icon">
                                <i className="icon-phone" />
                            </div>
                            <div className="colorlib-text">
                                <p><a href="tel://">+123 456 7890</a></p>
                            </div>
                            </div> */}
                        </div>
                        </div>
                    </div>
            </div>

        );

    }
}

export default Contact;
