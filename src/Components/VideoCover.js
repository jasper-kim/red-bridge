import React, { Component } from 'react';
import VideoCover from 'react-video-cover'

export default class VideoBackground extends Component {
    state = {
        resizeNotifier: () => {},
      }
    render() {
        const videoOptions = {
          src: 'http://redbridgesoft.com/asset/movie/canada.mp4',
          autoPlay: true,
          loop: true,
          muted: true
        };
        const style = {
          width: '100vw',
          height: '100vh',
          position: 'relative',
          margin: 'auto',
        // top: '25vh',
        // left: '-25vw',
          zIndex: -2,
        };
    return (
          <div style={style} >
            <VideoCover
              videoOptions={videoOptions}
              remeasureOnWindowResize
              getResizeNotifier={resizeNotifier => {
                this.setState({
                  resizeNotifier,
                });
              }}
            />
          </div>
        );
      }
    }