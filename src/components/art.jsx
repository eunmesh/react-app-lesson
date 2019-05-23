import React, {Component} from 'react';
import './art.css';

class Art extends Component{

    render(){
            return(

                <div className="colorlib-blog">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                                <span className="heading-meta">Look At</span>
                                <h2 className="colorlib-heading" data-animate-effect="fadeInLeft">Artwork</h2>
                            </div>
                        </div>

                        <div className="row artworks">
                            {/* painting 1 */}
                            <div className="col-md-4 col-sm-6" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img1.jpg'} className="img-responsive" alt="painting 1" />
                                </div>
                            </div>

                            {/* painting 2 */}
                            <div className="col-md-4 col-sm-6" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img2.jpg'} className="img-responsive" alt="painting 1" />
                                </div>
                            </div>

                            {/* painting 3 */}
                            <div className="col-md-4 col-sm-6" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img3.jpg'} className="img-responsive" alt="painting 1" />
                                </div>
                            </div>

                            {/* painting 4 */}
                            <div className="col-md-4 col-sm-6" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img4.jpg'} className="img-responsive" alt="painting 1" />
                                </div>
                            </div>

                            {/* painting 5 */}
                            <div className="col-md-4 col-sm-6" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img5.jpg'} className="img-responsive" alt="painting 1" />
                                </div>
                            </div>

                            {/* painting 6 */}
                            <div className="col-md-4 col-sm-6" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img6.jpg'} className="img-responsive" alt="painting 1" />
                                </div>
                            </div>

                            {/* painting 7 */}
                            <div className="col-md-4 col-sm-6" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img7.jpg'} className="img-responsive" alt="painting 1" />
                                </div>
                            </div>

                            {/* painting 8 */}
                            <div className="col-md-4 col-sm-6" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <img src={process.env.PUBLIC_URL + '/images/art-img8.jpg'} className="img-responsive" alt="painting 1" />
                                </div>
                            </div>

                        </div>

                        
                    </div>
                </div>
            );
    }
}

export default Art;