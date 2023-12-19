import React from 'react';

class Video1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <video width="320" height="180" controls>
          <source src="videos/demo_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Video1;