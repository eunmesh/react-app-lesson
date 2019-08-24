import React, {Component} from 'react';
import './introduction.css';
import { Link } from 'react-router-dom';


class Introduction extends Component {

    render() {
        return (
            <div>
               {/* animate-box className removed from line number 15 and 17 and all pages load successfully*/}
                <div className="colorlib-about js-fullheight color-panel">
                    <div className="container-fluid">
                        <div className="row">
                        {/* <div className="col-md-2">
                            <div className="" data-animate-effect="fadeInLeft"><img className="about-img" src={process.env.PUBLIC_URL + '/images/unmesh-selfie.svg'}/></div>
                        </div> */}
                        <div className="col-md-12 place-center" data-animate-effect="fadeInLeft">
                            <div className="about-desc intro-text">

                            <div className="" data-animate-effect=""><img className="about-img" src={process.env.PUBLIC_URL + '/images/unmesh-selfie.svg'}/></div>
                            <br/>
                            {/* <span className="heading-meta">Welcome</span> */}
                            <h3>Hi. I'm Unmesh.</h3>
                            
                            <ul className="intro-list-skills">
                                <li><strong>I DESIGN.</strong></li>
                                <li><strong>I DRAW.</strong></li>
                                <li><strong>I READ.</strong></li>                            
                            </ul>
                            <Link to="/about" className="lead">Read More About Me <i className="icon-arrow-right3"></i></Link>
                            
                            </div>





                            {/* <div className="fancy-collapse-panel">
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">I Design
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse out" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                        </div>
                                        <div className="col-md-6">
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">I Draw
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                    <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <ul>
                                        <li>Separated they live in Bookmarksgrove right</li>
                                        <li>Separated they live in Bookmarksgrove right</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">I Read
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                    <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div> */}
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        );
    }

}    

export default Introduction;