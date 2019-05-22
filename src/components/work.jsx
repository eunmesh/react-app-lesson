import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="project">
                            <img className="project_image" src = {process.env.PUBLIC_URL + '/images/work-1.jpg'}></img>
                            <div className="desc">
                                <div className="con">
                                <h3 className="work-title"><Link to="/work/work_detail">UX Research: Business Account Origination</Link></h3>
                                <span>UX Research</span>
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
                                <h3><Link to="/about">Work 02</Link></h3>
                                <span>Web app design</span>
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
