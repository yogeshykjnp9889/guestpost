import React from "react";
import { Link } from "react-router-dom";
import '../css/dashboard.css';

const Dashboard = () => {
    return (
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
            <div className="cm-wd-80">
                <div className="boday-dashboard">
                    <h1>Welcome to my dashboard</h1>
                    <div className="cm-flex-type-1">
                        <div className="box-dash-measure">Total Post</div>
                        <div className="box-dash-measure">Pending Post</div>
                        <div className="box-dash-measure">Aprove Post</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;