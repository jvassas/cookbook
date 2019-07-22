import React, { Component } from "react";
import { Link } from "react-router-dom";

import SearchResultContainer from "../search/results";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h2>{" "}
              <span style={{ fontFamily: "monospace" }}>CookBook</span> 
            </h2>
            <p className="flow-text grey-text text-darken-1">
              Tasty recipes for every ingredient
            </p>
            
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable red accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable grey accent-3"
              >
                Log In
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/search"
                style={{
                  width: "300px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "60px",
                  marginRight: "50%",
                  marginLeft: "50%"
                  
                  
                }}
                
                className="btn btn-large btn-flat waves-effect white black-text"
              >
              
                Search Ingredients
              </Link>
            </div>
            <br></br>
            {/* <SearchResultContainer /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
