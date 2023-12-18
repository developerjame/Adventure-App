import React from 'react';
import ReactPlayer from 'react-player'

export default function Video1() {
  return (
    <>
    <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'videos/demo_video.MP4'
            width='70'
            height='70'
            controls = {true}

            />
        </div>
    </>
  );
}
