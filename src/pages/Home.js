import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { NavLink as Link } from "react-router-dom";
import { format, parseISO } from 'date-fns'
import Footergallery from '../component/Footergallery';
import HomeSlider from '../component/HomeSlider';
import { FaUserAlt, FaCalendarAlt, FaRegComment } from "react-icons/fa";


const   Home = () => {
        const [Trading, setTrading] = useState();
        const [recent, setRecent] = useState();
        const url = 'http://127.0.0.1:8000/api/get-post';

        useEffect(() => {
            axios.get(url).then((response) => {
                setTrading(response.data);
                setRecent(response.data);
            });
        }, []);
    
    return (
        <>
        <HomeSlider />  
            <section className="cm-section cm-bor-bottom">
                <div className="cm-page-center">
                    <h1 className="cm-heading cm-mb-30">Trading  Blog</h1>
                    <div className="cm-flex cm-trading-news cm-flex-type-1">
                        {Trading && Trading.map((row) => {
                            // console.log(row)
                            return (
                                <div className="cm-trading-box" key={row.id}>
                                    <div className="cm-trading-content">
                                    <Link to={'post/'+row.slug}>
                                        <img src={row.post_image} alt="Test"/>
                                    </Link>
                                    <div>
                                        <Link to={'post/'+row.slug}>{row.name}</Link>
                                        <div className='cm-flex-type-1 cm-mt-20'>
                                            <span><FaUserAlt /> Yogesh </span>
                                            <span><FaCalendarAlt /> {format(parseISO(row.created_at), 'dd-mm-yyyy')}</span>
                                            <span><FaRegComment /> 236</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            );
                            })
                        }
                    </div>
                </div>
            </section>
            {/* Recent News  */}
            <section className="cm-section">
            <div className="cm-page-center">
                <h1 className="cm-heading cm-mb-30">Recent  Blog</h1>
                <div className="cm-flex cm-trading-news cm-flex-type-1">
                    {recent && recent.map((row) => {
                            // console.log(row)
                            return (
                                <div className="cm-trading-box" key={row.id}>
                                    <div className="cm-trading-content">
                                    <Link to={'post/'+row.slug}>
                                        <img src={row.post_image} alt="Test"/>
                                    </Link>
                                    <div>
                                        <Link to={'post/'+row.slug}>{row.name}</Link>
                                        <div className='cm-flex-type-1 cm-mt-20'>
                                            <span><FaUserAlt /> Yogesh </span>
                                            <span><FaCalendarAlt /> {format(parseISO(row.created_at), 'dd-mm-yyyy')}</span>
                                            <span><FaRegComment /> 236</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            </section>
            <div className='cm-section'>
                <div className='cm-position-relative'>
                    <div className="banner-recent">
                    <div className="cm-page-center">
                        <div className='cm-flex-type-1 banner-image-content'>
                            <a href="/#" className='banner-discount'>GET 50% DISCOUNT OFFERS <br></br>HOW TO USE? JUST SHOW US THIS SCREEN</a>
                            <a href="/#" className='cm-prime-btn'>Contact Us</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* Weeked Blog */}
            <section className='cm-section'>
            <div className='cm-page-center'>
                <div>
                <h1 className='cm-heading cm-mb-30'>Weekend Top Blog</h1>
                </div>
                <div className='cm-flex-type-1'>
                <div className='cm-wd-50 cm-weekend-box cm-position-relative'>
                    <img src='../images/trading-news/sed.jpg' alt='Weekend' />
                </div>
                <div className='cm-wd-50 cm-weekend-box '>
                    <div className='cm-weekendnewslist'>
                    <div className=''>
                        <ul>
                        <li className='cm-flex'>
                            <img src='../images/trading-news/sd-s-1.jpg'  alt='rest'/>
                            <div className='contentList'>
                            <div>
                                <a href="/#" className='category-btn'>LIFESTYLE</a>
                            </div>
                            <a href="/#" className='title'>British military courts use aginst protesters busines cultural.</a>
                            <ul>
                                <li><FaCalendarAlt /> 15/12/2022</li>
                                <li><FaRegComment /> 252</li>
                            </ul>
                            </div>
                        </li>
                        <li className='cm-flex'>
                            <img src='../images/trading-news/sd-s-1.jpg'  alt='rest'/>
                            <div className='contentList'>
                            <div>
                                <a href="/#" className='category-btn'>LIFESTYLE</a>
                            </div>
                            <a href="/#" className='title'>British military courts use aginst protesters busines cultural.</a>
                            <ul>
                                <li><FaCalendarAlt /> 15/12/2022</li>
                                <li><FaRegComment /> 252</li>
                            </ul>
                            </div>
                        </li>
                        <li className='cm-flex'>
                            <img src='../images/trading-news/sd-s-1.jpg'  alt='rest'/>
                            <div className='contentList'>
                            <div>
                                <a href="/#" className='category-btn'>LIFESTYLE</a>
                            </div>
                            <a href="/#" className='title'>British military courts use aginst protesters busines cultural.</a>
                            <ul>
                                <li><FaCalendarAlt /> 15/12/2022</li>
                                <li><FaRegComment /> 252</li>
                            </ul>
                            </div>
                        </li>
                        <li className='cm-flex'>
                            <img src='../images/trading-news/sd-s-1.jpg'  alt='rest'/>
                            <div className='contentList'>
                            <div>
                                <a href="/#" className='category-btn'>LIFESTYLE</a>
                            </div>
                            <a href="/#" className='title'>British military courts use aginst protesters busines cultural.</a>
                            <ul>
                                <li><FaCalendarAlt /> 15/12/2022</li>
                                <li><FaRegComment /> 252</li>
                            </ul>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <div className='cm-section'>
                <div className='cm-position-relative'>
                    <div className="banner-recent">
                    <div className="cm-page-center">
                        <div className='cm-flex-type-1 banner-image-content'>
                            <a href="/#" className='banner-discount'>GET 50% DISCOUNT OFFERS <br></br>HOW TO USE? JUST SHOW US THIS SCREEN</a>
                            <a href="/#" className='cm-prime-btn'>Contact Us</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footergallery />
            <section className='cm-section newslatter-section'>
            <div className='cm-page-center'>
                <div className='cm-text-center'>
                    <h2>Subscribe to Newsletter!</h2>
                <div className='bar'></div>
                    <div className='cm-wd-50 cm-mlr-auto cm-mb-30'>
                    <p>Lorem ipsum dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp a qui officia deserunt mollit anim id est laborum.</p>
                </div>
                    <form>
                        <input type="text" placeholder='Enter your email' name='email'  />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
            </section>
        </>

    );
}

export default  Home;