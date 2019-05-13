import React, {Component} from 'react';


class Sidebar extends Component {

    render() {
        return (
            <div>
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /> </a>

            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                {/* <h1 id="colorlib-logo"><a href="index.html"><span>Wo</span><span>rk</span></a></h1> */}
                <div id="colorlib-logo"><a href="index.html"><img src="./images/my-logo.png"></img></a></div>
                <nav id="colorlib-main-menu" role="navigation">
                    <ul>
                    <li className="colorlib-active"><a href="index.html">Home</a></li>
                    <li><a href="work.html">Work</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Art</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
                <div className="colorlib-footer">
                    
                    <ul>
                    <li><a href="#"><i className="icon-facebook2" /></a></li>
                    <li><a href="#"><i className="icon-twitter2" /></a></li>
                    <li><a href="#"><i className="icon-instagram" /></a></li>
                    <li><a href="#"><i className="icon-linkedin2" /></a></li>
                    </ul>
                    <p><small>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved <br/>Theme by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  </small> </p>
                </div>
            </aside> 
            </div>
        );
    }
}

export default Sidebar;





