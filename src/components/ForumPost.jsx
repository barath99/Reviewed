import React from 'react';
import ForumComment from './ForumComment';

const ForumPost = ({ author, title, body, comments, voteStatus, onVote, onDelete, onFlag }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>By: {author}</p>
      <div>
        <button onClick={() => onVote('up')}>Upvote</button>
        <button onClick={() => onVote('down')}>Downvote</button>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onFlag}>Flag</button>
      </div>
      {comments.map((comment) => (
        <ForumComment
          key={comment.id}
          author={comment.author}
          body={comment.body}
          voteStatus={comment.voteStatus}
          onVote={(voteType) => onVote(comment.id, voteType)}
          onDelete={() => onDelete(comment.id)}
          onFlag={() => onFlag(comment.id)}
        />
      ))}
    </div>
  );
};

export default ForumPost;
