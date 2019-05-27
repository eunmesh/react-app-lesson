import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Sidebar extends Component {

    render() {
        return (
            <div>
            <Link to="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i/> </Link>

            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                {/* <h1 id="colorlib-logo"><a href="/"><span>Wo</span><span>rk</span></a></h1> */}
                <div id="colorlib-logo"><Link to="/"><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="My website's logo"></img></Link></div>
                <nav id="colorlib-main-menu" role="navigation">
                    <ul id="navbar">
                        <li className={(this.props.activeclass === "Home") ? "colorlib-active" : "" }><Link to="/">Home</Link></li>
                        <li className={(this.props.activeclass === "Work") ? "colorlib-active" : "" }><Link to="/work">UX Work</Link></li>
                        <li className={(this.props.activeclass === "About") ? "colorlib-active" : "" }><Link to="/about">About</Link></li>
                        <li className={(this.props.activeclass === "Art") ? "colorlib-active" : "" }><Link to="/paintings">Paintings</Link></li>
                        {/* <li className={(this.props.activeclass === "Blog") ? "colorlib-active" : "" }><Link to="/blog">Blog</Link></li>*/}
                        <li className={(this.props.activeclass === "Contact") ? "colorlib-active" : "" }><Link to="/contact">Contact</Link></li> 
                    </ul>
                </nav>

                <div className="colorlib-footer">
                    
                    <ul>
                    {/* <li><a href="#"><i className="icon-facebook2" /></a></li> */}
                    <li><a href="https://twitter.com/unmesh_patki" target="_blank"><i className="icon-twitter2" /></a></li>
                    <li><a href="https://www.instagram.com/unmesh.patki/" target="_blank"><i className="icon-instagram" /></a></li>
                    <li><a href="https://www.linkedin.com/in/unmesh-patki-4576bb8/" target="_blank"><i className="icon-linkedin2" /></a></li>
                    </ul>
                    <p><small>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved <br/>Theme by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  <span>Images crdit: <a href="http://unsplash.com" target="_blank">unsplash.com</a></span></small> </p>
                </div>
            </aside> 
            </div>
        );
    }
}

export default Sidebar;





