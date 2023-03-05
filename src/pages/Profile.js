import React from "react";
import { Link } from "react-router-dom";


const Profile = () =>{
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
                <h1>Account Detail</h1>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile;