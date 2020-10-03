import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
// import Home from "./Home.js"
// import routes from "routes.js";
// import HeaderHome from './../../component/header/homeHeader/HomeHeader.js'
import { Carousel, Row, Col, NavItem, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { String } from './../../common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faPhone, faFax, faGraduationCap, faSchool, faRss } from '@fortawesome/free-solid-svg-icons'
import Slide from './../../assets/img/slide1.jpg'
import avacell from './../../assets/img/avacell4.png'
import Slidetwo from './../../assets/img/slide2.jpg'
import SlideFour from './../../assets/img/slide4.png'
import SlideFive from './../../assets/img/slide5.jpg'
import two from './../../assets/img/1920x1080/02.jpg'
import Circle from './../../assets/icon/circle.svg'
import api from "./../../api/api";
import {Engineer} from "./../../models/engineer";
import {Observable, of, Subject} from "rxjs";
import {catchError, take} from "rxjs/operators";
import Axios from  './../../api';
// Import Swiper React components
import SwiperCore, { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper.use([Thumbs]);
var ps;


const instance = Axios.create({
  baseURL: 'https://jsonplaceholders.typicode.com'
});
export const Main = () => {


    const getEngineers = () =>{
         instance.get('/posts').subscribe(
         response => console.log(response),
         error => console.log(error)
      );
    }
    const [active, setActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [activeRight, setActiveRight] = useState(false)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // let items = [{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGT6L8t2__ZvRbhrydP5-R--G2rwYf8PogSA&usqp=CAU' }, { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGT6L8t2__ZvRbhrydP5-R--G2rwYf8PogSA&usqp=CAU'}]
    let items = [{ src: SlideFive }, { src: SlideFour }, { src: two }]

    useEffect(() => {
        // const interval = setInterval(() => {
        //     if (activeIndex == (items.length - 1)) {
        //         goToIndex(activeIndex - 1)
        //     } else {
        //         goToIndex(activeIndex + 1)
        //     }
        // }, 1000);
        // return () => clearInterval(interval);
    }, []);
let backIcon =
        <div>      <a href="" className={`arrow left ${active ? 'animate' : ''}`} >
            <i></i>
            <svg>
                <use xlinkHref={`${Circle}#${'circle'}`} />
            </svg>

        </a>
        </div>

    const nextIcon =

        <a href="" className={`arrow  ${activeRight ? 'animate' : ''}`} >
            <i></i>
            <svg>
                <use xlinkHref={`${Circle}#${'circle'}`} />
            </svg>
        </a>
    return (
        <>
            <div className="bg-triangles rtl" >
             <Carousel  nextIcon={nextIcon}  prevIcon={backIcon}>
                    {items.map(item => {
                        return (
                            <Carousel.Item>
                                <div className="item">
                                    <img className="img-responsive" src={item.src} alt="Slider Image" />
                                    <div className="container">
                                        <div className="carousel-centered">
                                            <div className="margin-b-40">
                                                <h1 className="carousel-title">Hi-Tech Design</h1>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua <br /> enim minim estudiat veniam siad venumus dolore</p>
                                            </div>
                                            <a href="#" className="btn-theme btn-theme-sm btn-white-brd text-uppercase">Explore</a>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        );
                    })}
                    
                </Carousel>

                  <div className="container-fluid">
                    <div className="row   ">
                        <div className="  col-sm-2 col-2"><div className=" "><div className="">
                            <a className="quicklinkbox rounded-card"  onClick={() =>getEngineers()}>
                                <span className="forward d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faRss} style={{
                                        height: 50,
                                        width: 50
                                    }} />
                                </span>
                                <span className="backward d-flex align-items-center justify-content-center">آخرین مقالات</span>
                            </a>
                        </div></div></div>
                        <div className=" col-sm-2 col-2"><div className=" "><div className="">
                            <a className="quicklinkbox rounded-card">
                                <span className="forward d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faNewspaper} style={{
                                        height: 50,
                                        width: 50
                                    }} />
                                </span>
                                <span className="backward d-flex align-items-center justify-content-center">آخرین اخبار</span>
                            </a>
                        </div></div></div>
                        <div className="  col-sm-2 col-2"><div className=" "><div className="">
                            <a className="quicklinkbox rounded-card">
                                <span className="forward d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faSchool} style={{
                                        height: 50,
                                        width: 50
                                    }} />
                                </span>
                                <span className="backward d-flex align-items-center justify-content-center">آموزش های عمومی</span>
                            </a>
                        </div></div></div>
                        <div className=" col-sm-2 col-2"><div className=" "><div className="">
                            <a className="quicklinkbox rounded-card">
                                <span className="forward d-flex align-items-center justify-content-center">    <FontAwesomeIcon icon={faGraduationCap} style={{
                                    height: 50,
                                    width: 50
                                }} /></span>
                                <span className="backward d-flex align-items-center justify-content-center">آموزش </span>
                            </a>
                        </div></div></div>
                        <div className=" col-sm-2 col-2"><div className=" "><div className="">
                            <a className="quicklinkbox rounded-card">
                                <span className="forward d-flex align-items-center justify-content-center">    <FontAwesomeIcon icon={faGraduationCap} style={{
                                    height: 50,
                                    width: 50
                                }} /></span>
                                <span className="backward d-flex align-items-center justify-content-center">آموزش </span>
                            </a>
                        </div></div></div>

                        <div className=" col-sm-2 col-2"><div className=" "><div className="">
                            <a className="quicklinkbox rounded-card">
                                <span className="forward d-flex align-items-center justify-content-center">    <FontAwesomeIcon icon={faGraduationCap} style={{
                                    height: 50,
                                    width: 50
                                }} /></span>
                                <span className="backward d-flex align-items-center justify-content-center">آموزش </span>
                            </a>
                        </div></div></div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Main;
