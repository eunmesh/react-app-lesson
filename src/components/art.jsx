import React, {Component} from 'react';
import './art.css';

class Art extends Component{

    render(){
            return(

                <div className="colorlib-blog">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                                <span className="heading-meta">Hobby</span>
                                <h2 className="colorlib-heading" data-animate-effect="fadeInLeft">My Paintings and Drawings</h2>
                            </div>
                        </div>

                        <div className="row artworks">
                            {/* painting 1 */}
                            <div className="col-md-3 col-sm-6 painting-wrapper" data-animate-effect="fadeInLeft">
                                <div className="blog-entry img-box">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img1.jpg'} className="img-responsive fit-img" alt="painting 1" />
                                    <div className="painting-desc">
                                        <p>Digital portrait on iPad. Can you guess who is this actress?</p>
                                    </div>
                                </div>
                                
                            </div>

                            {/* painting 2 */}
                            <div className="col-md-3 col-sm-6 painting-wrapper" data-animate-effect="fadeInLeft">
                                <div className="blog-entry img-box">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img2.jpg'} className="img-responsive fit-img" alt="painting 1" />
                                    <div className="painting-desc">
                                        <p>Watercolor sketch. Hartford Connecticut State Capitol building.</p>
                                    </div>
                                </div>
                            </div>

                            {/* painting 3 */}
                            <div className="col-md-3 col-sm-6 painting-wrapper" data-animate-effect="fadeInLeft">
                                <div className="blog-entry img-box">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img3.jpg'} className="img-responsive fit-img" alt="painting 1" />
                                    <div className="painting-desc">
                                        <p>My attempt at impressionism style painting (on iPad).</p>
                                    </div>
                                </div>
                            </div>

                            {/* painting 4 */}
                            <div className="col-md-3 col-sm-6 painting-wrapper" data-animate-effect="fadeInLeft">
                                <div className="blog-entry img-box">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img4.jpg'} className="img-responsive fit-img" alt="painting 1" />
                                    <div className="painting-desc">
                                        <p>Self portrait. Digital painting.</p>
                                    </div>
                                </div>
                            </div>

                            {/* painting 5 */}
                            <div className="col-md-3 col-sm-6 painting-wrapper" data-animate-effect="fadeInLeft">
                                <div className="blog-entry img-box">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img5.jpg'} className="img-responsive fit-img" alt="painting 1" />
                                    <div className="painting-desc">
                                        <p>Tried this portrait when I installed a new set of oil brushes on Procreate App.</p>
                                    </div>
                                </div>
                            </div>

                            {/* painting 6 */}
                            <div className="col-md-3 col-sm-6 painting-wrapper" data-animate-effect="fadeInLeft">
                                <div className="blog-entry img-box">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img6.jpg'} className="img-responsive fit-img" alt="painting 1" />
                                    <div className="painting-desc">
                                        <p>When I have to wait at a parking lot, I take out my color kit and practise a quick pleinair. (location: Avon, CT)</p>
                                    </div>
                                </div>
                            </div>

                            {/* painting 7 */}
                            <div className="col-md-3 col-sm-6 painting-wrapper" data-animate-effect="fadeInLeft">
                                <div className="blog-entry img-box">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img7.jpg'} className="img-responsive fit-img" alt="painting 1" />
                                    <div className="painting-desc">
                                        <p>A portrait work from a photo reference.</p>
                                    </div>
                                </div>
                            </div>

                            {/* painting 8 */}
                            <div className="col-md-3 col-sm-6 painting-wrapper" data-animate-effect="fadeInLeft">
                                <div className="blog-entry img-box">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img8.jpg'} className="img-responsive fit-img" alt="painting 1" />
                                    <div className="painting-desc">
                                        <p>Another study from a parking lot. Digital oil painting.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        
                    </div>
                </div>
            );
    }
}

export default Art;