import React, { useState } from "react";
import "./index.css";

const Comment = ({
  comment,
  addCommentReply,
  likeCommentAction,
  deleteCommentAction,
}) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyCommentText, setReplyCommentText] = useState("");

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(comment.postedOn));

  const onCancelReply = () => {
    setShowReplyInput(false);
    setReplyCommentText("");
  };

  const onSaveReply = () => {
    if (replyCommentText !== "") {
      const payload = {
        id: new Date().getTime(),
        postedBy: "Saqib",
        postedOn: new Date(),
        commentText: replyCommentText,
        votesCount: 0,
        replies: [],
      };
      addCommentReply(payload, comment.id);
      setShowReplyInput(false);
      setReplyCommentText("");
    }
  };

  const onCommentLike = () => {
    likeCommentAction(comment.id);
  };

  const onCommentDelete = () => {
    deleteCommentAction(comment.id);
  };

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
          <img src="/assets/likeIcon.png" width="12" onClick={onCommentLike} />{" "}
          {comment.votesCount}
        </span>
      </div>
      <div className="comment-actions">
        {!showReplyInput && (
          <>
            <span>
              <button onClick={() => setShowReplyInput(true)}>Reply</button>
            </span>
            <span>
              <button onClick={onCommentDelete}>Delete</button>
            </span>
          </>
        )}
      </div>
      {showReplyInput && (
        <div className="comment-reply-section">
          <input
            type="text"
            autoFocus
            onChange={(e) => setReplyCommentText(e.target.value)}
          />{" "}
          <br />
          <button onClick={onCancelReply}>Cancel</button>
          <button onClick={onSaveReply}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Comment;
