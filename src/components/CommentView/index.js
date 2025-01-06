import React from "react";
import Comment from "./Comment";
import './index.css'

const CommentView = ({ data }) => {
  return <div>
    {data.map((commentData)=>{
      return <div className="comment-container" key={commentData.id}>
          <Comment comment={commentData}/>
          {commentData.replies.length > 0 ? <CommentView data={commentData.replies}/> : null}
      </div>
    })}
  </div>;
};

export default CommentView;
