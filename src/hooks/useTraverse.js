export const useTraverse = () => {
  const replyComment = (commentData, payload, parentId) => {
    return commentData.map((comment) => {
      if (comment.id === parentId) {
        // Append the new reply to the replies array
        return {
          ...comment,
          replies: [...comment.replies, payload],
        };
      }
      // Recursively check nested replies
      if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: replyComment(comment.replies, payload, parentId),
        };
      }
      return comment;
    });
  };

  const likeComment = (commentData, commentId) => {
    return commentData.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          votesCount: comment.votesCount + 1,
        };
      }
      if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: likeComment(comment.replies, commentId),
        };
      }

      return comment;
    });
  };

  const deleteComment = (commentData, commentId) => {
    return commentData
      .map((comment) => {
        if (comment.id === commentId) {
          return null;
        }
        if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: deleteComment(comment.replies, commentId).filter(
              (ele) => ele !== null
            ),
          };
        }

        return comment;
      })
      .filter((ele) => ele !== null);
  };

  return {
    replyComment,
    likeComment,
    deleteComment,
  };
};
