import React from "react";
import "./index.css";

const Comment = ({ comment }) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(comment.postedOn));

  return (
    <div className="comment">
      <div className="posted-by">
        <span className="posted-user">{comment.postedBy}</span>
        <span className="posted-on">{formattedDate}</span>
      </div>
      <div className="comment-text">
        <span>{comment.commentText}</span>
      </div>
      <div className="votes">
        <span>
          <img src="/assets/likeIcon.png" width="12" /> {comment.votesCount}
        </span>
      </div>
    </div>
  );
};

export default Comment;
