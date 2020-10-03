import React from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
// import Home from "./Home.js"
// import routes from "routes.js";
import img from './../../assets/img/img-01.png'
var ps;
export  const Contact = () => {



    return (
        <>
          
  
   {/* <div class="bg-contact100" >
        <div class="container-contact100">
            <div class="wrap-contact100">
               <span class="contact100-form-title">
                                            
                                        </span>
                <div class="contact100-pic js-tilt" data-tilt>
                    <img src={img} alt="IMG"/>
                </div>

                <form class="contact100-form validate-form">
                 

                    <div class="wrap-input100 validate-input" data-validate = "Name is required">
                        <input class="input100" type="text" name="name" placeholder="نام"/>
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <input class="input100" type="text" name="email" placeholder="ایمیل"/>
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate = "Message is required">
                        <textarea class="input100" name="message" placeholder="پیام"></textarea>
                        <span class="focus-input100"></span>
                    </div>

                    <div class="container-contact100-form-btn">
                        <button class="contact100-form-btn">
                            ارسال
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>*/}

        </>
    );

}

export default Contact;
