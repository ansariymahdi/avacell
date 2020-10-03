/* eslint-disable import/first */
import * as React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink,} from "react-router-dom";
import Main from "./layouts/main/Main.js";
// import Main from "./layouts/main/layout.min.css";
// import $ from 'jquery';

// import './styles/css/style.css'
import './styles/css/layout.css'
import './styles/css/main.css'

import './styles/scss/main.scss'
// import './styles/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faPhone, faFax, faGraduationCap, faSchool, faRss } from '@fortawesome/free-solid-svg-icons'
import avacell from './assets/img/avacell5.jpg'
import routes from "./routes";
import {Header} from './component/header/Header'

const hist = createBrowserHistory();

import logo from './assets/img/avcell-logo.png'

// Import Swiper styles
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';

function RouteWithSubRoutes(route:any) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
ReactDOM.render(
  <Router>
    <div className="wrapper ms-overlay no-fixing">
     <div className="bg-triangles rtl" > 
      <Header/>
    {/* <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />

      ))
      }
      <Redirect from="/" to="/home" />
    </Switch> */}

 <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />

      ))
      }
      <Redirect from="/" to="/home" />
    </Switch> 


          {/*    <footer className="new_footer_area bg_color footer-main">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" >
                                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p>Don’t miss any updates of our new templates and extensions.!</p>
                                    <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                        <p className="mchimp-errmessage"></p>
                                        <p className="mchimp-sucmessage" ></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" >
                                    <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Android App</a></li>
                                        <li><a href="#">ios App</a></li>
                                        <li><a href="#">Desktop</a></li>
                                        <li><a href="#">Projects</a></li>
                                        <li><a href="#">My tasks</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" >
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Term &amp; conditions</a></li>
                                        <li><a href="#">Reporting</a></li>
                                        <li><a href="#">Documentation</a></li>
                                        <li><a href="#">Support Policy</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" >
                                    <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div className="f_social_icon">
                                        <a href="#" className="fab fa-facebook"></a>
                                        <a href="#" className="fab fa-twitter"></a>
                                        <a href="#" className="fab fa-linkedin"></a>
                                        <a href="#" className="fab fa-pinterest"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div class="footer_bg">
                        <div class="footer_bg_one"></div>
                        <div class="footer_bg_two"></div>
                    </div>*/}
                {/*  </div>
              
            </footer> */}
        </div>
        </div>

    
    {/* <!-- footer_start  --> */}
  
                  {/* <!-- footer_end  --> */}
    {/* <Switch>
      
      <Route path="/main" render={props => <Main {...props} />} />
      <Redirect from="/" to="/main/home" />
    </Switch> */}

    {/* <footer>
      <div class="container">
        <div class="row">

          <div class="col-6 col-sm-6 col-md-2">
              <div id="nav_menu-2" class="widget widget_nav_menu"><div class="widget-title">دسترسی سریع</div><div class="menu-%d8%af%d8%b3%d8%aa%d8%b1%d8%b3%db%8c-%d8%b3%d8%b1%db%8c%d8%b9-container"><ul id="menu-%d8%af%d8%b3%d8%aa%d8%b1%d8%b3%db%8c-%d8%b3%d8%b1%db%8c%d8%b9" class="menu"><li id="menu-item-245" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-245">       <NavLink to={"home"} className="nav-link"> خانه</NavLink></li>
                <li id="menu-item-243" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-243"> <NavLink to={"contact"} className="nav-link"> تماس با ما</NavLink></li>
              <li id="menu-item-244" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-244"><a >درباره ما</a></li>
            </ul></div></div>
          </div>
          <div class="col-6 col-sm-6 col-md-2">
            <div id="nav_menu-3" class="widget widget_nav_menu"><div class="widget-title">اطلاع رسانی و آموزش</div>
              <div class="menu-%d8%a7%d8%b7%d9%84%d8%a7%d8%b9-%d8%b1%d8%b3%d8%a7%d9%86%db%8c-container"><ul id="menu-%d8%a7%d8%b7%d9%84%d8%a7%d8%b9-%d8%b1%d8%b3%d8%a7%d9%86%db%8c" class="menu">
                <li id="menu-item-249" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-249"><a >آموزش‌های عمومی</a></li>
                <li id="menu-item-254" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-254"><a>سایت های مرتبط</a></li>
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
    </footer> */}
    {/* </div> */}
  </Router>,
  document.getElementById("root")
);
