import React from 'react';
import styles from './video_item.module.css';
import { VideoItemPropsType } from 'app';
import {inject} from 'mobx-react';


const VideoItem  : React.FunctionComponent<VideoItemPropsType> = inject('store')(({ store, video, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;

  const handleClick = () => {
    store?.selectVideo(video);
  };


  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={handleClick}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{video.snippet.title}</p>
          <p className={styles.channel}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
)});

export default VideoItem;
