import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/dashboard.css';
import UserSidebar from '../component/UserSidebar';

const Dashboard = () => {

    const navigate = useNavigate();
    let userinfo =  localStorage.getItem('userinfo');
    // console.log("userinfo", userinfo)
    
    useEffect(() => {
        if(userinfo===null){
            navigate('/')
        }
    },[])


    return (
        <div className="dashboard cm-flex-type-1">
            <div className="sidebar cm-wd-20">
                <UserSidebar />
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