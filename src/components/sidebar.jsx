import React, {Component} from 'react';


class Sidebar extends Component {
    /* constructor(props){
        super(props);

        active-classname;
    } */


    render() {
        return (
            <div>
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /> </a>

            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                {/* <h1 id="colorlib-logo"><a href="/"><span>Wo</span><span>rk</span></a></h1> */}
                <div id="colorlib-logo"><a href="/"><img src="/images/my-logo.png"></img></a></div>
                <nav id="colorlib-main-menu" role="navigation">
                    <ul>
                    <li className={(this.props.activeclass == "Home") ? "colorlib-active" : "" }><a href="/">Home</a></li>
                    <li className={(this.props.activeclass == "Work") ? "colorlib-active" : "" }><a href="/work">Work</a></li>
                    <li className={(this.props.activeclass == "About") ? "colorlib-active" : "" }><a href="/about">About</a></li>
                    <li className={(this.props.activeclass == "Art") ? "colorlib-active" : "" }><a href="/art">Art</a></li>
                    <li className={(this.props.activeclass == "Blog") ? "colorlib-active" : "" }><a href="/blog">Blog</a></li>
                    <li className={(this.props.activeclass == "Contact") ? "colorlib-active" : "" }><a href="/contact">Contact</a></li>
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





