import React from 'react';

const Forum = ({ title, description, posts }) => {
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  };

export default Forum;
