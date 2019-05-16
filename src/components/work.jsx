import React, {Component} from 'react';
import './work.css';

class Work extends Component{

    render(){
        
        
        return(

                // animate-box removed from line #17,22 and 38
                <div className="colorlib-work">
                <div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<span className="heading-meta">Portfolio</span>
							<h2 className="colorlib-heading" data-animate-effect="fadeInLeft">My Work</h2>
						</div>
					</div>

                    <div className="row">
                        <div className="col-md-6" data-animate-effect="fadeInLeft">
                            <div className="project">
                            <img className="project_image" src = {process.env.PUBLIC_URL + '/images/work-1.jpg'}></img>
                            <div className="desc">
                                <div className="con">
                                <h3><a href="work-single.html">Work 01</a></h3>
                                <span>Branding, Ilustration</span>
                                <p className="icon">
                                    <span><a href="#"><i className="icon-share3" /></a></span>
                                    <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                    <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInLeft">
                            <div className="project">
                            <img className="project_image" src = {process.env.PUBLIC_URL + '/images/work-2.jpg'}></img>
                            <div className="desc">
                                <div className="con">
                                <h3><a href="work-single.html">Work 02</a></h3>
                                <span>Logo, Web, Branding</span>
                                <p className="icon">
                                    <span><a href="#"><i className="icon-share3" /></a></span>
                                    <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                    <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>

        

        );
    }
}

export default Work;
