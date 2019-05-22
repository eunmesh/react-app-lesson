import React, {Component} from 'react';
import './about.css';
import {Link} from 'react-router-dom'

class About extends Component{

render(){
    return(
        <div>
            {/* animate-box removed from line#15 and 20 */}
            <div className="colorlib-about">
                    <div className="container-fluid">
                        <div className="row">
                        {/* <div className="col-md-5">
                            <div className="" data-animate-effect="fadeInLeft"> <img className="about-img" alt="My Awesome Selfie" src={process.env.PUBLIC_URL + '/images/unmesh-selfie.png'}/></div>
                                
                            <div className="col-md-12 btn-center"><Link to="/images/Resume.pdf" class="btn btn-primary btn-learn" target="_blank" >Download CV!</Link></div>
                          
                        </div> */}


                        {/* removed "in" from classname on line 57 from panel 1 */}
                        <div className="col-md-4"></div>
                        <div className="col-md-7" data-animate-effect="fadeInLeft">
                            <div className="about-desc">
                            <span className="heading-meta">Dear Visitor</span>
                            <h3>Hi! My name is Unmesh Patki!</h3>
                            
                        
                                <ul>
                                    <li> I am a <strong>UX design professional</strong>.</li>
                                    <li> More than 14 years of experience in IT service and product industry.<strong>I help enterprise product design and development teams create powerful, valuable and profitable user experiences</strong>. </li>           
                                </ul>
                             
                                <strong>Experience Highlights</strong>:
                                <ul>

                                    <li>Experience leading UX design efforts comprising <strong>“Research to Implementation”</strong> phases to deliver online experiences that increase customer engagement and maximize business goals.</li>
                                    <li>Have completed and contributed to several projects including <strong>website and mobile designs</strong> for insurance, banking/finance and telecommunication domains.
                                    </li>
                                    <li>Experience working in <strong>SAFe agile</strong> development methodology. Ability to communicate design concepts across different audiences - stakeholder, product owner, business analyst and developer.
                                    </li>
                                    <li>Have <strong>Usability analyst certification (CUA)</strong> with Human Factors International in 2008. </li>
                                </ul>


                            
                            

                            </div>
                            <div className="fancy-collapse-panel">
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Education
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse out" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    
                                        <div className="col-md-12">
                                        <p>Indian Institute of Science, India
                                        <br/>
                                        M.Des Product Design, 2001–2003 <br/>
                                        Project based learning involving elements of design, visual design, user research, ergonomics, tangible interactions, prototyping and testing methods.
                                        </p>
                                        </div>
                                        
                                    
                                    </div>
                                </div>
                                </div>
                                <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">My Specialities
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                    
                                        <div className="col-md-8">
                                        <p>Design Research, Design thinking, Persona and scenario development, Wireframes, Prototyping, Usability Testing, Collaborative Design with Agile Teams</p>
 
                                        </div>
                                        
                                    
                                    </div>
                                </div>
                                </div>
                                <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">My hobbies - art | reading
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                    <p>I love doing plein-air paintings. I carry my art-toolkit with me — iPad or watercolor kit or sketchbook. I love doing landscapes or cityscapes in watercolor. 
                                            I also love to explore the concepts in maths, physics or science in general. I love to read about scientists to get inspired. </p>
                                            <p> <strong>Few of my favorite books are:</strong>
                                            </p>
                                    <ul>
                                        <li>Surely You’re Joking, Mr. Feynman!</li>
                                        <li>E: The Story of a Number</li>
                                        <li>E=Mc2: A Biography of the World’s Most Famous Equation</li>
                                        <li>100 things every designer needs to know about people</li>
                                        <li>Predictably Irrational: The Hidden Forces That Shape Our Decisions</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="row">
                            <div className="col-md-12 btn-center"><Link to="/images/Resume.pdf" class="btn btn-primary btn-learn" target="_blank" >Download CV!</Link></div>
                            </div>

                            
                        </div>
                        </div>

                         

                       


                    </div>
                </div>

        </div>          
    );
}

}


export default About;