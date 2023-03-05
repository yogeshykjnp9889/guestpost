import  {useState, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import CommentPost from './CommectPost';
import axios from 'axios';
import '../css/postdetail.css';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
const PostDetail = (props) => {
    const [postDetails, setpostDetail] = useState('');
    const [recentPost, setrecentPost] = useState('');
    let params = useParams();
    // console.log('Params',params);
    const url1 = 'http://127.0.0.1:8000/api/get-postdetail?slug='+params.postDetail;
    const url2 = 'http://127.0.0.1:8000/api/get-post';
   
   const  getdeta = async () => {
            await axios.get(url1).then((response) => {
            setpostDetail(response.data);
        });
    }

    const  getrecentPost = async () => {
        await axios.get(url2).then((response) => {
        setrecentPost(response.data);
    });
    }


    useEffect(() => {
        getdeta();
        getrecentPost();
        window.scrollTo(0, 0);
    }, [params]);

    return (
        <>
            <Navbar title="Logo Here"/>
            <div className='text-center hero-section-postdetail'>
                <div className='bg-post-detail cm-page-center'>
                    <h1>{postDetails.name}</h1>
                </div>
            </div>
            <div className='cm-page-center'>
                <div className='cm-flex-type-2'>
                    <div className='cm-wd-65'>
                        <div className='postdetailImage'>
                            <img src={postDetails.post_image} alt='' />
                        </div>
                    <div className='long-desc'>
                        <div dangerouslySetInnerHTML={ {__html: postDetails.long_desc} }></div>
                        <CommentPost />
                    </div>
                    </div>
                    <div className='cm-wd-30'>
                        <div>
                            <h3>Most Recent Post</h3>
                            <div className='listof-post'>
                                {recentPost && recentPost.map((row) => {
                                    return (
                                        <div className='cm-flex recent-most-list'>
                                            <div className='cm-wd-25 imagefile'>
                                                <Link onClick={getdeta} to={'/post/'+row.slug}>
                                                <img src={row.post_image} className="most-recent-img" alt='' />
                                                </Link>
                                            </div>
                                            <div className='cm-wd-75'>
                                                <Link onClick={getdeta} to={'/post/'+row.slug}><p>{row.name}</p></Link>
                                            </div>
                                        </div>
                                    );
                                })
                                }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );


}


export default PostDetail;