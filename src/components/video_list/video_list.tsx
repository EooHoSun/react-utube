import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from '../video_list/video_list.module.css';
import { VideoListPropsType } from 'app';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class VideoList extends React.Component<VideoListPropsType>{
    videos : Array<any> = [];

    constructor(props : VideoListPropsType){
        super(props);
        this.videos = props.videoList;
    }
    
    render(){
        const {videoList, display, onVideoClick} = this.props;
        
        return (
            <ul className={styles.videos}>
                {
                    videoList && videoList.map((video) => <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display}/>)
                }
            </ul>            
        );

    };
}


export default VideoList;