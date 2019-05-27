import React, { Component } from 'react';
import './work-detail.css'


class Work_Detail extends Component {

render(){

    return(

        <div className="colorlib-work">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-7">
                    <span className="heading-meta">What I do</span>
                    <h2 className="colorlib-heading" data-animate-effect="fadeInLeft">Business Account Origination: User Research</h2>
                </div>
                </div>
                <div className="row">
                <div className="col-md-7">
                    <p>
                                <strong>Role:</strong> Sr. Usability Specialist <br/>
                                <strong>Client:</strong> Leading bank in South Africa <br/>
                                <strong>Year:</strong> 2012
                    </p>
                    <p>
                    Our client bank was working on a project to offer an online account origination experience for their new customers - efficient and smart process. The competition banks were using freebies as a tool to attract new users as one of their strategies. 
                    </p><p>We adopted the UCD appraoch to get initial direction in the project by conducting user search to understand what do the business user segment think of the bank selection and account origination; what are their influencing factors behind selecting or switching a bank account along with the pain points.</p>
                    <p>I worked on preparing and conducting usability interviews (as a part of one team along with a designer colleague), to understand their mental model, expectations and pain points etc. and the other team focused on PET (Persuasion, Emotion and Trust) interviews, to find out underlying drives and blocks for the users.
                    We derived valuable insights in what our users' experactations are from the bank's business account origination.
                    </p>
                    <h3 className="colorlib-heading">
                    Activities:
                    </h3>
                    <ul>
                    <li>We collaborated with the key stakeholders to understand their perspective and expectations from Business Account Origination.</li>
                    <li>We conducted in-person user interviews (36 numbers) with the small business owners to understand their views on online account origination.</li>
                    <li>We synthesized the information received, reported back our insights to the stakeholders along with the next steps.</li>
                    </ul>
                    <br/>
                    <h3 className="colorlib-heading">Target Audience:</h3>
                    <p>After talking to the SMEs we categorized the business users into three segments - Start-ups, Lifestyle customers and Entrepreneurs. We wanted to understand if they correctly repsent the user groups and represent the common atttitude and behaviour. 
                        </p>
                        <img className="img-responsive work-img" src= {process.env.PUBLIC_URL + '/images/work-1_img-2.jpg'} alt="HTML5 Bootstrap Template by colorlib.com" />  
                        <br/>
                        <h3 className="colorlib-heading">Research:</h3>
                        <p>
                        We conducted lab-based in-person interviews with 36 participants. The research approach was a mix of exploratory research and evaluative research. The research included three segments:
                        </p>
                        <ul>
                            <li>Needs analysis research</li>
                            <li>Account origination process research</li>
                            <li>Early testing of high-level design concept</li>
                        </ul>
                        <img className="img-responsive work-img" src= {process.env.PUBLIC_URL + '/images/work-1_img-1.jpg'} alt="HTML5 Bootstrap Template by colorlib.com" />  
                        <br/>
                        <h3 className="colorlib-heading">Research Focus Areas:</h3>
                        <ul>
                            <li>Needs and expectations from business banking account</li>
                            <li>Criteria for selection of a bank</li>
                            <li>Support expected from the bank for business</li>
                        </ul><p>
                        We prepared a discussion guide for the interviews. We covered 36 participants over two weeks. We limited our interviews to maximum of four per day. At the end of each day my colleague and I used to discuss our internences.
                        </p>
                        <img className="img-responsive work-img" src= {process.env.PUBLIC_URL + '/images/work-1_img-3.jpg'} alt="HTML5 Bootstrap Template by colorlib.com" />  
                        <br/>
                        <h3 className="colorlib-heading">Findings:</h3>
                        <p>
                            In just few initial interviews we started hearing a common theme from our participants - "how can your bank help my business".  Our main finding was "Dont treat me just a number"
                            </p>
                            <blockquote>“Show me that you understand and trust me, and tell me how you can help 
                                my business.”
                                </blockquote>
                            
                            <p>
                                Under the "how can your bank help my business, there were different clear expectations from different user groups:
                                <br/><strong>Startup Users: </strong> Trust me, help me establish my business.
                            Expect funding, advice and networking platform
                            <br/><strong>Lifestyle Users:</strong> Guide me to sustain.
                            Sensitive to specifics of offerings (e.g. fees)
                            Expect bank to provide business support function (e.g. payroll  mgmt)
                            <br/><strong>Entrepreneur:</strong> Understand me, my business and support the ecosystem
                            Expect extra support (e.g. loans for their subcontractors)
                            <br/><br/>
                            <h4>Expectations from Acount OriginationProcess:</h4>
                            We derived clear actionable insights from their expectations from account origination. Few of which are:
                            <ul>
                                <li>Make it quick and easy.</li>
                                <li>Don’t make me wait in a queue.</li>
                                <li>Don’t overwhelm me with options (products and service) and paperwork.</li>
                                <li>Help me find and select the option that’s right for me.</li>
                                <li>Explain to me what I’m getting into and what that will mean for my business.</li>
                                <li>Keep it specific to my business—don’t mix it with my personal account.</li>
                                <li>Give me a sense of control.</li>
                                <li>Tell me what benefits I can have.</li>
                                <li>Be transparent about the charges I pay and the interest I receive.</li>
                                <li>Don’t create work for my customers.</li>
                                <li>Tell me how best to use my business account.</li>
                                <li>Allow me to perceive the bank’s service and support structures.</li>
                                <li>Assure me that the bank will stand by my side in my time of need.</li>
                                <li>Be consistent and knowledgeable about your offerings.</li>
                            </ul>
                            <p> The information gathered from the interviews helped us understand our user group segments better, which further helped us inform the wireframe design. 
                                Below is the summary of the key expectations from the three user groups. The personas created from this knowledge and the wireframes are not included in this case study. 
                            </p>
                        </p>
                        <img className="img-responsive work-img" src= {process.env.PUBLIC_URL + '/images/work-1_img-4.jpg'} alt="HTML5 Bootstrap Template by colorlib.com" />  
                </div>
                
                </div>
            </div>
        </div>
    );
}

}

export default Work_Detail;