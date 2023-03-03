import React from "react";

const CommentPost = () => {
    return (
        <div>
            <h3>Commects</h3>
            <div className="">
                <form className="">
                    <div className="cm-flex-type-2 comment-post">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <textarea type="text" className="form-control" rows={8} placeholder="" ></textarea>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <input type="submit" className="cm-prime-btn active" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CommentPost;