import React, { useReducer } from 'react';
import './Like.css';

const initialState = {
  liked: false,
  likeCount: 0,
};

function likeReducer(state, action) {
  switch (action.type) {
    case 'like':
      return { liked: true, likeCount: state.likeCount + 1 };
    case 'dislike':
      return { liked: false, likeCount: state.likeCount - 1 };
    default:
      throw new Error();
  }
}

export default function Like() {
  const [state, dispatch] = useReducer(likeReducer, initialState);

  const likeHandler = () => {
    dispatch({ type: 'like' });
  };

  const dislikeHandler = () => {
    dispatch({ type: 'dislike' });
  };

  return (
    <div>
      Likes: {state.likeCount}
      {state.liked ? (
        <div>
          <button
            className="dislike-button"
            onClick={dislikeHandler}
            aria-label="Dislike"
          >
            Dislike
          </button>
        </div>
      ) : (
        <div>
          <button
            className="like-button"
            onClick={likeHandler}
            aria-label="Like"
          >
            Like
          </button>
        </div>
      )}
    </div>
  );
}
