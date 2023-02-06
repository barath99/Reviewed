import React from 'react';

const ForumComment = ({ author, body, voteStatus, onVote, onDelete, onFlag }) => {
  return (
    <div>
      <p>{body}</p>
      <p>By: {author}</p>
      <div>
        <button onClick={() => onVote('up')}>Upvote</button>
        <button onClick={() => onVote('down')}>Downvote</button>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onFlag}>Flag</button>
      </div>
    </div>
  );
};

export default ForumComment;
