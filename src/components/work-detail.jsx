import React, { Component } from 'react';
import './work-detail.css'


class Work_Detail extends Component {

render(){

    return(

        <div className="colorlib-work">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                    <span className="heading-meta">Portfolio</span>
                    <h2 className="colorlib-heading" data-animate-effect="fadeInLeft">UX Research: Business Account Origination</h2>
                </div>
                </div>
                <div className="row">
                <div className="col-md-8">
                    <p>
                                <strong>Role:</strong> Sr. Usability Specialist <br/>
                                <strong>Client:</strong> Leading bank in South Africa <br/>
                                <strong>Year:</strong> 2012
                    </p>
                    <p>
                    We worked with the client, a leading bank in South Africa, on user research to inform the design of the account origination experience for their personal and business customers. 
Our team (my designer colleague and I) focused on the business customers (and another team focusing personal account origination).
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
                        <br/>
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
                        We prepared a discussion guide for the interviews. We covered 36 participants over two weeks. We limited our interviews to maximum of four per day. At the end of each day my colleague and I used to debrief the findings and collate the notes.
                        </p>
                        <img className="img-responsive work-img" src= {process.env.PUBLIC_URL + '/images/work-1_img-3.jpg'} alt="HTML5 Bootstrap Template by colorlib.com" />  
                        <br/>
                        <h3 className="colorlib-heading">Findings:</h3>
                        <p>
                            Three user groups resonated the same behavior and expectations from the bank. The main finding was "Dont treat me just a number"
                            
                            <br/><strong>Startup Users: </strong> Trust me, help me establish my business.
                            Expect funding, advice and networking platform
                            <br/><strong>Lifestyle Users:</strong> Guide me to sustain.
                            Sensitive to specifics of offerings (e.g. fees)
                            Expect bank to provide business support function (e.g. payroll  mgmt)
                            <br/><strong>Entrepreneur:</strong> Understand me, my business and support the ecosystem
                            Expect extra support (e.g. loans for their subcontractors)
                            <br/>
                            <strong>Expectations from AO Process:</strong><br/>
                            Make it quick and easy. <br/>
                            Don’t make me wait in a queue. <br/>
                            Don’t overwhelm me with options (products and service) and paperwork.<br/>
                            Help me find and select the option that’s right for me.<br/>
                            Explain to me what I’m getting into and what that will mean for my business.<br/>
                            Keep it specific to my business—don’t mix it with my personal account.<br/>
                            Give me a sense of control.<br/>
                            Tell me what benefits I can have.<br/>
                            Be transparent about the charges I pay and the interest I receive.<br/>
                            Don’t create work for my customers.<br/>
                            Tell me how best to use my business account.<br/>
                            Allow me to perceive the bank’s service and support structures.<br/>
                            Assure me that the bank will stand by my side in my time of need.<br/>
                            Provide value over and above the account and services: e.g. discounted vacations, iPad.<br/>
                            Be consistent and knowledgeable about your offerings.<br/>

                            <br/>
                            The information gathered from the interviews helped the team to lay the foundational understanding on our users to inform the wireframe design. 
                            Below is the summary of the key expectations from the three user groups, which helped us further to create persona.

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