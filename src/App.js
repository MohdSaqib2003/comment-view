import React, { useState } from "react";
import CommentView from "./components/CommentView";
import { dummyData as data } from "./dummyData";
import { useTraverse } from "./components/hooks/useTraverse";

const App = () => {
  const [commentData, setCommentData] = useState(data);
  const { replyComment, likeComment, deleteComment } = useTraverse();

  const addCommentReply = (payload, parentId) => {
    const response = replyComment(commentData, payload, parentId);
    setCommentData(response);
  };
  const likeCommentAction = (commentId) => {
    const response = JSON.stringify(likeComment(commentData, commentId));
    setCommentData(JSON.parse(response));
  };
  const deleteCommentAction = (commentId) => {
    const response = JSON.stringify(deleteComment(commentData, commentId));
    setCommentData(JSON.parse(response));
  };
  return (
    <div>
      <h1>Comment View (reply/delete/upvote actions) </h1>
      <CommentView
        data={commentData}
        addCommentReply={addCommentReply}
        likeCommentAction={likeCommentAction}
        deleteCommentAction={deleteCommentAction}
      />
    </div>
  );
};

export default App;
