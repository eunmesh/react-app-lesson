import React, {Component} from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SideBarLinks extends Component{

    constructor(props){
        super(props);
        this.Navlink = this.Navlink.bind(this);
        this.Navlink();
    }

     Navlink = (activeOnlyWhenExact,to, label)=> {
        return (
            <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=>(
                <div className={match ? "colorlib-active" : "" }>
                    {match ? "> " : ""}
                    <Link to={to}>{label}</Link>
                </div>
            )}
            />
        
        );
            }

    render(){
        return (

            <div>
                <Navlink activeOnlyWhenExact={true} to="/" label="Home" />
                <Navlink to="/about" label="About" />
        
            </div>
                
        
            
        
        
        );


    }


}




export default SideBarLinks;