import * as React from 'react';
import { BrowserRouter ,
    Route,
    Routes,
    Link } from 'react-router-dom';
import * as ReactDom from "react-dom";
// import "../styles/index.scss";
import  {useState , useEffect} from "react";
import axios from "axios";
import { debug } from 'webpack';
import NewsSlider from './newsSlider';
import Footer from './footer';
import Home from './home';

const navBarStyles = {
    backgroundColor: "#fff",
    backgroundImage: "linear-gradient(0deg, #D2D2D2 0%, #97D9E1 100%);",
    boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.3)"
  };
const Header = () =>{
  const [menu ,setMenu] = useState([]);
    React.useEffect(() => {
    axios
    .get('http://localhost:5000/api/sections').then((res) => {setMenu(res.data)})
    .catch((err) => console.log(err))
    },[]);
 
    
    return(
        <React.Fragment>      
        {/* Header Start */}
        <header className="header" id="main-header">
            <div className="header__container container">
            <div className="header__logo-wrapper">
                {/* <img src="assets/images/logo.png" className="header__logo" alt="Italian Trulli" width="150" /> */}
            </div>
          {/* Top menu start */}
            <nav className="menu">
                <a href="javascript:void(0)" id="menu-btn" className="burger-menu">
                    {/* <img src="assets/images/menu_burger.png" alt="burger-menu" />
                    <img src="assets/images/close.png"  alt="burger-menu" /> */}
    
                </a>
                <ul className="menu__list p-0" id="main-menu">
                    <li className="menu__nav-link"><a href="javascript:void(0)">Home</a></li>
                    <li className="menu__nav-link">
                        <div className="dropdown">
                            <a href="javascript:void(0)" className="dropdown__link">News</a>
                            <span className="dropdown__caret"><img src="../src/assets/images/caret.png" alt="caret" /></span>
                            <div className="dropdown__content">
                                  
                                {   
                                    menu.map((item:any , i:any) => {
                                        return(
                               
                                 <p key={i} className="dropdown_menu-title m-0"><Link to={`section/${item}`}>{item}</Link></p>
                                 
                                        )
                                    })
                                }
                                
                              
                         
                              
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
