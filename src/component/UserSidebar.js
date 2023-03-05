import React from "react";
import { Link } from "react-router-dom";

const UserSidebar = () => {
    return (
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
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </div>
    );
}

export default UserSidebar;