import React from "react";
import { Link } from "react-router-dom";
import UserSidebar from '../component/UserSidebar';


const Profile = () =>{
    return(
        <div className="dashboard cm-flex-type-1">
            <div className="sidebar cm-wd-20">
               <UserSidebar />
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