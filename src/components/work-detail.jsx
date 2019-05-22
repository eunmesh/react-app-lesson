import React, { Component } from 'react';
import './work-detail.css'


class Work_detail extends Component {

render(){

    return(

        <div className="colorlib-work">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                    <span className="heading-meta">Portfolio</span>
                    <h2 className="colorlib-heading animate-box" data-animate-effect="fadeInLeft">UX Research: Business Account Origination</h2>
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
                    We worked with the client -- a leading bank in South Africa -- on research to inform the redesign of the account origination experience for their personal and business customers. 
A team of two designers -- my designer colleague and I -- were formed to focus on the business customers (and another team focusing personal account origination)
                    </p>
                    <h3 className="colorlib-heading">
                    Activities:
                    </h3>
                    <ul>
                    <li>We collaborated with the key stakeholders to understand their perspective and expectations from Business Account Origination.</li>
                    <li>We conducted in-person user interviews (36 numbers) with the small business owners to understand their views around online account origination.</li>
                    <li>We synthesized the information received from the users. Reported back our insights to the stakeholders along with the next steps.</li>
                    </ul>
                    <br/>
                    <h3 className="colorlib-heading">Target Audience:</h3>
                    <p>ter talking to the SMEs we categorized the business users into three segments. The idea was to use the insights to inform the early design decisions and to create user persona so that we can conduct formative usability testing in the next phase of the project.
                        </p>
                        <img className="img-responsive work-img" src= {process.env.PUBLIC_URL + '/images/work-1_img-1.jpg'} alt="HTML5 Bootstrap Template by colorlib.com" />  
                        <br/>
                        <h3 className="colorlib-heading">Research:</h3>
                        <br/>
                        <p>
                        We conducted in-person lab based interview method to discuss with the participants. The research approach was a mix of exploratory research and evaluative research.
                        </p>
                        <ul>
                            <li>Needs analysis research</li>
                            <li>Account origination process research</li>
                            <li>Early testing of high-level design concept</li>
                        </ul>
                        <img className="img-responsive work-img" src= {process.env.PUBLIC_URL + '/images/work-1_img-2.jpg'} alt="HTML5 Bootstrap Template by colorlib.com" />  
                        <br/>
                        <h3 className="colorlib-heading">Research Focus Areas:</h3>
                        <ul>
                            <li>Needs and expectations from business banking account</li>
                            <li>Criteria for selection of a bank</li>
                            <li>Support expected from the bank for business</li>
                        </ul>
                        <img className="img-responsive work-img" src= {process.env.PUBLIC_URL + '/images/work-1_img-3.jpg'} alt="HTML5 Bootstrap Template by colorlib.com" />  
                        <br/>
                        <h3 className="colorlib-heading">Findings:</h3>
                        <p>
                                Expectations from user groups
                            Startup Users   : Trust me, help me establish my business
                            Expect funding, advice and networking platform
                            Lifestyle Users  : Guide me to sustain
                            Sensitive to specifics of offerings (e.g. fees)
                            Expect bank to provide business support function (e.g. payroll  mgmt)
                            Entrepreneur   : Understand me, my business and support the ecosystem
                            Expect extra support (e.g. loans for their subcontractors)

                            Expectations from AO Process
                            Make it quick and easy
                            Don’t make me wait in a queue
                            Don’t overwhelm me with options (products and service) and paperwork
                            Help me find and select the option that’s right for me
                            Explain to me what I’m getting into and what that will mean for my business
                            Keep it specific to my business—don’t mix it with my personal account
                            Give me a sense of control
                            Tell me what benefits I can have
                            Be transparent about the charges I pay and the interest I receive
                            Don’t create work for my customers
                            Tell me how best to use my business account
                            Allow me to perceive the bank’s service and support structures
                            Assure me that the bank will stand by my side in my time of need
                            Provide value over and above the account and services: e.g. discounted vacations, iPad
                            Be consistent and knowledgeable about your offerings


                            The theme that stood out from the user interviews helped the team to lay the foundational understanding of the users to inform the design formation. 
                            Below is the summary of the key expectations from the three user groups. (This case study is not intended to cover how the research finding influenced the design decisions)

                        </p>
                        <img className="img-responsive work-img" src= {process.env.PUBLIC_URL + '/images/work-1_img-4.jpg'} alt="HTML5 Bootstrap Template by colorlib.com" />  
                </div>
                
                </div>
            </div>
        </div>
    );
}

}

export default Work_detail;