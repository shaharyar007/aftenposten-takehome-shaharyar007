import * as React from 'react';
import * as ReactDom from "react-dom";
// import "../styles/index.scss";

const navBarStyles = {
    backgroundColor: "#fff",
    backgroundImage: "linear-gradient(0deg, #D2D2D2 0%, #97D9E1 100%);",
    boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.3)"
  };
const Header = () =>{
    return(
        <React.Fragment>      
        {/* Header Start */}
        <header className="header" id="main-header">
            <div className="header__container container">
            <div className="header__logo-wrapper">
                <img src="assets/images/logo.png" className="header__logo" alt="Italian Trulli" width="150" />
            </div>
          {/* Top menu start */}
            <nav className="menu">
                <a href="javascript:void(0)" id="menu-btn" className="burger-menu">
                    <img src="assets/images/menu_burger.png" alt="burger-menu" />
                    <img src="assets/images/close.png"  alt="burger-menu" />
    
                </a>
                <ul className="menu__list p-0" id="main-menu">
                    <li className="menu__nav-link"><a href="javascript:void(0)">Home</a></li>
                    <li className="menu__nav-link">
                        <div className="dropdown">
                            <a href="javascript:void(0)" className="dropdown__link">News</a>
                            <span className="dropdown__caret"><img src="../src/assets/images/caret.png" alt="caret" /></span>
                            <div className="dropdown__content">
                              <p className="dropdown_menu-title m-0">Lorem Ipsum</p>
                              <a href="javascript:void(0)">Lorem Ipsum</a>
                              <a href="javascript:void(0)">Lorem Ipsum</a>
                              <a href="javascript:void(0)">Lorem Ipsum</a>
                              
                            </div>
                          </div>
                    </li>
                    <li className="menu__nav-link"><a href="javascript:void(0)">Lorem & Ipsum</a></li>
                    <li className="menu__nav-link"><a href="javascript:void(0)">Dolor</a></li>
                    <li className="menu__nav-link"><a href="javascript:void(0)">Amet</a></li>
                    <li className="menu__nav-link menu__primary-btn" ><a href="javascript:void(0)">OPEN ACCOUNT</a></li>
                    <li className="menu__nav-link" id="login-link"><a href="javascript:void(0)">Log in</a></li>
                </ul>
            </nav>  
            {/* Top menu End  */}
        </div>
        </header>
        </React.Fragment>
      
    // Header End 
    
    )
};
export default Header;
