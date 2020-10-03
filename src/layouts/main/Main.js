import React from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faPhone, faFax, faGraduationCap, faSchool, faRss } from '@fortawesome/free-solid-svg-icons'
import Slide from './../../assets/img/slide1.jpg'
import avacell from './../../assets/img/avacell4.png'
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
// import Home from "./Home.js"
// import routes from "routes.js";
import HeaderHome from './../../component/header/homeHeader/HomeHeader.js'
import { Carousel, Row, Col, NavItem, Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {String} from './../../common'

import routes from "./../../routes.js";
var ps;
const Main =props=>{
  const nextIcon=
            <div class="round">
                <div id="cta">
                    <span class="arrow primera next "></span>
                    <span class="arrow segunda next "></span>
                </div>
            </div>
    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/main") {
                console.log(prop.component)
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                console.log(null)
                return null;
            }
        });
    };
    
        return (
            <>
                <div class="bg-triangles rtl" >

                    <header class=" bg-dark">
                        <div class="container">
                            <div class="row">
                                <div class="col-auto logo">
                                    <div class="logo-inner"><a class="custom-logo-link" rel="home" itemprop="url"><img width="150" height="100" src={avacell} class="custom-logo" alt="هیرکانیا" itemprop="logo"/></a></div>
                                    </div>
                                    <div class="col">
                                        <nav class="navbar navbar-expand-lg navbar-dark pr-0 justify-content-end">
                                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#primarymenu-mobile" aria-controls="primarymenu-mobile" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <div id="primarymenu" class="collapse navbar-collapse"><ul id="menu-%d9%81%d9%87%d8%b1%d8%b3%d8%aa-%d8%a7%d8%b5%d9%84%db%8c" class="navbar-nav p-0 m-0">
                                                <li id="menu-item-57" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-57 nav-item ">
                                                    {/* <a  class="nav-link active"> */}
                                                <NavLink to={"home"} className="nav-link"> خانه</NavLink>
                                                    {/* </a> */}
                                                    </li>
                                                    <li id="menu-item-58" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58 nav-item">
                                                        <a  class="nav-link">درباره ما</a>
                                                        </li>
                                            <li id="menu-item-59" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 nav-item">
                                                <NavLink to={"contact"} className="nav-link"> تماس با ما</NavLink>
                                                </li></ul></div>                                    </nav>

            </div>
                                    </div>
                                </div>
</header>
                        {/* <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">Brand</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header> */}

                        {/* <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">Hello</NavItem>
                                <NavItem eventKey={2} href="#">World</NavItem>
                            </Nav>
                        </Navbar.Collapse> */}
{/* 
                    </Navbar> */}
                   
                    {/*               
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045__340.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045__340.png"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045__340.png"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel> */}


                    <div class="bg-triangles rtl" >
                        <Switch>{getRoutes(routes)}</Switch>
                        </div>

                 
             
                 
                   
                    <footer>
                        <div class="container">
                            <div class="row">
                              
                                <div class="col-6 col-sm-6 col-md-2">
                                    <div id="nav_menu-2" class="widget widget_nav_menu"><div class="widget-title">دسترسی سریع</div><div class="menu-%d8%af%d8%b3%d8%aa%d8%b1%d8%b3%db%8c-%d8%b3%d8%b1%db%8c%d8%b9-container"><ul id="menu-%d8%af%d8%b3%d8%aa%d8%b1%d8%b3%db%8c-%d8%b3%d8%b1%db%8c%d8%b9" class="menu"><li id="menu-item-245" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-245"><a >خانه</a></li>
                                        <li id="menu-item-243" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-243"><a href="http://hyrcania.net/contact/">تماس با ما</a></li>
                                        <li id="menu-item-244" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-244"><a href="http://hyrcania.net/about/">درباره ما</a></li>
                                    </ul></div></div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-2">
                                    <div id="nav_menu-3" class="widget widget_nav_menu"><div class="widget-title">اطلاع رسانی و آموزش</div>
                                    <div class="menu-%d8%a7%d8%b7%d9%84%d8%a7%d8%b9-%d8%b1%d8%b3%d8%a7%d9%86%db%8c-container"><ul id="menu-%d8%a7%d8%b7%d9%84%d8%a7%d8%b9-%d8%b1%d8%b3%d8%a7%d9%86%db%8c" class="menu">
                                        <li id="menu-item-249" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-249"><a href="http://hyrcania.net/category/general-edu/">آموزش‌های عمومی</a></li>
                                        <li id="menu-item-254" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-254"><a href="http://hyrcania.net/relatedsites/">سایت های مرتبط</a></li>
                                    </ul></div></div>            </div>
                                <div class="col-12 col-sm-12 col-md-4">
                                    <div class="widget">
                                        <div class="widget-title">آخرین مطالب</div>
                                        <div class="row no-gutters footernewslist">
                                           
                                            <div class="col-6">
                                                <a >گزارش هفتگی   منتشر…</a>
                                            </div>
                                            <div class="col-6">
                                                <a >با حضور   در…</a>
                                            </div>
                                            <div class="col-6">
                                                <a >خبر های جدیدی در راه است…</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-4">
                                    <div class="footer-about">
                                        <div class="footer-about-icon"><FontAwesomeIcon icon={faPhone} /></div>
                                        <div class="footer-about-body">
                                            <p><i class="fa fa-map-marker fa-lg align-middle"></i> تهران، پاسداران، خیابان گل نبی، خیابان شهید ناطق نوری، نبش کوچه رفیق دوست، پلاک ۳۹، مجتمع های وب</p>
                                            <div class="row no-gutters">
                                                <div class="col-6 p-1"><FontAwesomeIcon icon={faPhone} /> <span class="ltr">۰۲۱ ۲۹۴۰ ۷۰۰۰</span> </div>
                                                <div class="col-6 p-1"><FontAwesomeIcon icon={faFax} /> <span class="ltr">۰۲۱ ۲۹۴۰ ۵۰۶۰</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                               
                            
                            </div>
                        </div>
                    </footer>
                </div>
            </>
        );
    
}

export default Main;
