import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
function Header() {
    return (
      <div id="header">
        <div className="clearfix">
          <div className="logo">
            <a href="/">
              <img src="images/logo.png" alt="LOGO" height="52" width="362" />
            </a>
          </div>
          <ul className="navigation">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
            <Link to="/gan/sketch">Pix2Pix GAN</Link>
            </li>
                
            <li>
            <Link to="/gan/colorgan">Color GAN</Link>
            </li>
            <li>
            <Link to="/gan/dcgan">DC GAN</Link>
            </li>
            <li>
            <Link to="/gan/cycle">Cycle GAN</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  export default Header; 