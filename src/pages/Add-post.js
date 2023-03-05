import React from "react";
import { Link } from "react-router-dom";
import UserSidebar from '../component/UserSidebar';


const AddPost = () =>{
    
    return(
        <div className="dashboard cm-flex-type-1">
            <div className="sidebar cm-wd-20">
                <UserSidebar />
            </div>
            <div className="cm-wd-80">
                <div className="boday-dashboard">
                    <h1>Add Post</h1>
                    <div>
                        <form>
                            <div className="cm-flex-type-1">
                                <div className="form-group cm-wd-45">
                                    <label>Title</label>
                                    <input type="text" className="form-control" name="title" placeholder="Enter Title" />
                                </div>
                                <div className="form-group cm-wd-45">
                                    <label>Slug</label>
                                    <input type="text"  className="form-control" name="slug" placeholder="Enter Slug" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Short Description</label>
                                <textarea className="form-control" rows={8} placeholder="Short Description.."></textarea>
                            </div>
                            <div className="cm-flex-type-1">
                                <div className="form-group cm-wd-45">
                                    <label>Meta Title</label>
                                    <input type="text" className="form-control" name="meta_title" placeholder="Enter Title" />
                                </div>
                                <div className="form-group cm-wd-45">
                                    <label>Meta Description</label>
                                    <input type="text"  className="form-control" name="slug" placeholder="Enter Slug" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>category</label>
                                <input type="text" className="form-control" name="category" placeholder="Enter Title" />
                            </div>
                            <div className="form-group">
                                <label>Image Alt Tag (Featured Image)</label>
                                <input type="text" className="form-control" name="feature_image" />
                            </div>
                            <div className="form-group">
                                <label>Image </label>
                                <input type="file" className="form-control" name="feature_image" />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea type="text" className="form-control" name="feature_image" rows={8}></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" classname="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost;