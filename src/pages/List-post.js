import React from "react";
import { Link } from "react-router-dom";

import UserSidebar from '../component/UserSidebar';
const ListPost = () =>{
    return(
        <div className="dashboard cm-flex-type-1">
            <div className="sidebar cm-wd-20">
                <UserSidebar />
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