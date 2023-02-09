import React, { useState, useEffect } from 'react';
import { Orbis } from '@orbisclub/orbis-sdk';
import Forum from '../components/Forum';
import ForumComment  from '../components/ForumComment';
import ForumPost  from '../components/ForumPost';

const ForumPage = () => {
  let orbis = new Orbis();

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await orbis.fetchPosts({ searchTerm });
        setPosts(response.posts);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await orbis.fetchUser();
        setUser(response.user);
      } catch (error) {
        setError(error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const subscribeToUpdates = async () => {
      try {
        await orbis.subscribeToUpdates();
        setIsSubscribed(true);
      } catch (error) {
        setError(error);
      }
    };
    if (!isSubscribed) {
      subscribeToUpdates();
    }
  }, [isSubscribed]);

  const handleCreatePost = async (title, body) => {
    try {
      const response = await orbis.createPost({ title, body });
      setPosts([...posts, response.post]);
    } catch (error) {
      setError(error);
    }
  };

  const handleCreateComment = async (postId, body) => {
    try {
      const response = await orbis.createComment(postId, { body });
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, response.comment],
          };
        }
        return post;
      });
      setPosts(updatedPosts);
    } catch (error) {
      setError(error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await orbis.deletePost(postId);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      setError(error);
    }
  };

  const handleDeleteComment = async (postId, commentId) => {
    try {
      await orbis.deleteComment(postId, commentId);
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.filter((comment) => comment.id !== commentId),
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  } catch (error) {
    setError(error);
  }
};

const handleFlagPost = async (postId) => {
  try {
    await orbis.flagPost(postId);
  } catch (error) {
    setError(error);
  }
};

const handleFlagComment = async (postId, commentId) => {
  try {
    await orbis.flagComment(postId, commentId);
  } catch (error) {
    setError(error);
  }
};

const handleVoteOnPost = async (postId, voteType) => {
  try {
    await orbis.voteOnPost(postId, voteType);
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          voteStatus: voteType,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  } catch (error) {
    setError(error);
  }
};

const handleVoteOnComment = async (postId, commentId, voteType) => {
  try {
    await orbis.voteOnComment(postId, commentId, voteType);
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments.map((comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                voteStatus: voteType,
              };
            }
            return comment;
          }),
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  } catch (error) {
    setError(error);
  }
};

return (
  <>
  {/* <Navbar/> */}
  <div>
    <form>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </form>
    {user && (
      <div>
        <h3>Welcome, {user.username}!</h3>
        <button onClick={() => setIsSubscribed(!isSubscribed)}>
          {isSubscribed ? 'Unsubscribe from updates' : 'Subscribe to updates'}
        </button>
      </div>
    )}
    <Forum
      title="My Forum"
      description="Welcome to my forum! Feel free to post and discuss anything you'd like."
      posts={posts}
      onCreatePost={handleCreatePost}
      onCreateComment={handleCreateComment}
      onDeletePost={handleDeletePost}
      onDeleteComment={handleDeleteComment}
      onFlagPost={handleFlagPost}
      onFlagComment={handleFlagComment}
      onVoteOnPost={handleVoteOnPost}
      onVoteOnComment={handleVoteOnComment}
        >
          {error && <p>{error.message}</p>}
          {posts.map((post) => (
            <ForumPost
              key={post.id}
              author={post.author}
              title={post.title}
              body={post.body}
              comments={post.comments}
              voteStatus={post.voteStatus}
              onVote={(voteType) => handleVoteOnPost(post.id, voteType)}
              onDelete={() => handleDeletePost(post.id)}
              onFlag={() => handleFlagPost(post.id)}
            >
              {post.comments.map((comment) => (
                <ForumComment
                  key={comment.id}
                  author={comment.author}
                  body={comment.body}
                  voteStatus={comment.voteStatus}
                  onVote={(voteType) => handleVoteOnComment(post.id, comment.id, voteType)}
                  onDelete={() => handleDeleteComment(post.id, comment.id)}
                  onFlag={() => handleFlagComment(post.id, comment.id)}
                />
              ))}
            </ForumPost>
          ))}
        </Forum>
      </div>
      </>
    );
  };
  
  export default ForumPage;
  