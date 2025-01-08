import React from "react";
import Comment from "./Comment";
import "./index.css";

const CommentView = ({
  data,
  addCommentReply,
  likeCommentAction,
  deleteCommentAction,
}) => {
  return (
    <div>
      {data.map((commentData) => {
        return (
          <div className="comment-container" key={commentData.id}>
            <Comment
              comment={commentData}
              addCommentReply={addCommentReply}
              likeCommentAction={likeCommentAction}
              deleteCommentAction={deleteCommentAction}
            />
            {commentData.replies.length > 0 ? (
              <CommentView
                data={commentData.replies}
                addCommentReply={addCommentReply}
                likeCommentAction={likeCommentAction}
                deleteCommentAction={deleteCommentAction}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default CommentView;
