import  React,{useState, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import { FaUserAlt, FaCalendarAlt, FaRegComment } from "react-icons/fa";
import { format, parseISO } from 'date-fns'
import { Pagination } from '../component/Pagination';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
// import queryString from 'query-string';

const CatePage = (props) => {
    const [category, setCategory] = useState('');
    const [total, settotalRecord] = useState();
    const [current, setCurrent] = useState();
    const [perpage, setPerpage] = useState();
    let params = useParams();
    const queryParams = new URLSearchParams(window.location.search);
    let page = queryParams.get("page");
    if(page===null){
        page = 0;
    }
    // console.log('page',page);
    
    const url = 'http://127.0.0.1:8000/api/category/'+params.cateSlug+'?page='+page;
    useEffect(() => {
        axios.get(url).then((response) => {
            setCategory(response.data);
            settotalRecord(response.data.total);
            setCurrent(response.data.current_page);
            setPerpage(response.data.per_page);
            // console.log('total', response.data.total)
        });
    }, [params]);

    return (
        <>
        <Navbar title='Logo Here'/>
        <div className='cm-page-center'>
            <h1>{params.cateSlug.toUpperCase()}</h1>
            <div className='ptb-70'>
            <div className='cm-flex-type-2'>
                {category && category.data.map((row) => {
                        // console.log(row)
                        return (
                            <div className="cm-trading-box" key={row.id}>
                                <div className="cm-trading-content">
                                <Link to={'/post/'+row.slug}>
                                {/* ${row.post_image}` */}
                                    <img src={`http://127.0.0.1:8000/post_image/${row.post_image}`}              alt="Test"/>
                                </Link>
                                <div>
                                    <Link to={'/post/'+row.slug}>{row.name}</Link>
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
            {/* Pagination */}
            <div className='paginationlist'>
                <Pagination total={total} currentPage={current} perPage={perpage} />
            </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default CatePage;