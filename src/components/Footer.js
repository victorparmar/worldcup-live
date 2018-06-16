import React from "react";

import "./Footer.css";

const Footer = props => {
  return (
    <div className="container wc-footer">
      <div className="wc-footer-text">
        Made with ❤ by Victor Parmar <br />
        Version {props.version}
      </div>
    </div>
  );
};

export default Footer;
