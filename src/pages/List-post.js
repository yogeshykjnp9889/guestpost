import React from "react";
import { Link } from "react-router-dom";


const ListPost = () =>{
    return(
        <div className="dashboard cm-flex-type-1">
            <div className="sidebar cm-wd-20">
                <div className="sidebar-nav">
                    <ul>
                        <li>  
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/add-post">Add Post</Link>
                        </li>
                        <li>
                            <Link to="/list-post">List Post</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cm-wd-75">
                <h1>Post List Detail</h1>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default ListPost;