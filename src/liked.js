// Video.js
import React, { useState } from 'react';


function Video() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    
      <div className="button-container">
        <button onClick={handleLike} className="btn btn-success">
          ({likes})
        </button>
        <button onClick={handleDislike} className="btn btn-danger">
        ({dislikes})
        </button>
      </div>
    
  );
}

export default Video;
