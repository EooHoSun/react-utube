import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from '../video_list/video_list.module.css';
import { VideoListPropsType } from 'app';


const VideoList : React.FunctionComponent<VideoListPropsType>  = ({ videoList, display}) => {
    

    return (
        <ul className={styles.videos}>
            {
                videoList && videoList.map((video) => <VideoItem  key={video.id} video={video} display={display}/>)
            }
        </ul>            
        );
};


export default VideoList;